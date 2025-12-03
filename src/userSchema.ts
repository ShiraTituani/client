import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .refine(
      (value) => /[a-zA-Z]/.test(value),
      { message: "Password must contain at least one English letter" }
    ),
});

export const RegisterSchema = z.object({
  name: z.string().min(4, "name must be at least 4 characters long"),
  email: z.string().email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .refine(
      (value) => /[a-zA-Z]/.test(value),
      { message: "Password must contain at least one English letter" }
    ),
});
