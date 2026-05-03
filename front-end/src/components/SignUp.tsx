"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, Calendar } from "lucide-react";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface SignUpProps {
  onToggle: () => void;
}

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length > 0 ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
};

const validatePhone = (phone: string): boolean =>
  phone.replace(/\D/g, "").length === 11;

export default function SignUp({ onToggle }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => console.log("Cadastro:", data);

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-6">
        <h2 className="text-xl font-medium text-textPrimary mb-1">
          Criar conta
        </h2>
        <p className="text-sm text-textSecondary">Comece sua jornada</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome completo - 2 colunas */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-textSecondary mb-1.5">
              Nome
            </label>
            <input
              {...register("firstName", {
                required: "Obrigatório",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
              })}
              type="text"
              placeholder="Nome"
              className="w-full px-3 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-xs text-textSecondary mb-1.5">
              Sobrenome
            </label>
            <input
              {...register("lastName", {
                required: "Obrigatório",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
              })}
              type="text"
              placeholder="Sobrenome"
              className="w-full px-3 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email - com ícone */}
        <div>
          <label className="block text-xs text-textSecondary mb-1.5">
            E-mail
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input
              {...register("email", {
                required: "E-mail obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido",
                },
              })}
              type="email"
              placeholder="seu@email.com"
              className="w-full pl-10 pr-3 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Celular e Data - 2 colunas sem ícones */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-textSecondary mb-1.5">
              Celular
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Obrigatório",
                validate: (v) => validatePhone(v) || "Incompleto",
              }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="tel"
                  value={value || ""}
                  onChange={(e) => onChange(formatPhone(e.target.value))}
                  placeholder="(11) 9 9999-9999"
                  className="w-full px-3 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
                />
              )}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-xs text-textSecondary mb-1.5">
              Nascimento
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
              <input
                {...register("birthDate", {
                  required: "Obrigatória",
                  validate: (v) => {
                    const date = new Date(v);
                    const now = new Date();
                    const age = now.getFullYear() - date.getFullYear();
                    if (age < 13) return "Mínimo 13 anos";
                    if (age > 120) return "Inválida";
                    return true;
                  },
                })}
                type="date"
                className="w-full pl-10 pr-3 py-2.5 bg-surface border border-outline rounded text-sm text-textSecondary/50 focus:border-primary focus:outline-none transition-colors scheme-dark"
              />
            </div>
            {errors.birthDate && (
              <p className="text-xs text-red-500 mt-1">
                {errors.birthDate.message}
              </p>
            )}
          </div>
        </div>

        {/* Senha - com ícone e toggle */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-textSecondary mb-1.5">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
              <input
                {...register("password", {
                  required: "Obrigatória",
                  minLength: { value: 6, message: "Mínimo 6" },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-textPrimary transition-colors cursor-pointer"
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
          <div>
            <label className="block text-xs text-textSecondary mb-1.5">
              Confirme a senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
              <input
                {...register("confirmPassword", {
                  required: "Obrigatória",
                  validate: (v, fv) => v === fv.password || "Diferentes",
                })}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-surface border border-outline rounded text-sm text-textPrimary placeholder:text-textSecondary/50 focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-textPrimary transition-colors cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            {...register("acceptTerms", { required: "Aceite os termos" })}
            type="checkbox"
            id="terms"
            className="w-4 h-4 rounded border-outline bg-surface text-primary focus:ring-primary cursor-pointer"
          />
          <label
            htmlFor="terms"
            className="text-xs text-textSecondary cursor-pointer"
          >
            Aceito os{" "}
            <a href="#" className="text-primary hover:underline">
              Termos de Uso
            </a>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-xs text-red-500">{errors.acceptTerms.message}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-primary hover:bg-secondary text-black font-medium text-sm rounded transition-colors cursor-pointer"
        >
          Criar conta
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-outline">
        <p className="w-full text-center text-sm text-textSecondary">
          Já tem conta?{" "}
          <button
            onClick={onToggle}
            className="text-primary hover:text-secondary transition-colors cursor-pointer"
          >
            Entrar
          </button>
        </p>
      </div>
    </div>
  );
}
