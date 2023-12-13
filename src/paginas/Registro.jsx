import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

const Registro = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre.trim(), email.trim(), password.trim()].includes('')) {
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {

            const { data } = await axios.post('http://localhost:8080/api/usuarios/registro', { nombre, email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            toast.success(data.msg);
            setNombre('');
            setEmail('');
            setPassword('');

        } catch (error) {
            toast.error(error.response.data.msg);
        }

    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-success text-white text-center">
                            <h3 className="h4">Registro</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="name" name="name" value={nombre} onChange={e => setNombre(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success">Registrarse</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <p className="mb-0">¿Ya tienes una cuenta? <Link to='/'>Iniciar Sesión</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro