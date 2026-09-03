"""
Importe et optimise pour le web les photos de l'exposition Marseille 2050.

Les originaux pèsent 10 à 25 Mo pièce : inutilisables en ligne. Ce script les
redimensionne à 1800 px de large au maximum, réencode en JPEG progressif de
qualité 82 et retire les métadonnées EXIF, ce qui ramène chaque fichier à
quelques centaines de kilooctets sans perte visible à l'écran.

Source : ~/Documents/M2050/PHOTOS_FINAL_MARSEILLE (hors dépôt, volumineux)
Sortie : public/images/m2050/

Usage : python3 scripts/import_m2050_images.py
"""
import os
from PIL import Image

SRC = os.path.expanduser('~/Documents/M2050/PHOTOS_FINAL_MARSEILLE')
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, 'public', 'images', 'm2050')
MAXW, Q = 1800, 82

# Nom de destination -> fragment du nom de fichier source.
# Les noms de sortie décrivent le contenu : le composant les lit tels quels.
WANTED = {
    'vue-ensemble':      'EXPO_M2050-2.jpg',    # salle, plusieurs îlots
    'ilot-panneaux':     'EXPO_M2050-6.jpg',    # un îlot complet avec ses panneaux
    'maison':            'MM_Maison-81.jpg',    # maquette du trois-fenêtres
    'maison-detail':     'MM_Maison-24.jpg',    # fenêtre illustrée, gros plan
    'rue':               'MM_Rue-12.jpg',       # mains posant les modules de la rue
    'ville':             'EXPO_M2050-101.jpg',  # mains sur le plateau de la ville
    'posidonie':         'EXPO_M2050-52.jpg',   # herbier, vue d'ensemble
    'posidonie-detail':  'EXPO_M2050-43.jpg',   # poissons dans l'herbier
    'carte':             'EXPO_M2050-67.jpg',   # carte du littoral marseillais
    'atelier':           'EXPO_M2050-69.jpg',   # fabrication en atelier
}


def find(fragment):
    for root, _, files in os.walk(SRC):
        for f in files:
            if f.endswith(fragment) and not f.startswith('._'):
                return os.path.join(root, f)
    return None


os.makedirs(OUT, exist_ok=True)
total_src = total_out = 0
for name, frag in WANTED.items():
    src = find(frag)
    if not src:
        print(f'  MANQUANT  {frag}')
        continue
    im = Image.open(src)
    im = im.convert('RGB')
    if im.width > MAXW:
        im = im.resize((MAXW, round(im.height * MAXW / im.width)), Image.LANCZOS)
    dst = os.path.join(OUT, name + '.jpg')
    im.save(dst, 'JPEG', quality=Q, optimize=True, progressive=True)
    s, o = os.path.getsize(src), os.path.getsize(dst)
    total_src += s
    total_out += o
    print(f'  {name:<18} {s/1e6:6.1f} Mo -> {o/1e3:6.0f} ko   {im.width}x{im.height}')

print(f'\ntotal : {total_src/1e6:.0f} Mo -> {total_out/1e6:.1f} Mo')
