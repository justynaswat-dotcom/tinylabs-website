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
import os, subprocess
from PIL import Image

SRC = os.path.expanduser('~/Documents/M2050/PHOTOS_FINAL_MARSEILLE')
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, 'public', 'images', 'm2050')
MAXW, Q = 1800, 82

# Photo d'ouverture : elle vit dans le dossier d'images du projet Figma
# d'origine, et non dans le reportage d'exposition.
FIBOIS = os.path.expanduser(
    '~/Documents/REPO_NOCODE/Minimalist Editorial Website/build/images/IMAGE_FIBOIS.jpg')

# Nom de destination -> fragment du nom de fichier source.
# Les noms de sortie décrivent le contenu : le composant les lit tels quels.
WANTED = {
    # Aucune photo ne doit montrer de visiteur ni de personne au travail :
    # la fiche donne à voir le dispositif, pas son inauguration. Les figurines
    # des maquettes, elles, font partie des objets exposés.
    # Une valeur commençant par « / » est un chemin absolu ; sinon le fichier
    # est cherché par nom exact dans SRC.
    'vue-ensemble':      FIBOIS,                          # les îlots et leurs panneaux, en large
    'maison':            'TINYLABS_EXPO_M2050-17.jpg',    # façade du trois-fenêtres et son arbre
    'maison-detail':     'TINYLABS_EXPO_M2050-18.jpg',    # fenêtre illustrée, intérieur habité
    'rue':               'TINYLABS_EXPO_M2050-23.jpg',    # la rue, ses commerces et ses passants
    'ville':             'TINYLABS_EXPO_M2050-100.jpg',   # le plateau et ses modules, vu de dessus
    'posidonie-detail':  'TINYLABS_EXPO_M2050-30.jpg',    # un poisson seul sur le contreplaqué
}

# Deux sorties ne sont pas de simples redimensionnements.

# L'herbier : la seule vue qui le montre entier est un panorama de rapport 2,5
# (dossier MEXPO_PANNO). La vignette carrée de la manip en est un morceau,
# cadré sur l'herbier en volume et ses poissons.
PANO = 'Untitled-8.jpg'
PANO_CROP_X = 0.355        # bord gauche du carré, en fraction de la largeur

# L'axonométrie : page 1 du PDF de principes constructifs, qui montre les
# quatre configurations du chevalet. Le PDF est transparent, il faut donc le
# composer sur le fond du site plutôt que de le laisser sur du noir.
AXO_PDF = os.path.expanduser(
    '~/Documents/REPO_NOCODE/Minimalist Editorial Website/build/assets/AXO_1_1X2_1 (1).pdf')
FOND = (247, 245, 242)


def find(fragment):   # chemin absolu, ou nom de fichier exact dans SRC
    if fragment.startswith('/'):
        return fragment if os.path.exists(fragment) else None
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


# posidonie.jpg : carré taillé dans le panorama de l'îlot
src = find(PANO)
if src:
    im = Image.open(src).convert('RGB')
    h = im.height
    x = round(im.width * PANO_CROP_X)
    im = im.crop((x, 0, x + h, h)).resize((1400, 1400), Image.LANCZOS)
    dst = os.path.join(OUT, 'posidonie.jpg')
    im.save(dst, 'JPEG', quality=84, optimize=True, progressive=True)
    total_src += os.path.getsize(src); total_out += os.path.getsize(dst)
    print(f'  {"posidonie":<18} {os.path.getsize(src)/1e6:6.1f} Mo -> '
          f'{os.path.getsize(dst)/1e3:6.0f} ko   1400x1400  (carré taillé dans le panorama)')
else:
    print(f'  MANQUANT  {PANO}')

# axonometrie.jpg : page 1 du PDF, sur le fond du site
if os.path.exists(AXO_PDF):
    subprocess.run(['sips', '-s', 'format', 'png', '--out', '/tmp/axo.png', AXO_PDF],
                   capture_output=True)
    im = Image.open('/tmp/axo.png').convert('RGBA')
    fond = Image.new('RGBA', im.size, FOND + (255,))
    fond.alpha_composite(im)
    im = fond.convert('RGB')
    im.thumbnail((MAXW, MAXW), Image.LANCZOS)
    dst = os.path.join(OUT, 'axonometrie.jpg')
    im.save(dst, 'JPEG', quality=88, optimize=True, progressive=True)
    total_src += os.path.getsize(AXO_PDF); total_out += os.path.getsize(dst)
    print(f'  {"axonometrie":<18} {os.path.getsize(AXO_PDF)/1e6:6.1f} Mo -> '
          f'{os.path.getsize(dst)/1e3:6.0f} ko   {im.width}x{im.height}')
else:
    print(f'  MANQUANT  {AXO_PDF}')

print(f'\ntotal : {total_src/1e6:.0f} Mo -> {total_out/1e6:.1f} Mo')
