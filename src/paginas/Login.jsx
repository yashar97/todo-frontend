import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if ([email.trim(), password.trim()].includes('')) {
            toast.warn('Todos los campos son olbigatorios');
            return;
        }

        try {

           

            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/login`, { email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            localStorage.setItem('token', data.token);
            setAuth(data);
            navigate('/inicio');


        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg);
        }


    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-success text-white text-center">
                            <h3 className="h4">Iniciar Sesión</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email" name="email" value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <p className="mb-0">¿No tienes una cuenta? <Link to='/registro'>Regístrate</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;