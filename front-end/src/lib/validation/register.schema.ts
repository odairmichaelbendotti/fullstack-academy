import { z } from "zod";

const phoneRegex = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/;

export const registerSchema = z
  .object({
    firstName: z.string().min(2, "Mínimo 2 caracteres"),
    lastName: z.string().min(2, "Mínimo 2 caracteres"),
    email: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
    phone: z.string().regex(phoneRegex, "Número incompleto"),
    birthDate: z
      .string()
      .min(1, "Data obrigatória")
      .refine(
        (val) => {
          const date = new Date(val);
          const now = new Date();
          const age = now.getFullYear() - date.getFullYear();
          return age >= 13 && age <= 120;
        },
        { message: "Idade deve ser maior do que 13 anos" },
      ),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "Aceite os termos",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas diferentes",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
