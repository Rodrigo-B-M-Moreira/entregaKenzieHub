import { z } from "zod";

const LoginFormSchema = z.object(
    {
        email: z
            .string()
            .min(1, "O Email é obrigatório."),
        password: z
            .string()
            .min(1, "A senha é obrigatória."),


    }
);

export { LoginFormSchema };
