import icon from "../../assets/Loading.svg";
import style from "./style.module.scss";
import pageStyle from "../../styles/modules/pagesBox.module.scss";

export const Loading = () => {
    return (

    <div className={pageStyle.pageBox}>
        <figure className="container">
        <img className={style.loandingBox} src={icon} alt="Loanding " />
        </figure>
    </div>
    )
}