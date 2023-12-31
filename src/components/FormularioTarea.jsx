import { useState } from "react";
import useTareas from "../hooks/useTareas";
import { toast } from "react-toastify";


const FormularioTarea = () => {

    const { agregarTarea } = useTareas();

    const [nombreTarea, setNombreTarea] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (nombreTarea === '') {
            toast.warn('No puede ir vacío');
            return;
        }

        agregarTarea(nombreTarea);
        setNombreTarea('')
    }


    return (
        <form onSubmit={handleSubmit} className="d-flex">
            <input type="text" className="form-control me-2" placeholder="Escribe una nueva tarea" value={nombreTarea} onChange={e => setNombreTarea(e.target.value)} />
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    )
}

export default FormularioTarea