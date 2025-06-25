import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";


const UserContext = createContext({});


const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [TecList, setTecList] = useState(null);

    const pathname= window.location.pathname;
  

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")

        const getUser = async () => {

            try {
                setLoading(true);
                const { data } = await api.get(`profile`, {
                    
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                setUser(data);
                setTecList(data.techs)
                navigate(pathname);
            } catch (error) {

            } finally {
                setLoading(false);
            }

        }
        getUser();
    }, [])

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
    };

    const userLogin = async (payLogin, setLoading) => {

        try {
            setLoading(true);
            const { data } = await api.post("sessions", payLogin);
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.token);

            navigate("/Dashboard");

        } catch (error) {

            if (error.response?.data.message === "Incorrect email / password combination")
                alert("Email ou senha incorreta ")

        } finally {
            setLoading(false);
        };
    };

    const userRegister = async (pay, setLoading) => {

        try {
            setLoading(true)
            await api.post("/users", pay);
            navigate("/");
            alert("Cadastro realizado com sucesso")
        } catch (error) {

            if (error.response?.data.message === "Email already exists") {
                alert("Usuario já cadastrado");
            }
        } finally {
            setLoading(false)
        }

    };

    return <UserContext.Provider value={{ user, loading, TecList, setTecList, userLogin, userLogout, userRegister }}>
        {children}
    </UserContext.Provider>
};

export { UserContext, UserProvider };