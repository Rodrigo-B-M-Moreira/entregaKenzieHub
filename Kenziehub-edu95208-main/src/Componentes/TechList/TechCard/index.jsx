import { FaTrashAlt } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import style from "./style.module.scss";
import { useContext } from "react";
import { Techcontext } from "../../../providers/TechContext";


export const TechCard = ({ tech }) => {
    const { deleteTech, setisModalEdit, setEditingTech } = useContext(Techcontext);

    return (
        <li className={style.conteinerLi}>
            <div className={style.tec}>

                <span className="title1">{tech.title}</span>
                <span className="Headline">{tech.status}</span>

            </div>
            <div className={style.buttons}>
                <button title="Ediatr"
                    onClick={() => {
                        setEditingTech(tech)
                        setisModalEdit(tech)
                    }}
                    aria-label="edit">
                    <VscEdit color="white" />
                </button>
                <button
                    onClick={() => deleteTech(tech.id)}
                    title="Deletar"
                    aria-label="Delete">
                    <FaTrashAlt color="white" />
                </button>
            </div>
        </li>
    )
}