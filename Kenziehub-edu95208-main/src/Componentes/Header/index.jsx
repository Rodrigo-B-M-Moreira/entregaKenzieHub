import Logo from "../../assets/Logo.svg";
import { useContextIm } from "../../hooks/useContext";
import style from "./style.module.scss"
export const Header = () => {

    const {user, userLogout} = useContextIm();
    return (
        <header className={style.header} >
            <div  >

                <div className={style.headerLogo}>
                    <img src={Logo} alt="Logo Kenzie hub" />
                    <button className="sair" onClick={() => userLogout()}>Sair</button>
                </div>
                <div className={style.headerinfo}>
                    <h1 className="title1">Olá {user?.name}</h1>
                    <p className="Headline">{user?.course_module}</p>
                </div>

            </div>

        </header>
    );
};