import { z } from "zod";

const userSignupSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const userLoginSchema = userSignupSchema.omit({ username: true });

type UserLogin = z.infer<typeof userLoginSchema>;
type UserSignup = z.infer<typeof userSignupSchema>;

export type { UserLogin, UserSignup };
export { userLoginSchema, userSignupSchema };
