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

LIMITE CONNUE. Le tabouret achevé n'existe qu'en 900 px : les trois fichiers
« Final » sont des exports tardifs, et le reportage s'arrête à DSCF3447, où
l'assise est encore sous film. La couverture est donc agrandie à 1800 px de
large — au Lanczos plutôt qu'en laissant le navigateur le faire, mais
agrandie tout de même. Si l'original de ces trois vues réapparaît, il suffit
de le substituer ici.

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
    # Le tabouret achevé, en pleine définition — les fichiers « Final » n'en
    # sont que des exports à 900 px, inutilisables en pleine largeur.
    #
    # La photo est en portrait et la bande d'ouverture applique un cover. Deux
    # pièges s'annulent ici : on recadre en 4/3 seulement, pas en 16/7 (une
    # bande étroite prise dans un portrait ne montrerait qu'une tranche), et
    # on exporte à 1800 px de LARGE et non de grand côté, sans quoi la bande
    # agrandirait l'image. L'ancrage descend le cadre sur le tabouret, qui est
    # dans la moitié basse.
    'ouverture':       ('Process/Final_3.JPG', 4 / 3, 0.58, 'largeur'),

    # Le lieu : une vallée, une ferme, un toit de lauzes. Le projet parle de
    # matériaux d'ici — encore faut-il montrer où est cet ici.
    'montagne':        ('DSCF3256.JPG', None),        # le soleil passe la crête
    'ferme':           ('DSCF3220.JPG', None),        # la ferme au fond du pré
    'toit':            ('DSCF3221.JPG', None),        # les lauzes, appareillées

    # La main : une ligature au mur, et une maquette d'étude du piètement.
    # Deux suffisent — une galerie pleine de branches ne montrait plus comment
    # l'objet se fait.
    'assemblage':      ('DSCF3356.JPG', None),        # deux croisements liés
    'maquette-profil': ('DSCF3385.JPG', None),        # la maquette du piètement, de profil

    # Les croquis. Ils précèdent les gestes, et la section Fabrication
    # n'avait que du texte.
    'croquis':         ('DSCF3380.JPG', None),        # la double page, le tabouret et son plan
    'croquis-terrain': ('DSCF3404.JPG', None),        # le carnet dans l'herbe, l'ossature plantée derrière

    # Le procédé, du moule à la mise en terre. Presque tout est en portrait
    # dans le fonds : les trois cellules en largeur de la mosaïque se prennent
    # donc sur les rares vues paysage.
    'substrat':        ('Process/Process_0112.JPG', None),  # le substrat en main — section Matière
    'moule':           ('DSCF3434.JPG', None),        # le moule et le substrat sur l'établi
    'tassage':         ('DSCF3444.JPG', None),        # le substrat tassé autour des pieds
    'laine':           ('DSCF3430.JPG', None),        # la laine enroulée sur l'ossature
    'beche':           ('Process/Process_016.JPG', None),  # la motte ouverte à la bêche

    # La culture, la mise en terre, l'objet.
    'laine':           ('DSCF3408.JPG', None),        # la toison sur l'ossature
    'pre':             ('Process/Process_018.JPG', None),  # l'établi monté dans le pré
    'plantation':      ('DSCF3421.JPG', None),        # les pieds mis en terre
    'culture':         ('DSCF3447.JPG', None),        # monté dans le pré, assise encore sous film
    'tabouret':        ('Process/Final_2.JPG', None), # le tabouret démoulé, debout
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
    plafond = spec[3] if len(spec) > 3 else 'grand'
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

    reference = im.width if plafond == 'largeur' else max(im.width, im.height)
    # Agrandissement toléré pour la seule couverture : voir la note en tête.
    if reference > MAXW or (plafond == 'largeur' and reference < MAXW):
        k = MAXW / reference
        im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
    dst = os.path.join(OUT, nom + '.jpg')
    im.save(dst, 'JPEG', quality=Q, optimize=True, progressive=True)
    avant += src_taille
    apres += os.path.getsize(dst)
    print(f'  {nom:<18} {src_taille/1e6:5.1f} Mo -> {os.path.getsize(dst)/1e3:5.0f} ko   {im.width}x{im.height}')

print(f'\ntotal : {avant/1e6:.0f} Mo -> {apres/1e6:.1f} Mo')
