const stats = [
  { value: "847+", label: "Alunos formados" },
  { value: "92%",  label: "Empregados em 3 meses" },
  { value: "4.9★", label: "Avaliação média" },
  { value: "200+", label: "Horas de conteúdo" },
];

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Dev Fullstack",
    company: "Nubank",
    initials: "LF",
    text: "Em 6 meses saí de zero para uma vaga sênior. O conteúdo de arquitetura limpa e TypeScript foi o diferencial nas entrevistas.",
  },
  {
    name: "Ana Paula Costa",
    role: "Frontend Engineer",
    company: "iFood",
    initials: "AC",
    text: "Aprendi React do jeito certo — sem atalhos. Os projetos práticos me deram portfólio real para mostrar nos processos seletivos.",
  },
  {
    name: "Rodrigo Alves",
    role: "Backend Engineer",
    company: "PicPay",
    initials: "RA",
    text: "O módulo de Docker e CI/CD mudou como eu trabalho. Hoje faço deploys com confiança e automatizo tudo que antes era manual.",
  },
  {
    name: "Camila Souza",
    role: "Dev Fullstack",
    company: "Conta Azul",
    initials: "CS",
    text: "Tentei vários cursos antes. Aqui foi a primeira vez que entendi banco de dados de verdade — Prisma, migrations, performance.",
  },
];

const SocialProof = () => {
  return (
    <section className="relative w-full border-t border-outline">

      {/* métricas — 2 cols mobile, 4 desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-bg px-4 py-6 md:px-8 md:py-10 flex flex-col items-center text-center">
            <span className="text-3xl md:text-5xl font-black text-primary leading-none mb-1.5">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs text-textSecondary font-medium leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* depoimentos — 1 col mobile, 2 cols desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-bg p-5 md:p-8 flex flex-col gap-3 md:gap-4"
          >
            <span className="text-3xl md:text-4xl font-black text-primary/20 leading-none select-none -mb-1 md:-mb-2">
              "
            </span>

            <p className="text-sm text-textSecondary leading-relaxed flex-1">
              {t.text}
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-outline">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-primary">{t.initials}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-textPrimary leading-tight">{t.name}</p>
                <p className="text-xs text-textSecondary mt-0.5">
                  {t.role} · <span className="text-primary">{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SocialProof;
