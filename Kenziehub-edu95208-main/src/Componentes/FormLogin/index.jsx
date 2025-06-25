import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Link} from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./LoginForm.schema";
import style from "./styles.module.scss";
import { useContextIm } from "../../hooks/useContext";
import { useState } from "react";



export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema),
    });

    const [loading, setLoading] = useState(false);
    const { userLogin } = useContextIm()

    const submit = (payLogin) => {

        userLogin(payLogin, setLoading);
    };

    return (
        <form className={style.formLogin} onSubmit={handleSubmit(submit)}>
            <h2 className="title1">Login</h2>
            <Input
                label="Email"
                type="text"
                id="1"
                placeholder="informe seu email"
                error={errors.email}
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                id="2"
                placeholder="informe sua senha"
                error={errors.password}
                {...register("password")}
            />

            <div className={style.divBt}>
                <button className="buttonEnt" type="submit" disabled={loading}>Entrar</button>
            <p className="Headline">Ainda não possui uma conta?</p>
                <Link className="linkCad" to="/Register">Cadastre-se</Link>
            </div>
        </form>
    );
};