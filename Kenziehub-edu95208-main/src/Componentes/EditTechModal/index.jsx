import { MdClose } from "react-icons/md";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Techcontext } from "../../providers/TechContext";
import { Modal2FormSchema } from "./Modal2FormSchema";
import style from "./style.module.scss";

export const EditTechModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(Modal2FormSchema),

    });


    const { techUpdate, setisModalEdit } = useContext(Techcontext);


    const submit = (formdata) => {
        techUpdate(formdata);

    };


    return (
        <div className={style.everlayBox1} role="dialog">

            <div className={style.modalBox1}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={style.title1}>
                        <h2 className="typography">Tecnologia Detalhes</h2>
                        <button type="button"
                            onClick={() => setisModalEdit(false)}
                            aria-label="close"
                            title="Fechar">
                            <MdClose color="white" />
                        </button>
                    </div>
                    <div className={style.info1}>
                        <Input

                            label="Nome"
                            type="text"
                            id="title"
                            placeholder="Informe a tecnologia"
                            {...register("title")}
                            error={errors.text}
                        />
                        <div className={style.option21}>
                            <p>Selecionar Status</p>
                            <select className={style.op21}
                                id="title" type="text"
                                error={errors.status}
                                {...register("status")}>
                                <option id="title" type="text" value="Basíco">Basíco</option>
                                <option id="title" type="text" value="intermediário">Intermediário</option>
                                <option id="title" type="text" value="Avançado"  >Avançado</option>
                            </select>
                        </div>
                    </div>
                    <button className="btnAddC" type="submit" >Salvar alterações</button>

                </form>
            </div>

        </div>
    )
}