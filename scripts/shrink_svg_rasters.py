"""
Allège un SVG en rééchantillonnant les images bitmap qu'il embarque, sans
toucher au tracé vectoriel.

Cas d'usage : l'axonométrie du principe constructif. Le dessin de structure
est bien vectoriel, mais les huit toiles d'ombrage sont des bitmaps de
2167 px de large hérités du PDF, pour un affichage d'environ 110 px. Ils
représentaient à eux seuls la quasi-totalité du poids du fichier.

Usage : python3 scripts/shrink_svg_rasters.py <fichier.svg> [largeur_max]
"""
import base64, io, re, sys, os
from PIL import Image

SVG = sys.argv[1]
MAXW = int(sys.argv[2]) if len(sys.argv) > 2 else 600

s = open(SVG, encoding='utf-8').read()
avant = len(s)
n = 0


def shrink(m):
    global n
    prefixe, donnees = m.group(1), m.group(2)
    try:
        im = Image.open(io.BytesIO(base64.b64decode(donnees)))
    except Exception:
        return m.group(0)
    if im.width <= MAXW:
        return m.group(0)
    im = im.resize((MAXW, max(1, round(im.height * MAXW / im.width))), Image.LANCZOS)
    buf = io.BytesIO()
    # On conserve le PNG : ces textures ont un canal alpha qui découpe la toile.
    im.save(buf, 'PNG', optimize=True)
    n += 1
    return prefixe + base64.b64encode(buf.getvalue()).decode('ascii')


s = re.sub(r'(data:image/png;base64,)([A-Za-z0-9+/=]+)', shrink, s)
open(SVG, 'w', encoding='utf-8').write(s)

apres = len(s)
print(f'  {os.path.basename(SVG)} : {n} bitmaps rééchantillonnés à {MAXW} px')
print(f'  {avant/1e3:.0f} ko -> {apres/1e3:.0f} ko')
