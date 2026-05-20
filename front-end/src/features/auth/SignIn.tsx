"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ChevronRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { LoginFormData, loginSchema } from "@/lib/validation/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { fetchWrapper } from "@/lib/fetch-wrapper/client";
import { useUser } from "@/store/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false },
  });

  const { setUser } = useUser();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const response = await fetchWrapper({
        url: "/api/user/login",
        method: "POST",
        body: data,
      });

      if (!response?.ok) {
        toast.error("Erro ao realizar login");
        return;
      }

      const responseData = await response.json();
      setUser(responseData);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao realizar login");
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-xs font-medium text-primary flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Acesso membros
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-medium text-textPrimary">
          Bem-vindo de volta
        </h2>
        <p className="text-sm text-textSecondary mt-1">
          Continue construindo seu futuro tech
        </p>
        <div className="mt-4 h-0.5 w-12 bg-primary rounded-full" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs text-textSecondary mb-1"
          >
            E-mail
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input
              id="email"
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
          <label
            htmlFor="password"
            className="block text-xs text-textSecondary mb-1"
          >
            Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input
              id="password"
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
          disabled={isLoading}
          className="w-full h-10 mt-6 bg-primary hover:bg-secondary text-black font-medium text-sm rounded transition-colors flex items-center justify-center gap-2 group cursor-pointer"
        >
          <div className="flex items-center">
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <div className="flex items-center gap-2">
                Entrar
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            )}
          </div>
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
