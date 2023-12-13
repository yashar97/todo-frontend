import useTareas from "../hooks/useTareas";

const Tarea = ({ tarea }) => {

    const {eliminarTarea} = useTareas();



    const primeraLetra = tarea.tarea.charAt(0).toUpperCase();

    const resto = tarea.tarea.slice(1);

    const nombreTarea = primeraLetra + resto;

    const handleClick = () => {
        eliminarTarea(tarea._id)
    }
    


    return (
        <ul className="list-group mt-2">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" /> {nombreTarea}
                </label>
                <button onClick={handleClick} type="button" className="btn btn-danger">Eliminar</button>
            </li>

            {/* Repite esta estructura para cada tarea */}
        </ul>
    )
}

export default Tarea