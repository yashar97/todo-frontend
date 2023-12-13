import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useTareas from "../hooks/useTareas";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const [cargado, setCargado] = useState(false);
    const { setTareas } = useTareas;

    useEffect(() => {

        const autenticarUsuario = async () => {

            const token = localStorage.getItem('token');
            const url = 'http://localhost:8080/api/usuarios/perfil';

            if (!token) {
                setCargado(true);
                return;
            }

            try {

                const { data } = await axios(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setAuth(data);
                setCargado(true);


            } catch (error) {
                console.log(error);
            }

        }

        autenticarUsuario();

    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({});
        setTareas([]);
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, cargado, cerrarSesion }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };

export default AuthContext;