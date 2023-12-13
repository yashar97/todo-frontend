import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { toast } from 'react-toastify';

const TareaContext = createContext();

const TareaProvider = ({ children }) => {

    const { auth } = useAuth();

    const [tareas, setTareas] = useState([]);

    const [cambio, setCambio] = useState(false);


    useEffect(() => {

        const obtenerTareas = async () => {

            const token = localStorage.getItem('token');
            const url = 'http://localhost:8080/api/tareas';

            if (!token) {
                return;
            }

            try {

                const { data } = await axios(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setTareas(data);

            } catch (error) {
                console.log(error);
            }

        }

        obtenerTareas();

    }, [auth, cambio]);

    const agregarTarea = async tarea => {
        const token = localStorage.getItem('token');
        const url = 'http://localhost:8080/api/tareas';

        const nuevaTarea = { tarea };

        try {

            const { data } = await axios.post(url, nuevaTarea, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

   
            toast.success(data.msg);
            setCambio(!cambio);

        } catch (error) {
            console.log(error);
        }


    }

    const eliminarTarea = async id => {

        const token = localStorage.getItem('token');
        const url = `http://localhost:8080/api/tareas/${id}`;

        try {

            const { data } = await axios.delete(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            toast.success(data.msg);
            setCambio(!cambio);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <TareaContext.Provider value={{ tareas, setTareas, agregarTarea, setCambio, eliminarTarea }}>
            {children}
        </TareaContext.Provider>
    );
}

export { TareaProvider }

export default TareaContext;