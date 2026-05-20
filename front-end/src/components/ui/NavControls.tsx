"use client";

type NavControlsProps = {
  total: number;
  current: number;
  onChange: (index: number) => void;
  variant?: "light" | "dark";
};

const NavControls = ({
  total,
  current,
  onChange,
  variant = "light",
}: NavControlsProps) => {
  const baseColor = variant === "light" ? "bg-white" : "bg-slate-900";
  const inactiveColor = variant === "light" ? "bg-white/40" : "bg-slate-900/40";

  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`relative h-2 transition-all duration-300 rounded-full ${
            index === current
              ? `w-8 ${baseColor} shadow-lg`
              : `w-2 ${inactiveColor} hover:${baseColor}/60`
          }`}
          aria-label={`Ir para slide ${index + 1}`}
        >
          {/* Glow effect no item ativo */}
          {index === current && (
            <span
              className={`absolute inset-0 rounded-full blur-md ${baseColor} opacity-50`}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default NavControls;
