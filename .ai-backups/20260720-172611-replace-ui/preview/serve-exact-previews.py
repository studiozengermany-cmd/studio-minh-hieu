from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(r"J:\MINH_HIEU_STUDIO_UPLOAD\MINH_HIEU_STUDIO_UPLOAD")

MODELS = {
    "/identity.html": Path(r"C:\Users\Minh Hieu Producer\.codex\attachments\b7d810fd-0fdf-4819-aa20-6a474207b249\pasted-text.txt"),
    "/tokens.html": Path(r"C:\Users\Minh Hieu Producer\.codex\attachments\9d76927f-ace7-481c-b57b-9f415251eadb\pasted-text.txt"),
    "/music.html": Path(r"C:\Users\Minh Hieu Producer\.codex\attachments\0645b372-f837-4510-9fe8-a83df760a351\pasted-text.txt"),
    "/player.html": Path(r"C:\Users\Minh Hieu Producer\.codex\attachments\9501ee53-32d9-4368-8c96-1d4c1b7ca420\pasted-text.txt"),
}

INDEX = """<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>MHS — Original Code Comparison</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#030304;color:#e4e4e7;font:16px/1.6 system-ui,sans-serif}
main{width:min(1000px,calc(100% - 32px));margin:auto;padding:72px 0}small{font:11px monospace;letter-spacing:.15em;text-transform:uppercase;color:#67e8f9}
h1{font-size:clamp(2.4rem,7vw,5.5rem);line-height:.95;letter-spacing:-.05em;margin:18px 0 24px}.lead{max-width:650px;color:#ffffffb3}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:42px}.card{display:block;padding:28px;border:1px solid #ffffff14;border-radius:18px;background:#ffffff05;color:inherit;text-decoration:none}.card:hover{border-color:#8b5cf6;transform:translateY(-2px)}
.n{font:11px monospace;color:#ffffff80}.card h2{font-size:22px;margin:10px 0 4px}.card p{color:#ffffff99;margin:0}.exact{margin-top:34px;padding:16px;border-left:2px solid #22d3ee;color:#ffffffa8}
@media(max-width:680px){.grid{grid-template-columns:1fr}}
</style></head><body><main><small>MINH HIEU STUDIO / EXACT SOURCE PREVIEWS</small><h1>B&#7889;n code g&#7889;c.<br>B&#7889;n trang &#273;&#7897;c l&#7853;p.</h1><p class="lead">M&#7895;i trang b&#234;n d&#432;&#7899;i &#273;&#432;&#7907;c ph&#7909;c v&#7909; nguy&#234;n byte t&#7915; file anh g&#7917;i. Kh&#244;ng gh&#233;p l&#7841;i, kh&#244;ng &#273;&#7893;i CSS, kh&#244;ng vi&#7871;t l&#7841;i JavaScript.</p><div class="grid">
<a class="card" href="/identity.html"><span class="n">01</span><h2>Unified Identity Spec</h2><p>H&#7879; nh&#7853;n di&#7879;n v&#224; quy t&#7855;c migration.</p></a>
<a class="card" href="/tokens.html"><span class="n">02</span><h2>Tokens v2.0</h2><p>Living reference c&#7911;a design tokens.</p></a>
<a class="card" href="/music.html"><span class="n">03</span><h2>Music Section</h2><p>Music UI v&#224; player demo nguy&#234;n b&#7843;n.</p></a>
<a class="card" href="/player.html"><span class="n">04</span><h2>Player.js Harness</h2><p>Hai player v&#224; production module.</p></a>
</div><p class="exact">Trang n&#224;y ch&#7881; l&#224; menu ch&#7885;n. N&#7897;i dung b&#7889;n m&#244; h&#236;nh kh&#244;ng b&#7883; can thi&#7879;p.</p></main></body></html>""".encode("utf-8")


class PreviewHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        route = urlparse(self.path).path
        if route in ("/", "/index.html"):
            self._send(INDEX, "text/html; charset=utf-8")
            return
        if route in MODELS:
            self._send(MODELS[route].read_bytes(), "text/html; charset=utf-8")
            return
        super().do_GET()

    def translate_path(self, path):
        relative = urlparse(path).path.lstrip("/")
        return str(ROOT / relative)

    def _send(self, payload, content_type):
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(payload)


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 4175), PreviewHandler).serve_forever()
