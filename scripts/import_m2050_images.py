"""
Importe et optimise pour le web les photos de l'exposition Marseille 2050.

Les originaux pèsent 10 à 25 Mo pièce : inutilisables en ligne. Ce script les
redimensionne à 1800 px de large au maximum, réencode en JPEG progressif de
qualité 82 et retire les métadonnées EXIF, ce qui ramène chaque fichier à
quelques centaines de kilooctets sans perte visible à l'écran.

Source : ~/Documents/M2050/PHOTOS_FINAL_MARSEILLE (hors dépôt, volumineux)
Sortie : public/images/m2050/

CHOIX DES IMAGES. Le fonds compte 239 photos réparties en six dossiers. Les
deux dossiers de timelapse ne montrent que le montage, une personne dans
chaque vue : inutilisables ici. La sélection ci-dessous suit trois règles.

  1. Aucun visiteur, aucune personne au travail. La fiche donne à voir le
     dispositif, pas son inauguration. Les figurines des maquettes, elles,
     font partie des objets exposés.
  2. Peu de couleur. L'exposition est très colorée ; une page qui empilerait
     ses vues les plus vives deviendrait illisible. Les photos retenues sont
     dominées par le bois et le blanc de la halle, la couleur n'arrivant que
     là où elle est le sujet — les quatre dispositifs.
  3. Un sujet par image. Les vues d'atelier, où l'on voit un radiateur, un
     parquet ou des tréteaux blancs, sont écartées au profit des cadrages
     serrés sur fond neutre.

Usage : python3 scripts/import_m2050_images.py
"""
import os, subprocess
from PIL import Image

SRC = os.path.expanduser('~/Documents/M2050/PHOTOS_FINAL_MARSEILLE')
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, 'public', 'images', 'm2050')
MAXW, Q = 1800, 82

# Photo d'ouverture : elle vit dans le dossier d'images du projet Figma
# d'origine, et non dans le reportage d'exposition. Choisie par la cliente.
FIBOIS = os.path.expanduser(
    '~/Documents/REPO_NOCODE/Minimalist Editorial Website/build/images/IMAGE_FIBOIS.jpg')

# Second dossier source : la sélection faite par la cliente. Deux de ses vues
# (les DSCF) n'existent que là et ne figurent pas dans le reportage.
CHOIX = os.path.expanduser('~/Downloads/Photos for the MArseille website')

# Nom de destination -> fragment du nom de fichier source.
# Les noms de sortie décrivent le contenu : le composant les lit tels quels.
# Une valeur commençant par « / » est un chemin absolu ; sinon le fichier est
# cherché par nom exact dans SRC, quel que soit le sous-dossier.
WANTED = {
    # Ouverture, pleine largeur.
    'vue-ensemble':   FIBOIS,

    # Diptyque : la structure nue, puis les pièces à plat. Deux images sans
    # presque aucune couleur, qui reposent l'œil entre deux sections.
    'chevalet':       'TINYLABS_EXPO_M2050-63.jpg',   # le chevalet de face, bois seul
    'poissons':       'TINYLABS_EXPO_M2050-29.jpg',   # poissons découpés posés sur le contreplaqué

    # Les quatre dispositifs. Une image chacun, la plus lisible. Trois d'entre
    # elles viennent de la sélection de la cliente : la maquette de la maison
    # photographiée entière restait un objet fermé, alors que la façade cadrée
    # de près montre ce qui s'y joue, fenêtre après fenêtre.
    'maison':         'TINYLABS_EXPO_M2050-18.jpg',   # la façade illustrée, ses fenêtres habitées
    'rue':            'TINYLABS_EXPO_M2050-23.jpg',   # la rue, ses commerces et ses passants
    'ville':          'TINYLABS_EXPO_M2050-100.jpg',  # le plateau de jeu et ses modules, vu de dessus
    'posidonie':      'TINYLABS_EXPO_M2050-52.jpg',   # l'herbier en volume, cadré par le chevalet

    # Galerie, tenue en registre d'architecture : le bâti seul, six lectures
    # qui ne se répètent pas — la structure entière, l'îlot dans la halle, un
    # détail de charpente, l'élévation de la rangée, un panneau et sa tablette,
    # la couverture translucide. Une première série mêlait des détails
    # graphiques qui racontaient le contenu de l'exposition plutôt que sa
    # construction ; une seconde tenait un gros plan d'assemblage, écarté.
    'gal-halle':       'TINYLABS_EXPO_M2050-3.jpg',    # un chevalet nu dans la halle, structure entière
    'gal-ilot':        'TINYLABS_EXPO_M2050-11.jpg',   # un îlot équipé sous sa couverture
    'gal-structure':   'DSCF1496.jpg',                 # le chant du panneau, la ferme et la couverture
    'gal-rangee':      'Untitled-5.jpg',               # la rangée de face, presque une élévation
    'gal-panneau':     'DSCF1505.jpg',                 # un panneau et la tablette qui le prolonge
    'gal-couverture':  'TINYLABS_EXPO_M2050-62.jpg',   # poutres superposées et couverture translucide
}

# L'axonométrie n'est pas un simple redimensionnement.
#
# Deux planches existent : un carré qui empile les quatre configurations deux
# par deux, et une bande qui les aligne. C'est la bande qui est retenue.
# pdftocairo en préserve les tracés — un dessin technique doit rester net à
# toutes les tailles.
#
# Piège, à ne pas répéter : les masques bitmap du PDF couvrent TOUT le dessin.
# Les rééchantillonner allège le fichier mais plafonne la définition de
# l'ensemble, qui paraît alors pixellisé. shrink_svg_rasters.py les réencode
# en 1 bit à pleine résolution : 229 ko -> 31 ko sans perdre un pixel.
#
# Le cadrage et le retrait du fond blanc ont été faits à la main sur le
# fichier livré (viewBox resserrée à 24 unités de marge). Le SVG en place est
# donc plus abouti que ce que produirait une simple reconversion : ce bloc ne
# s'exécute que si le fichier a disparu.
AXO_SVG_LIVRE = os.path.expanduser(
    '~/Documents/REPO_NOCODE/Minimalist Editorial Website/build/images/vue_iso_modules_justyna.svg')


def find(fragment):   # chemin absolu, ou nom de fichier exact dans SRC puis CHOIX
    if fragment.startswith('/'):
        return fragment if os.path.exists(fragment) else None
    for base in (SRC, CHOIX):
        for root, _, files in os.walk(base):
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

axo = os.path.join(OUT, 'axonometrie.svg')
if os.path.exists(axo):
    print(f'  {"axonometrie.svg":<18} déjà en place ({os.path.getsize(axo)/1e3:.0f} ko), conservé')
elif os.path.exists(AXO_SVG_LIVRE):
    subprocess.run(['cp', AXO_SVG_LIVRE, axo])
    subprocess.run(['python3', os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                            'shrink_svg_rasters.py'), axo])
    print(f'  {"axonometrie.svg":<18} réimporté brut — cadrage et fond blanc à reprendre à la main')
else:
    print(f'  MANQUANT  {AXO_SVG_LIVRE}')

print(f'\ntotal photos : {total_src/1e6:.0f} Mo -> {total_out/1e6:.1f} Mo')
