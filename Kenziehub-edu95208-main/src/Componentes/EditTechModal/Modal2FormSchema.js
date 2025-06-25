import { z } from "zod";
const Modal2FormSchema = z.object(
    {
        title: z
        .string().
        min(1, "Campo Obrigatório."),    
        status: z
        .string().
        min(1, "Campo Obrigatório."), 

    }
);

export { Modal2FormSchema };