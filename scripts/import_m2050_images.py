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
    # Toutes tirées du reportage de l'exposition MONTÉE (EXPO_M250) : les
    # dossiers MM_* sont des prises en atelier, où l'on voit le mobilier de
    # bureau et un radiateur en arrière-plan.
    'vue-ensemble':      'TINYLABS_EXPO_M2050-93.jpg',   # la salle, les îlots, une visiteuse
    'ilot-panneaux':     'TINYLABS_EXPO_M2050.jpg',      # un îlot complet, de face
    'maison':            'TINYLABS_EXPO_M2050-17.jpg',   # façade du trois-fenêtres et son arbre
    'maison-detail':     'TINYLABS_EXPO_M2050-18.jpg',   # fenêtre illustrée, intérieur habité
    'rue':               'TINYLABS_EXPO_M2050-23.jpg',   # la rue, ses commerces et ses passants
    'ville':             'TINYLABS_EXPO_M2050-102.jpg',  # une main pose les modules du plateau
    'posidonie':         'TINYLABS_EXPO_M2050-37.jpg',   # l'herbier de face, entier
    'posidonie-detail':  'TINYLABS_EXPO_M2050-30.jpg',   # un poisson seul sur le contreplaqué
    'carte':             'TINYLABS_EXPO_M2050-67.jpg',   # carte peinte du littoral
    'atelier':           'TINYLABS_EXPO_M2050-69.jpg',   # fabrication en atelier
}


def find(fragment):   # nom de fichier exact
    for root, _, files in os.walk(SRC):
        for f in files:
            if f == fragment and not f.startswith('._'):
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
