import { Loading } from "./Componentes/Loanding";
import { useContextIm } from "./hooks/useContext";
import { RoutesMain } from "./routes";
import "./styles/index.scss";

function App() {
  const {loading} = useContextIm();

  return (
    <>
      {loading ? <Loading>Carregando...</Loading> : <RoutesMain />}
    </>
  )
}

export default App
