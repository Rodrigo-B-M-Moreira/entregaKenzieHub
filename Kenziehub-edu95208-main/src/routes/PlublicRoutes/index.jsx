import { Navigate, Outlet } from "react-router-dom";
import { useContextIm } from "../../hooks/useContext";


export const PublicRoutes = () => {
    const { user } = useContextIm();

    return (!user ? <Outlet /> :
        <Navigate to="/dashboard" />

    )
}