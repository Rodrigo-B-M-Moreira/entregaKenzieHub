import { Navigate, Outlet } from "react-router-dom";
import { useContextIm } from "../../hooks/useContext";

export const PrivateRoutes = () => {
    const { user } = useContextIm();
    return( user ? <Outlet /> : <Navigate to="/" />)
}