import { z } from "zod";

const registerFormSchema = z.object(
    {
        name: z
            .string().
            min(1, "O nome é obrigatório."),
        email: z
            .string()
            .email("Forneça um e-mail válido")
            .min(1, "O Email é obrigatório."),
        password: z
            .string()
            .min(8, "São Necessários pelo menos oito caracteres.")
            .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
            .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
            .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
            .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]+/, "É necessário conter pelo menos um caracter especial."),

        confirmpassword: z
            .string()
            .min(8, "Confirme sua senha."),
        contact: z
            .string(),
        bio: z
            .string()
            .min(1, "Campo Obrigatório."),
        course_module: z
            .string()
            .min(1, "Campo Obrigatório."),



    }
).refine(({ password, confirmpassword }) => password === confirmpassword, {
    message: "As senhas não corresponde.",
    path: ["confirmpassword"]
});

export { registerFormSchema };
