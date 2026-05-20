"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import CornerElement from "@/components/layout/FrameContainer/CornerElement";
import Button from "@/components/ui/Button";
import Link from "next/link";
import UserDropDown from "@/features/auth/UserDropDown";
import { useUser } from "@/store/user";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Formação", href: "/formation" },
    { label: "Projetos", href: "/projects", hasDropdown: true },
    { label: "Cursos", href: "/courses" },
    { label: "Sobre", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex relative px-4 md:px-10 justify-between items-center w-full py-3 border-b border-outline bg-bg font-sans">
      {/* Elementos de Canto (Mantidos conforme solicitado) */}
      <CornerElement position="bottom-left" />
      <CornerElement position="bottom-right" />

      {/* Lado Esquerdo: Logo e Menu Desktop */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="relative w-30 h-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Fullstack Academy"
              fill
              sizes="250px"
              className="object-contain"
              priority
            />
          </Link>
        </div>
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-textPrimary ${
                isActive(item.href)
                  ? "text-textPrimary relative after:absolute after:-bottom-4.5 after:left-0 after:w-full after:h-0.5 after:bg-textPrimary"
                  : "text-textSecondary"
              }`}
            >
              {item.label}
              {item.hasDropdown && (
                <RiArrowDownSLine size={14} className="text-textSecondary" />
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Lado Direito: Botões e Menu Mobile */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <UserDropDown />
          ) : (
            <>
              <Link href="/sign?mode=signin">
                <Button text="Login" type="ghost" />
              </Link>
              <Button text="Matricule-se" type="outlinePrimary" />
            </>
          )}
        </div>

        {/* Toggle Mobile */}
        <button
          className="md:hidden text-textPrimary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-outline z-50 md:hidden animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-base font-medium ${isActive(item.href) ? "text-primary" : "text-textSecondary"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-outline" />
            <div className="flex flex-col gap-3">
              <Link
                href="/sign?mode=signin"
                className="w-full py-3 text-sm font-bold text-textPrimary border border-outline rounded-lg text-center block"
              >
                Login
              </Link>
              <button className="w-full py-3 text-sm font-bold text-bg bg-primary rounded-lg">
                Quero ser aluno
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
