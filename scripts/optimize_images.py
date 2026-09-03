"""
Optimise pour le web les images de public/images/.

Plusieurs visuels du portfolio sortent tout droit de l'appareil photo : jusqu'à
7728 px de large et 22 Mo l'unité, pour un affichage qui n'excède jamais
1800 px. La page d'accueil en charge huit, soit près de 100 Mo. Ce script les
réduit à 1800 px de large au maximum, les réencode en JPEG progressif de
qualité 82 et retire les métadonnées EXIF.

Les fichiers sont remplacés sur place : les originaux restent récupérables
dans l'historique git (git checkout HEAD -- public/images).

Usage : python3 scripts/optimize_images.py [--dry-run]
"""
import os, sys, glob
from PIL import Image

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR = os.path.join(BASE, 'public', 'images')
MAXW, Q, SEUIL = 1800, 82, 400_000   # on ne touche pas aux fichiers déjà légers
DRY = '--dry-run' in sys.argv

total_before = total_after = 0
for path in sorted(glob.glob(os.path.join(DIR, '**', '*.jpg'), recursive=True)):
    before = os.path.getsize(path)
    im = Image.open(path)
    if before < SEUIL and im.width <= MAXW:
        print(f'  {os.path.relpath(path, DIR):<24} déjà léger, ignoré')
        continue
    im = im.convert('RGB')
    if im.width > MAXW:
        im = im.resize((MAXW, round(im.height * MAXW / im.width)), Image.LANCZOS)
    if not DRY:
        im.save(path, 'JPEG', quality=Q, optimize=True, progressive=True)
    after = os.path.getsize(path) if not DRY else before
    total_before += before
    total_after += after
    print(f'  {os.path.relpath(path, DIR):<24}{before/1e6:6.1f} Mo -> {after/1e6:5.2f} Mo   {im.width}x{im.height}')

print(f'\ntotal traité : {total_before/1e6:.0f} Mo -> {total_after/1e6:.1f} Mo'
      + ('   (dry-run, rien écrit)' if DRY else ''))
