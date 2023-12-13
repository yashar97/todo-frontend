import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AuthLayout from './layouts/AuthLayout';
import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import Registro from './paginas/Registro';

import { AuthProvider } from './context/AuthContext';
import { TareaProvider } from './context/TareaContext';

function App() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <TareaProvider>
                    <Routes>

                        <Route path='/' element={<AuthLayout />}>
                            <Route index element={<Login />} />
                            <Route path='registro' element={<Registro />} />
                        </Route>

                        <Route path='/inicio' element={<Inicio />} />

                    </Routes>
                    <ToastContainer />
                </TareaProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
