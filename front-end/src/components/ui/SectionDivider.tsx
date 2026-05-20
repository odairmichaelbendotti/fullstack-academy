const SectionDivider = () => {
  return (
    <div className="relative w-full h-16 overflow-hidden border-t border-outline">
      {/* hachuras diagonais — sutis, mesma família do fundo */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--textPrimary) 0px, var(--textPrimary) 1px, transparent 1px, transparent 12px)",
        }}
      />
      {/* fade das bordas para o fundo — torna a entrada e saída invisíveis */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg) 0%, transparent 40%, transparent 60%, var(--bg) 100%)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
