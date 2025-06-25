import { MdClose } from "react-icons/md";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { Techcontext } from "../../providers/TechContext";
import { ModalFormSchema } from "./registerForm.schema";
import style from "./style.module.scss";


export const CreateTechModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(ModalFormSchema),
    });


    const { createTech, setIsModalVisible } = useContext(Techcontext);


    const submit = (formdata) => {
        createTech(formdata);

    };

    return (
        <div className={style.everlayBox} role="dialog">

            <div className={style.modalBox}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={style.title}>
                        <h2 className="typography">Cadastrar Tecnologia</h2>
                        <button type="button"
                            onClick={() => setIsModalVisible(false)}
                            aria-label="close"
                            title="Fechar">
                            <MdClose color="white" />
                        </button>
                    </div>
                    <div className={style.info}>
                        <Input
                            label="Nome"
                            type="text"
                            id="title"
                            placeholder="Informe a tecnologia"
                            {...register("title")}
                            error={errors.title}
                        />
                        <div className={style.option2}>
                            <p>Selecionar Status</p>
                            <select className={style.op2}
                                id="title" type="text"
                                error={errors.status}
                                {...register("status")}>
                                <option id="title" type="text" value="Basíco">Basíco</option>
                                <option id="title" type="text" value="intermediário">Intermediário</option>
                                <option id="title" type="text" value="Avançado"  >Avançado</option>
                            </select>
                        </div>
                    </div>
                    <button className="btnAddC" type="submit" >Cadastrar Tecnologia</button>

                </form>
            </div>

        </div>
    )
}