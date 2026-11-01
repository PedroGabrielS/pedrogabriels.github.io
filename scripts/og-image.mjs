/**
 * Gera public/og.png (1200x630) usado como imagem de pré-visualização
 * (Open Graph / LinkedIn / Twitter). Executar: `npm run og`.
 *
 * Desenha um SVG com a paleta do site e converte para PNG com sharp.
 * O texto vem de src/data/profile.ts para não duplicar conteúdo.
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { profile } from '../src/data/profile.ts';

const W = 1200;
const H = 630;

// Mesmos tokens de src/styles/global.css
const colors = {
  paper: '#0a1017',
  ink: '#e6ecf4',
  line: '#1f2b3b',
  accent: '#5aa9ff',
  accent2: '#8fe3ff',
  muted: '#8595aa',
};

/** Escapa texto para uso seguro dentro do SVG. */
const esc = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="15%" cy="-10%" r="70%">
      <stop offset="0%" stop-color="${colors.accent}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${colors.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${colors.paper}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- marca -->
  <text x="80" y="110" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="30" fill="${colors.ink}" letter-spacing="-1">${esc(profile.shortName)}<tspan fill="${colors.accent}">.</tspan></text>

  <!-- eyebrow -->
  <text x="80" y="235" font-family="Consolas, monospace" font-size="18" fill="${colors.accent}" letter-spacing="3">${esc(profile.headline.toUpperCase())}</text>

  <!-- título -->
  <text font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="76" fill="${colors.ink}" letter-spacing="-3">
    <tspan x="80" y="320">${esc(profile.hero.titleStart)}</tspan>
    <tspan x="80" y="400"><tspan fill="${colors.accent}">${esc(profile.hero.titleAccent)}</tspan> ${esc(profile.hero.titleEnd)}</tspan>
  </text>

  <!-- linha e rodapé -->
  <line x1="80" y1="500" x2="${W - 80}" y2="500" stroke="${colors.line}" stroke-width="2"/>
  <text x="80" y="555" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="26" fill="${colors.ink}">${esc(profile.name)}</text>
  <text x="${W - 80}" y="555" text-anchor="end" font-family="Consolas, monospace" font-size="18" fill="${colors.muted}">${esc(profile.location)}</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(new URL('../public/og.png', import.meta.url), png);
console.log(`public/og.png gerado (${W}x${H}, ${(png.length / 1024).toFixed(0)} KB)`);
