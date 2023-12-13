import Tarea from "./Tarea";
import useTareas from '../hooks/useTareas';
import useAuth from "../hooks/useAuth";

const ListaTareas = () => {

    const { tareas } = useTareas();


    // if (tareas.length === 0) {
    //     return <h5 className="text-center">Cargando...</h5>
    // }



    return (
        <>
            <h2 className="h4 text-center">Tareas Pendientes</h2>
            {
                tareas.map(tarea => <Tarea key={tarea._id} tarea={tarea} />)
            }
        </>
    )
}

export default ListaTareas;