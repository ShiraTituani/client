import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    // .refine(
      // (value) => /[a-zA-Z]/.test(value),
      // { message: "Password must contain at least one English letter" }
    // ),
});


