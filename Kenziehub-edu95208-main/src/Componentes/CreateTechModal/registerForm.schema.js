import { z } from "zod";
const ModalFormSchema = z.object(
    {
        title: z
        .string().
        min(1, "Campo Obrigatório."),    
        status: z
        .string().
        min(1, "Campo Obrigatório."), 

    }
);

export { ModalFormSchema };