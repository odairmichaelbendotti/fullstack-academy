import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(4, "Senha deve ter pelo menos 4 caracteres"),
  rememberMe: z.boolean(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
