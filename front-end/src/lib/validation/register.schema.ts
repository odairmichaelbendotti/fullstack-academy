import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    lastName: z.string().min(1, "Sobrenome é obrigatório"),
    email: z.email("E-mail inválido"),
    phone: z.string().min(1, "Telefone é obrigatório"),
    birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
    password: z.string().min(4, "Senha deve ter pelo menos 4 caracteres"),
    confirmPassword: z
      .string()
      .min(4, "Senha deve ter pelo menos 4 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
