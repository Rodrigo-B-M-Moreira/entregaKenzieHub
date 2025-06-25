import { Techcontext } from "../../providers/TechContext";
import { useContext } from "react";
import { IoAddSharp } from "react-icons/io5";
import { TechCard } from "./TechCard";
import style from "./style.module.scss";
import { useContextIm } from "../../hooks/useContext";


export const TechList = () => {
    const { setIsModalVisible } = useContext(Techcontext);
    const {TecList} = useContextIm();

    return (

        <div className={`containerTec ${style.techList}`}>
            <div className={style.titleTech}>
                <h1 className="title1">Tecnologias</h1>
                <button className="btnAdd" onClick={ () =>setIsModalVisible (true)} > <IoAddSharp  size={20}/></button>
            </div>
            <ul>
               {
                     TecList.map((tech) => {
                        return(
                            <TechCard key={tech.id} tech={tech}/>
                        )
                     })
               }
            </ul>
        </div>
    )

}