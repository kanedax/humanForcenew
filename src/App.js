import React from 'react';
import { useLocation } from 'react-router';
import AdminLayout from './Layouts/AdminLayout';
import Login from './Pages/Login/Login';


const App = () => {
const location = useLocation();
    return (
        <div>
            {
                location.pathname.includes('/auth') ? (
                    
                    <Login/>

                ) : (

                    <AdminLayout/>

                )
            }


        </div>
    );
}

export default App;