import React from 'react';
import { Navigate } from 'react-router';
import useLogin from '../Hooks/useLogin';

import Header from './Header/Header';
import RouteMap from './RouteMap';

const AdminLayout = () => {
    const [loading, isLogin] = useLogin()
    return (
        <div>
            {
                loading ? (
                    <div  className='waiting-text'>
                        <h4>لطفا صبر کنید...</h4>
                    </div>

                ) : isLogin ? (
                    <>
                        <Header />
                        <RouteMap />
                    </>
                ) : (

                    <Navigate to={'/auth/login'} />

                )
            }
        </div>
    );
}

export default AdminLayout;
