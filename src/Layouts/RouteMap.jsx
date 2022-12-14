import React from 'react';
import { Route, Routes } from 'react-router';
import Dashoard from '../Pages/Dashboard/Dashoard';
import EmployManagement from '../Pages/EmployManagement/EmployManagement';
import Logout from '../Pages/Login/Logout';
import RegisterForm from '../RegisterForm/RegisterForm'


const RouteMap = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashoard/>} />
                <Route path='*' element={<Dashoard/>} />
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/registerform' element={<RegisterForm/>}/>
                <Route path='/employmanagement' element={<EmployManagement/>}/>
            </Routes>
        </div>
    );
}

export default RouteMap;
