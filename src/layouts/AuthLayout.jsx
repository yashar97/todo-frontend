import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mt-4">To Do List!</h1>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout;