import { z } from "zod";

export const SignupValidationSchema = z.object({
  username: z.string().min(2, {message: 'Too short'}),
  name: z.string().min(2, {message: 'Too short'}),
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be at least 8 characters'})
});