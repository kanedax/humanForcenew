import React from 'react';
import { Route, Routes } from 'react-router';
import PasswordIndex from '../Pages/ChangePassword/PasswordIndex';
import Dashoard from '../Pages/Dashboard/Dashoard';
import EditTable from '../Pages/EditUsers/EditTable';
import EmployManagement from '../Pages/EmployManagement/EmployManagement';
import IsArmyIndex from '../Pages/IsArmy/IsArmyIndex';
import Logout from '../Pages/Login/Logout';
import UserAddressIndex from '../Pages/UserAddress/UserAddressIndex';
import UserOptionIndex from '../Pages/UserOptions/UserOptionIndex';
import UserSpecificationIndex from '../Pages/UserSpecification/UserSpecificationIndex';
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
                <Route path='/editemploy' element={<EditTable/>}/>
                <Route path='/changepassword' element={<PasswordIndex/>}/>
                <Route path='/isarmy' element={<IsArmyIndex/>}/>
                <Route path='/useraddress' element={<UserAddressIndex/>}/>
                <Route path='/useroptions' element={<UserOptionIndex/>}/>
                <Route path='/userspecification' element={<UserSpecificationIndex/>}/>
            </Routes>
        </div>
    );
}

export default RouteMap;
