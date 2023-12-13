import Header from '../components/Header';
import FormularioTarea from '../components/FormularioTarea';
import ListaTareas from '../components/ListaTareas';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Inicio = () => {

    const { auth, cargado } = useAuth();

    if (!cargado) {
        return 'Cargando...'
    }

    let nombreAutenticado;
    if (auth.nombre) {
        const primeraLetra = auth.nombre.charAt(0).toUpperCase();

        const restoDelNombre = auth.nombre.slice(1);

        nombreAutenticado = primeraLetra + restoDelNombre;
    }




    return (
        <>
            {
                auth?.nombre ? (
                    <div>
                        <Header />
                        <main className="container mt-4">
                            <section className="mb-4 text-center">
                                <h2 className="text-primary">Bienvenido, {nombreAutenticado}</h2>
                                <p className='h4'>Empieza a organizar tus tareas.</p>
                            </section>
                            <section className="mb-4">
                                <h2 className="h4 text-center mb-3">Crear Nueva Tarea</h2>
                                <FormularioTarea />
                            </section>
                            <section>
                                <ListaTareas />
                            </section>
                        </main>

                    </div>
                ) : <Navigate to='/' />
            }
        </>


    )
}

export default Inicio;