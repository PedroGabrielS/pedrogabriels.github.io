// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Configuração do Astro para publicação no GitHub Pages.
 *
 * - SITE: URL pública do site (ex.: https://usuario.github.io).
 * - BASE: subcaminho quando o repositório NÃO se chama `usuario.github.io`
 *   (ex.: repositório "portfolio" => base "/portfolio").
 *
 * Ambos vêm de variáveis de ambiente para não fixar valores no código;
 * o workflow de deploy define os dois a partir do nome do repositório.
 */
const site = process.env.SITE ?? 'https://pedrogabriels.github.io';
const base = process.env.BASE ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
