import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../../Components/Alert/Alert';

const Logout = () => {
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        const loginToken = JSON.parse(localStorage.getItem("loginToken"));
        const token = loginToken.data.token;
        console.log(loginToken.data.token);

        await axios.get("http://45.138.135.108:8080/api/Auth/logout", {

            headers: {
                "accept": "text/plain",
                "content-type": "application/json; charset=utf-8",
                Authorization: `Bearer ${token}`,
            }
            
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                Alert("خروج", "شما با موفقیت خارج شدید", "success")
                localStorage.removeItem('loginToken')
                setLoading(false);
            } else {
                Alert("متاسفم", "خروج موفقیت آمیز نبود", "warning")
            }
        }).catch(err => {
            console.log(err.message);
            Alert("متاسفم", "ایرادی از سمت سرور رخ داده است", "error")

            setLoading(false);
        })
    }

    useEffect(() => {
        handleLogout()
    }, []);

    return (
        <>
            {
                loading ? (
                    <div  className='waiting-text'>
                        <h4>لطفا صبر کنید...</h4>
                    </div>
                ) : (
                    <Navigate to='/auth/login' />
                )
            }
        </>
    );
}

export default Logout;
