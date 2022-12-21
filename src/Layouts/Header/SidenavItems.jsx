import React from 'react';
import { Link } from 'react-router-dom';

const SidenavItems = () => {
    return (
        <div className='sidenav-container'>
            <li >
                <Link to={'/employmanagement'} >
                <i className='fa-solid fa-users sidenav-icon'></i>                   
                مدیریت پرسنل</Link>
            </li>
            <li >
                <Link href="#">
                <i className='fa-regular fa-user sidenav-icon'></i>     
                مدیریت فرمها</Link>
            </li><li >
                <a href="#">
                <i className='fa-regular fa-user sidenav-icon'></i>     
                مدیریت فرمها</a>
            </li><li >
                <a href="#">
                <i className='fa-regular fa-user sidenav-icon'></i>     
                مدیریت فرمها</a>
            </li><li >
                <a href="#">
                <i className='fa-regular fa-user sidenav-icon'></i>     
                مدیریت فرمها</a>
            </li><li >
                <a href="#">
                <i className='fa-regular fa-user sidenav-icon'></i>     
                مدیریت فرمها</a>
            </li>
        </div>
    );
}

export default SidenavItems;
