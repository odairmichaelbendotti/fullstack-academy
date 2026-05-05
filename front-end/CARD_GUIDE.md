# 🎯 COMPONENTE CARD - GUIA RÁPIDO

## ✅ O QUE FOI CRIADO

Você agora tem um **componente Card 100% reutilizável** para exibir cursos com design moderno e profissional!

### 📦 Arquivos Criados

```
✅ src/components/Card.tsx                 (Componente principal)
✅ src/components/CardExamples.tsx         (5 exemplos de uso)
✅ src/components/CARD_README.md           (Documentação completa)
✅ src/components/ARCHITECTURE.md          (Arquitetura visual)

✅ src/data/cards.ts                       (3 cards: Go, JS, TS)
✅ src/data/moreCards.ts                   (6 cards adicionais)

✅ src/types/card.ts                       (Tipos TypeScript)

✅ src/app/courses/page.tsx                (Página de cursos atualizada)
✅ src/app/demo/cards/page.tsx             (Página de demonstração)
```

## 🚀 COMEÇAR AGORA

### 1. Ver os Cards em Ação

**Opção A: Página de Cursos**
```
URL: http://localhost:3000/courses
Mostra: Grid com 3 cards (Go, JavaScript, TypeScript)
```

**Opção B: Página de Demonstração**
```
URL: http://localhost:3000/demo/cards
Mostra: Exemplos completos (grid, carousel, customização, etc)
```

### 2. Usar em Seu Código

```tsx
import Card from "@/components/Card";
import { courseCards } from "@/data/cards";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {courseCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
```

## 📊 ARRAY DE DADOS

### Cards Principais (src/data/cards.ts)

```typescript
const courseCards = [
  {
    id: 1,
    title: "Seja Expert",
    subtitle: "Domine a linguagem criada pelo Google",
    buttonText: "Começar Agora",
    bgColor: "from-blue-600 to-cyan-600",      // Gradiente Go
    textColor: "text-white",
    accentColor: "bg-cyan-400",
    badge: "BACKEND",
    highlight: "em GO!",
    decorativeIcon: "⚡",
    techIcons: [
      { name: "Go", icon: "/tech-icons/backend/nodejs.svg" },
      { name: "Docker", icon: "/tech-icons/tools/git.svg" },
      { name: "Git", icon: "/tech-icons/tools/github.svg" },
    ],
  },
  // ... JavaScript e TypeScript
];
```

## 🎨 COMPONENTE CARD

### Props

```typescript
interface CardProps {
  card: CardData;                // Dados do card (obrigatório)
  isActive?: boolean;            // Se está ativo (padrão: true)
  onButtonClick?: () => void;    // Callback do botão
}
```

### Elementos

- ✨ Gradiente de fundo customizável
- 🏷️ Badge com categoria
- 📝 Título e subtítulo
- 🎯 Texto destacado com fundo colorido
- 🔘 Botão outline com efeito hover
- 🛠️ Ícones das tecnologias
- 📍 Indicadores de slider
- 🎭 Decorações geométricas

## 🔄 EXEMPLOS DE USO

### Grid (3 Colunas)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {courseCards.map((card) => (
    <Card key={card.id} card={card} />
  ))}
</div>
```

### Carousel
```tsx
const [index, setIndex] = useState(0);

<div className="w-full max-w-2xl h-96">
  <Card card={courseCards[index]} />
</div>
```

### Com Callback
```tsx
<Card
  card={card}
  onButtonClick={() => console.log("Enrolled!")}
/>
```

## 🎯 CUSTOMIZAR

### Adicionar Novo Card

Edite `src/data/cards.ts` ou `src/data/moreCards.ts`:

```typescript
{
  id: 4,
  title: "NOVO CURSO",
  subtitle: "Descrição",
  buttonText: "Botão",
  bgColor: "from-purple-600 to-pink-600",    // Mudou cores!
  textColor: "text-white",
  accentColor: "bg-purple-300",
  badge: "NOVO",
  highlight: "em X!",
  decorativeIcon: "🎯",
  techIcons: [
    { name: "Tech", icon: "/tech-icons/backend/typescript.svg" },
  ],
}
```

### Alterar Cores

Cores disponíveis em `src/data/moreCards.ts` (colorPalettes):

| Tecnologia | Gradient | Preview |
|---|---|---|
| Go | `from-blue-600 to-cyan-600` | 🔵 |
| JavaScript | `from-yellow-500 to-amber-600` | 🟨 |
| TypeScript | `from-blue-700 to-indigo-700` | 🔷 |
| Python | `from-blue-500 to-yellow-500` | 🐍 |
| React | `from-cyan-500 to-blue-600` | ⚛️ |
| Node.js | `from-green-600 to-emerald-600` | 💚 |

## 📱 RESPONSIVIDADE

O componente é **totalmente responsivo**:

| Tela | Colunas | Behavior |
|---|---|---|
| Mobile (< 768px) | 1 | Stack vertical |
| Tablet (768-1024px) | 2 | Duas colunas |
| Desktop (> 1024px) | 3 | Três colunas |

Sem precisar fazer nada! O componente usa classes Tailwind responsivas.

## 🧪 RECURSOS

### Ver Exemplos

Arquivo: `src/components/CardExamples.tsx`

Contém 5 exemplos prontos:
1. Single Card
2. Multiple Cards Grid
3. Card Carousel
4. Custom Card
5. Interactive Card

### Documentação Completa

Arquivo: `src/components/CARD_README.md`

Inclui:
- Visão geral
- Estrutura de dados
- Customização
- Extensões futuras
- FAQ

### Arquitetura

Arquivo: `src/components/ARCHITECTURE.md`

Visual ASCII da estrutura do componente.

## 🎁 PRÓXIMOS PASSOS

### Sugestões de Expansão

1. **Adicionar mais cards**
   - Edite `src/data/cards.ts`
   - Crie novos cursos

2. **Criar carousel completo**
   - Use `src/app/demo/cards/page.tsx` como base
   - Adicione setas e navegação

3. **Integrar com API**
   - Fetch dados de um backend
   - Renderize dinamicamente

4. **Adicionar animações**
   - Intersection Observer
   - Framer Motion (se quiser)

## ⚡ STACK UTILIZADO

- ✅ Next.js 16.2.4 (App Router)
- ✅ React 19.2.4
- ✅ TypeScript 5
- ✅ TailwindCSS 4
- ✅ Lucide React 1.11.0
- ✅ Next.js Image (otimização)

## 📞 SUPORTE

### Dúvidas Comuns

**P: Como mudar a cor do card?**
R: Mude `bgColor` e `accentColor` no objeto do card

**P: Como adicionar um novo card?**
R: Edite `src/data/cards.ts` e adicione um objeto

**P: Como remover os ícones?**
R: Deixe `techIcons` vazio: `techIcons: []`

**P: Como usar em carousel?**
R: Veja `src/app/demo/cards/page.tsx` (seção 2)

---

**Criado com ❤️ para Fullstack Academy**
