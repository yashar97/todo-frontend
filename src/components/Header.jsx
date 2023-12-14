import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {

    const { cerrarSesion } = useAuth();

    

    return (
        <header className="bg-dark text-white text-center py-4">
            <h1 className="h3">To Do List</h1>
            {/* Puedes agregar enlaces de navegación aquí */}
            <Link onClick={cerrarSesion} to='/'>Salir</Link>
        </header>
    )
}

export default Header;