import { FormCadst } from "../../Componentes/FormCadst";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import pageStyles from "../../styles/modules/pagesBox.module.scss";
import style from "./style.module.scss";
export const Register = () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className={style.heardCad}>
                    <img src={Logo} alt="Logo Kenzie hub" />
                    <Link className="link" to="/">Voltar</Link>
                </div>
                <div>
                    <FormCadst />
                </div>
            </div>
        </main>
    );
}