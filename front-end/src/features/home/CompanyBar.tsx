const companies = [
  "Nubank",
  "iFood",
  "PicPay",
  "Conta Azul",
  "Stone",
  "Mercado Livre",
  "Totvs",
  "CI&T",
  "Avenue",
  "Itaú",
  "Bradesco",
  "BTG Pactual",
  "Creditas",
  "QuintoAndar",
  "Loft",
  "Gympass",
  "Pagar.me",
  "Loggi",
];

const CompanyBar = () => {
  return (
    <div className="w-full border-t border-b border-outline">
      <div className="flex flex-col md:flex-row items-center">

        {/* label */}
        <div className="w-full md:w-auto shrink-0 flex items-center justify-center md:justify-start px-6 md:px-10 py-3 md:py-5 border-b md:border-b-0 md:border-r border-outline bg-surface/20">
          <p className="text-[11px] font-semibold text-textSecondary leading-snug text-center md:text-left md:max-w-48">
            Nossos alunos estão nas{" "}
            <span className="text-textPrimary">melhores empresas</span> do Brasil
          </p>
        </div>

        {/* carrossel */}
        <div className="relative flex-1 min-w-0 overflow-hidden w-full">
          <div
            className="absolute inset-y-0 left-0 w-8 md:w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-8 md:w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
          />

          <div className="flex items-center py-3 md:py-4">
            <div
              className="flex items-center gap-8 md:gap-10 shrink-0"
              style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
            >
              {[...companies, ...companies, ...companies].map((name, i) => (
                <span
                  key={i}
                  className="text-xs md:text-sm font-semibold text-textSecondary/50 whitespace-nowrap tracking-wide shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyBar;
