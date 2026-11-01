# Portfólio — Pedro Gabriel da Silva

Site estático feito com **Astro + Tailwind CSS v4 + TypeScript**, publicado no **GitHub Pages**.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist (roda astro check antes)
npm run preview  # serve o build
```

## Editar conteúdo

Todo o texto da página vem de [`src/data/profile.ts`](src/data/profile.ts)
(dados pessoais, projetos, experiências e competências). Os componentes em
`src/components/` apenas renderizam esses dados.

## Publicar no GitHub Pages

1. Crie o repositório `PedroGabrielS.github.io` em github.com/PedroGabrielS
   (site de usuário: publicado na raiz, em https://pedrogabriels.github.io).
   Qualquer outro nome também funciona, publicado em um subcaminho.
2. Em **Settings → Pages**, defina **Source: GitHub Actions**.
3. Faça push na branch `main`. O workflow em `.github/workflows/deploy.yml`
   faz o build e o deploy. `site`/`base` são calculados automaticamente a
   partir do nome do repositório.

Para testar o build com o mesmo subcaminho localmente:

```bash
BASE=/portfolio SITE=https://pedrogabriels.github.io npm run build
```
