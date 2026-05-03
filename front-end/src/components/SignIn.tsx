"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, ChevronRight } from "lucide-react";
import { LoginFormData, loginSchema } from "@/lib/validation/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-2">
        <h2 className="text-xl font-medium text-textPrimary">Entrar</h2>
        <p className="text-sm text-textSecondary">Acesse sua conta</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs text-textSecondary mb-1">
            E-mail
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input
              {...register("email")}
              placeholder="seu@email.com"
              className="w-full pl-10 pr-3 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs text-textSecondary mb-1">Senha</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••"
              className="w-full pl-10 pr-10 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-textPrimary transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register("rememberMe")}
              type="checkbox"
              defaultChecked={false}
              className="w-3.5 h-3.5 rounded border-outline bg-surface text-primary focus:ring-primary"
            />
            <span className="text-textSecondary cursor-pointer">
              Salvar neste navegador
            </span>
          </label>
          <button
            type="button"
            className="text-textSecondary hover:text-primary transition-colors cursor-pointer"
          >
            Esqueceu sua senha?
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-primary hover:bg-secondary text-black font-medium text-sm rounded transition-colors flex items-center justify-center gap-2 group cursor-pointer"
        >
          Entrar
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-outline">
        <p className="w-full text-center text-sm text-textSecondary">
          Não tem conta?{" "}
          <Link
            href="/sign?mode=signup"
            className="text-primary hover:text-secondary transition-colors cursor-pointer"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
