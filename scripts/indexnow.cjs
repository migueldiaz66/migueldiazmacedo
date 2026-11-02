// Aviso a IndexNow (Bing, Yandex, Seznam, Naver) con las URLs del sitemap y
// nada mas: las paginas del sitio, no los archivos que sirve.
//
//   node scripts/indexnow.cjs            avisa de las URLs del sitemap en vivo
//   node scripts/indexnow.cjs <url> ...  avisa solo de las URLs dadas
//
// La clave esta publicada en public/<clave>.txt, que es como el protocolo
// comprueba que el dominio es de quien avisa.
const fs = require('node:fs');
const path = require('node:path');

const HOST = 'migueldiazmacedo.com';
const SITE = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

// La clave es el nombre del archivo publicado en public/: una sola fuente.
const keyFile = fs
  .readdirSync(path.join(__dirname, '..', 'public'))
  .find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('no encuentro el archivo de clave en public/');
const key = keyFile.replace(/\.txt$/, '');

const fromSitemap = async () => {
  const res = await fetch(`${SITE}/sitemap-0.xml`);
  if (!res.ok) throw new Error(`el sitemap respondio ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
};

(async () => {
  const args = process.argv.slice(2);
  const urlList = args.length ? args : await fromSitemap();

  const ajenas = urlList.filter((u) => !u.startsWith(SITE + '/'));
  if (ajenas.length) throw new Error('URL de otro dominio: ' + ajenas[0]);

  console.log(`avisando de ${urlList.length} URLs con la clave ${key}`);
  for (const u of urlList) console.log('  ' + u);

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `${SITE}/${keyFile}`,
      urlList,
    }),
  });

  const body = await res.text();
  console.log(`\nHTTP ${res.status} ${res.statusText}`);
  if (body.trim()) console.log(body.trim());
  // 200 aceptado; 202 aceptado y pendiente de comprobar la clave.
  if (res.status !== 200 && res.status !== 202) process.exitCode = 1;
})();
