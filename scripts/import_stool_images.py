"""
Importe et optimise les photos de l'atelier de l'Epinay — le tabouret vivant.

Source : ~/Desktop/26_Workshop_Epinet (hors dépôt)
Sortie : public/images/tabouret/

PIÈGE, à ne pas répéter. La moitié du fonds est prise en portrait avec
l'orientation notée dans l'EXIF plutôt que dans les pixels. Pillow lit les
pixels et ignore l'EXIF ; en réenregistrant, la balise disparaît et la photo
se retrouve couchée sur le site. D'où le exif_transpose systématique avant
tout traitement — sans lui, six des onze images sortaient de travers.

CHOIX DES IMAGES. 146 photos, quatre dossiers, toutes passées en planches
contact. Le fil retenu suit la fabrication : le site, la cueillette, les
ligatures, le substrat, la culture, l'objet fini. Les vues d'atelier avec
participants sont écartées — ce sont celles d'un atelier collectif, la fiche
parle d'un objet.

Usage : python3 scripts/import_stool_images.py
"""
import os
from PIL import Image, ImageOps

SRC = os.path.expanduser('~/Desktop/26_Workshop_Epinet')
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, 'public', 'images', 'tabouret')
MAXW, Q = 1800, 82

# nom de sortie -> (fichier source, recadrage éventuel, ancrage vertical)
# Le recadrage vaut « largeur / hauteur » visé ; None laisse la photo entière.
# L'ancrage dit où prendre la bande : 0 en haut, 1 en bas, 0,5 au centre.
WANTED = {
    # Ouverture pleine largeur : l'ossature et son moule montés dans le pré.
    # La bande d'ouverture est en 1,7/1, la photo en 16/9 : on recadre pour
    # que le cadrage automatique ne coupe pas le montage.
    # Pas de recadrage préalable : la bande d'ouverture applique déjà un
    # cover, et pré-recadrer en 16/7 revenait à zoomer deux fois. Une source
    # en PAYSAGE est indispensable — une portrait, comme la vue à la toison,
    # se retrouve agrandie au point de ne plus montrer que son sujet central.
    'ouverture':       ('DSCF3215.JPG', None),        # deux briques de mycélium en main

    # Le lieu : une vallée, une ferme, un toit de lauzes. Le projet parle de
    # matériaux d'ici — encore faut-il montrer où est cet ici.
    'montagne':        ('DSCF3256.JPG', None),        # le soleil passe la crête
    'ferme':           ('DSCF3220.JPG', None),        # la ferme au fond du pré
    'toit':            ('DSCF3221.JPG', None),        # les lauzes, appareillées

    # La main : ligatures d'essai, photographiées au mur.
    'ligature':        ('DSCF3367.JPG', None),        # une ligature, de près
    'assemblage':      ('DSCF3356.JPG', None),        # deux croisements liés
    'carnet':          ('Process/Process_013.JPG', None),  # le carnet et les bois

    # La matière : le mycélium, avant le tabouret.
    'blocs':           ('DSCF3224.JPG', None),        # les blocs sur l'établi
    'substrat':        ('Process/Process_0112.JPG', None),  # le substrat en main

    # La culture, la mise en terre, l'objet.
    'laine':           ('DSCF3408.JPG', None),        # la toison sur l'ossature
    'pre':             ('Process/Process_018.JPG', None),  # l'établi monté dans le pré
    'plantation':      ('DSCF3421.JPG', None),        # les pieds mis en terre
    'tabouret':        ('Process/Final_3.JPG', None), # le tabouret, debout
}


def chemin(rel):
    """Le fonds est réparti en quatre dossiers ; on accepte un chemin relatif
    ou un simple nom de fichier, cherché récursivement."""
    p = os.path.join(SRC, rel)
    if os.path.exists(p):
        return p
    cible = os.path.basename(rel)
    for root, _, files in os.walk(SRC):
        for f in files:
            if f == cible and not f.startswith('._'):
                return os.path.join(root, f)
    return None


def charge(rel):
    p = chemin(rel)
    if p is None:
        return None
    # exif_transpose AVANT tout : voir l'avertissement en tête de fichier.
    return ImageOps.exif_transpose(Image.open(p)).convert('RGB')


os.makedirs(OUT, exist_ok=True)
avant = apres = 0
for nom, spec in WANTED.items():
    rel, ratio = spec[0], spec[1]
    ancrage = spec[2] if len(spec) > 2 else 0.5
    im = charge(rel)
    if im is None:
        print(f'  MANQUANT  {rel}')
        continue
    src_taille = os.path.getsize(chemin(rel))

    if ratio:
        h = round(im.width / ratio)
        if h <= im.height:
            haut = round((im.height - h) * ancrage)
            im = im.crop((0, haut, im.width, haut + h))
        else:
            l = round(im.height * ratio)
            im = im.crop(((im.width - l) // 2, 0, (im.width - l) // 2 + l, im.height))

    grand = max(im.width, im.height)
    if grand > MAXW:
        k = MAXW / grand
        im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
    dst = os.path.join(OUT, nom + '.jpg')
    im.save(dst, 'JPEG', quality=Q, optimize=True, progressive=True)
    avant += src_taille
    apres += os.path.getsize(dst)
    print(f'  {nom:<18} {src_taille/1e6:5.1f} Mo -> {os.path.getsize(dst)/1e3:5.0f} ko   {im.width}x{im.height}')

print(f'\ntotal : {avant/1e6:.0f} Mo -> {apres/1e6:.1f} Mo')
