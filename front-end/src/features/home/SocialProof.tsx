const stats = [
  { value: "847+", label: "Alunos formados" },
  { value: "92%", label: "Empregados em até 3 meses" },
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
    <section className="relative w-full border-t border-outline px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">

        {/* métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline mb-px">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-8 py-10 flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black text-primary leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-xs text-textSecondary font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-bg hover:bg-surface transition-colors duration-300 p-8 flex flex-col gap-5"
            >
              {/* aspas decorativas */}
              <span className="text-5xl font-black text-primary/20 leading-none select-none -mb-3">
                "
              </span>

              {/* texto */}
              <p className="text-sm md:text-base text-textSecondary leading-relaxed flex-1">
                {t.text}
              </p>

              {/* autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-outline">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-textPrimary">{t.name}</p>
                  <p className="text-xs text-textSecondary">
                    {t.role} · <span className="text-primary">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
