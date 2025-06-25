import { FormLogin } from "../../Componentes/FormLogin";
import Logo from "../../assets/Logo.svg";
import pageStyles from "../../styles/modules/pagesBox.module.scss";
import style from "./style.module.scss"

export const Login = () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className={`container sm ${style.headerLog}`}>
                <img src={Logo} alt="Logo Kenzie hub" />
                <div >
                    <FormLogin/>
                </div>
            </div>
        </main>
    );
}