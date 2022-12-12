import React from 'react';
import { Link } from 'react-router-dom';

const SidenavItems = () => {
    return (
        <div className='sidenav-container'>
            <li >
                <Link >
                <i className='fa-regular fa-user sidenav-icon'></i>                   
                مدیریت پرسنل</Link>
            </li>
            <li >
                <Link to={'/registerform'} >
                <i className='fa-regular fa-user sidenav-icon'></i>     
                ثبت پرسنل جدید </Link>
            </li>
            <li >
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
            </li><li >
                <a href="#">
                <i className='fa-regular fa-user sidenav-icon'></i>     
                مدیریت فرمها</a>
            </li>
        </div>
    );
}

export default SidenavItems;
