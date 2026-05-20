"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@/store/user";
import {
  User,
  BookOpen,
  LogOut,
  ChevronDown,
  //   Settings,
  Sparkles,
} from "lucide-react";
import { fetchWrapper } from "@/lib/fetch-wrapper/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, setUser } = useUser();
  const router = useRouter();

  async function handleLogout() {
    try {
      const response = await fetchWrapper({
        url: "/api/user/logout",
        method: "POST",
      });

      console.log(response);

      if (!response?.ok) {
        toast.error("Erro ao fazer logout");
        return;
      }

      setUser(null);
      setIsOpen(false);
      setIsMobileOpen(false);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao fazer logout");
      return;
    }
  }

  const userName = user?.name || "Usuário";
  const userEmail = user?.email || "";
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const menuItems = [
    {
      icon: User,
      label: "Minha conta",
      href: "/account",
      description: "Gerencie seus dados",
    },
    {
      icon: BookOpen,
      label: "Meus cursos",
      href: "/courses",
      description: "Continue aprendendo",
    },
    // {
    //   icon: Settings,
    //   label: "Configurações",
    //   href: "/settings",
    //   description: "Preferências",
    // },
  ];

  return (
    <>
      {/* Desktop Dropdown */}
      <div className="relative hidden md:block" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface/50 transition-all duration-200 group cursor-pointer"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-black font-semibold text-xs shadow-lg shadow-primary/20">
            {initials}
          </div>

          {/* User Info */}
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-textPrimary transition-colors">
              {userName}
            </span>
            <span className="text-xs text-textSecondary">{userEmail}</span>
          </div>

          {/* Chevron */}
          <ChevronDown
            className={`w-4 h-4 text-textSecondary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 top-full mt-1.5 w-64 bg-surface border border-outline rounded-xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-200 origin-top-right ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-outline bg-linear-to-r from-surface to-surface/50">
            <p className="text-sm font-medium text-textPrimary">{userName}</p>
            <p className="text-xs text-textSecondary truncate">{userEmail}</p>
          </div>

          {/* Menu Items */}
          <div className="p-1.5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 group/item cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-white/5 group-hover/item:bg-primary/10 transition-colors">
                  <item.icon className="w-4 h-4 text-textSecondary group-hover/item:text-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-textPrimary group-hover/item:text-primary transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs text-textSecondary">
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer - Logout */}
          <div className="border-t border-outline p-1.5">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg hover:bg-red-500/10 transition-all duration-200 group/logout cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-white/5 group-hover/logout:bg-red-500/20 transition-colors">
                <LogOut className="w-4 h-4 text-textSecondary group-hover/logout:text-red-400 transition-colors" />
              </div>
              <span className="text-sm font-medium text-textSecondary group-hover/logout:text-red-400 transition-colors">
                Sair
              </span>
            </button>
          </div>

          {/* Pro Badge */}
          <div className="px-3 py-1.5 bg-linear-to-r from-primary/10 to-secondary/10 border-t border-outline/50">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-xs text-textSecondary">
                Membro <span className="text-primary font-medium">Pro</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface/50 transition-all cursor-pointer"
      >
        <div className="w-7 h-7 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-black font-semibold text-xs">
          {initials}
        </div>
      </button>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline rounded-t-2xl z-50 md:hidden max-h-[85vh] overflow-y-auto">
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-12 h-1 bg-outline rounded-full" />
            </div>

            {/* User Info */}
            <div className="px-6 py-4 border-b border-outline">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-lg shadow-lg">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-textPrimary">{userName}</p>
                  <p className="text-sm text-textSecondary">{userEmail}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-white/5 transition-all active:scale-95"
                >
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <item.icon className="w-5 h-5 text-textSecondary" />
                  </div>
                  <div>
                    <p className="font-medium text-textPrimary">{item.label}</p>
                    <p className="text-sm text-textSecondary">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-4 w-full px-4 py-4 rounded-xl hover:bg-red-500/10 transition-all active:scale-95 mt-2"
              >
                <div className="p-2.5 rounded-xl bg-white/5">
                  <LogOut className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="font-medium text-red-400">Sair</p>
                  <p className="text-sm text-textSecondary">Encerrar sessão</p>
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-outline bg-linear-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-textSecondary">
                  Você é um membro{" "}
                  <span className="text-primary font-semibold">Pro</span>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
