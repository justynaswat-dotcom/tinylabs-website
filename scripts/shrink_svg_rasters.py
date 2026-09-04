"""
Allège un SVG en réencodant les masques bitmap qu'il embarque, SANS réduire
leur résolution et sans toucher au tracé vectoriel.

Contexte. pdftocairo convertit l'axonométrie du principe constructif en tracés
vectoriels, mais conserve huit masques bitmap qui couvrent tout le dessin :
ce sont eux qui découpent les toiles d'ombrage. Ils font 2167 px de large et
représentaient 90 % du poids du fichier.

Piège rencontré, à ne pas répéter. Les rééchantillonner à 600 px allégeait
bien le fichier, mais comme chaque masque s'étend sur l'ENSEMBLE de la
planche, cela plafonnait la définition de tout le dessin : le résultat
paraissait pixellisé, donc pas vectoriel du tout.

La bonne approche : ces masques sont binaires (noir ou blanc, sans dégradé).
Les réencoder en 1 bit à pleine résolution divise le poids par vingt-huit
tout en conservant chaque pixel d'origine.

Usage : python3 scripts/shrink_svg_rasters.py <fichier.svg>
"""
import base64, io, re, sys, os
from PIL import Image

SVG = sys.argv[1]
SEUIL = 127          # bascule noir / blanc

s = open(SVG, encoding='utf-8').read()
avant = len(s)
n = 0


def reencode(m):
    global n
    prefixe, donnees = m.group(1), m.group(2)
    try:
        im = Image.open(io.BytesIO(base64.b64decode(donnees)))
    except Exception:
        return m.group(0)
    # Résolution conservée ; seule la profondeur de couleur change.
    im = im.convert('L').point(lambda v: 255 if v > SEUIL else 0).convert('1')
    buf = io.BytesIO()
    im.save(buf, 'PNG', optimize=True)
    n += 1
    return prefixe + base64.b64encode(buf.getvalue()).decode('ascii')


s = re.sub(r'(data:image/png;base64,)([A-Za-z0-9+/=]+)', reencode, s)
open(SVG, 'w', encoding='utf-8').write(s)

print(f'  {os.path.basename(SVG)} : {n} masques réencodés en 1 bit, résolution intacte')
print(f'  {avant/1e3:.0f} ko -> {len(s)/1e3:.0f} ko')
