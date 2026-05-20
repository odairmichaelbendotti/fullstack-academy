# Fullstack Academy — Front-end

## Sobre o Projeto

**Fullstack Academy** é um site de cursos de programação focado em desenvolvimento fullstack. A plataforma permite que usuários se cadastrem, façam login e acessem conteúdo de formações e cursos técnicos. O projeto está em constante evolução — a autenticação atual (JWT via back-end próprio) será migrada para **Better Auth** em breve.

---

## Estrutura do Monorepo

Este repositório é um **monorepo** com dois projetos separados na raiz:

```
fullstack-academy/
├── front-end/   ← Next.js 16 (este projeto)
└── back-end/    ← Express 5 + Prisma + PostgreSQL
```

Os dois projetos rodam de forma independente e se comunicam via API REST.

---

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript 5 |
| Estilização | Tailwind CSS v4 |
| Estado global | Zustand 5 |
| Formulários | React Hook Form + Zod |
| Ícones de UI | Lucide React |
| Notificações | Sonner |
| Runtime | React 19 |

---

## Paleta de Cores

Definida em [globals.css](src/app/globals.css) via CSS Variables:

```css
--bg:            #000000   /* Fundo principal — preto puro */
--surface:       #090a0b   /* Superfícies secundárias — preto muito escuro */
--primary:       #f59e0b   /* Âmbar — cor de destaque principal */
--secondary:     #d97706   /* Âmbar escuro — hover/variações da primária */
--textPrimary:   #fffbeb   /* Bege claro — texto principal */
--textSecondary: #b8b2a7   /* Cinza arenoso — texto secundário */
--outline:       #1a1a1a   /* Cinza escuro — bordas */
```

As cores são expostas ao Tailwind via `@theme inline`, então use sempre as classes semânticas (`bg-bg`, `text-primary`, `border-outline`, etc.) — **nunca valores hex hardcoded**.

---

## Tipografia

- `--font-sans` → `Geist Sans` (fonte principal)
- `--font-mono` → `Geist Mono` (código/mono)
- Fallback: `Arial, Helvetica, sans-serif`

---

## Logo e Branding

- **Logo principal (nav):** `/public/logo_v7.png` — 250px de largura, `object-contain`, carregada com `priority`
- **Logo alternativa (sign page):** `/public/logo.png` — versão quadrada (128×128px), usada na tela de login/cadastro
- Alt text padrão: `"Fullstack Academy"`

---

## Ícones Técnicos

SVGs organizados em `/public/tech-icons/` por categoria:

| Pasta | Ícones |
|---|---|
| `backend/` | express, fastify, javascript, jest, mongoose, nestjs, nodejs, prisma, swagger, typescript |
| `frontend/` | bootstrap, nextjs, react, redux, tailwindcss, vite, zustand |
| `database/` | mongodb, mysql, postgresql, redis |
| `infrastructure/` | aws, docker, kubernetes |
| `tools/` | git, github |

**Ícones de UI:** Lucide React — `ChevronDown`, `ChevronLeft`, `ChevronRight`, `ArrowRight`, `Menu`, `X`.

---

## Componentes Principais

### Button (`src/components/Button.tsx`)
Variantes: `primary`, `ghost`, `outline`, `outlinePrimary`, `fill`.
Destaque: micro-interação com **cantos triangulares animados** que surgem no hover.

### Card (`src/components/Card.tsx`)
Card com imagem de fundo, badge de categoria, título com `line-clamp`, navegação prev/next e dots de controle.

### Navigation (`src/components/Navigation.tsx`)
- Logo à esquerda + menu desktop (Home, Formação, Projetos, Cursos, Sobre)
- Link ativo: `text-textPrimary` com underline via `after:` pseudo-element
- Autenticado: mostra `<UserDropDown />`; não autenticado: botões "Login" e "Matricule-se"
- Mobile: menu hambúrguer com overlay animado (`animate-in slide-in-from-top`)

### FrameContainer (`src/components/FrameContainer/`)
Grid 3×3 (`[20px_1fr_20px]`) que cria um "frame" decorativo ao redor de todo o conteúdo. Inclui `CornerElement` nos 4 cantos — detalhe estético de referência cyberpunk/retro-futurista.

### Sign Page (`src/app/sign/page.tsx`)
Tela de login/cadastro com layout dividido: lado esquerdo com branding (oculto em mobile), lado direito com `<SignIn />` ou `<SignUp />` controlados via query param `?mode=signin|signup`.

> **Migração planejada:** esta tela será migrada para **Better Auth** em breve. Evite acrescentar lógica de autenticação na implementação atual.

---

## Estilo Visual

- **Tema:** Dark Mode — estética minimalista com toque cyberpunk/retro-futurista
- **Transições:** `transition-all duration-300` como padrão
- **Hover:** mudança para cor primária + borda + `scale-110` onde aplicável
- **Blur:** `backdrop-blur-md` para camadas sobrepostas (ex: setas do Card)
- **Max-width:** `max-w-412.5` (~1650px) no FrameContainer

---

## Rotas do Back-end (referência)

| Método | Rota | Descrição |
|---|---|---|
| POST | `/api/user/create` | Cadastro |
| POST | `/api/user/login` | Login (retorna cookie JWT) |
| POST | `/api/user/logout` | Logout |
| POST | `/api/user/me` | Dados do usuário autenticado (requer auth middleware) |

Back-end roda em Express 5, usa Prisma com PostgreSQL e autentica via JWT em cookie HttpOnly.
