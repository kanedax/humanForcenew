import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin';
import Login from '../../Pages/Login/Login';


const AuthLayout = () => {

    const [loading, isLogin] = useLogin()

    return (
        <div>
            {
                loading ?  (
                    <h4>لطفا صبر کنید...</h4>
                ) : !isLogin ? (
                    <Routes>
                        <Route path='/auth/login' element={<Login />} />
                    </Routes>
            ):  (
                    <Navigate to={"/"} />
                )
            }
        </div>
    );
}

export default AuthLayout;