#!/usr/bin/env python3
"""
Sert build/ en reproduisant le comportement de GitHub Pages : toute URL qui ne
correspond pas à un fichier renvoie index.html, afin que le routeur côté client
prenne le relais. Le http.server standard renvoie un 404 et empêche donc de
tester les liens profonds comme /work/marseille-2050 en local.

En production c'est le workflow qui assure ce repli, en copiant index.html
en 404.html dans l'artefact Pages.

Usage : python3 scripts/serve-spa.py [port]
"""
import http.server, os, sys, posixpath, urllib.parse

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'build')
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4173


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def translate_path(self, path):
        local = super().translate_path(path)
        if os.path.exists(local):
            return local
        # Un chemin sans extension est une route applicative, pas un fichier
        # manquant : on sert la coquille et le routeur lit l'URL.
        clean = posixpath.normpath(urllib.parse.urlparse(path).path)
        if not os.path.splitext(clean)[1]:
            return os.path.join(ROOT, 'index.html')
        return local

    def log_message(self, *a):
        pass


if __name__ == '__main__':
    http.server.ThreadingHTTPServer(('', PORT), SPAHandler).serve_forever()
