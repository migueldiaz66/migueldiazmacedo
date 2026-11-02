import type { APIRoute } from 'astro';

// Sello del despliegue: el commit con el que se compiló esta copia del sitio y
// la hora en que se compiló. Sirve para saber, desde fuera, si lo que está
// publicado ya incluye un cambio determinado: el flujo de IndexNow espera a que
// esta línea traiga su commit antes de avisar a los buscadores.
//
// CF_PAGES_COMMIT_SHA lo pone Cloudflare Pages en la compilación remota; en la
// local no existe y el sello dice "local".
export const GET: APIRoute = () => {
  const commit = process.env.CF_PAGES_COMMIT_SHA ?? 'local';
  const body = `${commit}\n${new Date().toISOString()}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
