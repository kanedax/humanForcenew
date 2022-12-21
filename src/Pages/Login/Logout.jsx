import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../../Components/Alert/Alert';
import Waiting from '../../Components/Waiting';
import { logOutService } from '../../Services/auth';

const Logout = () => {
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        try {
            const res = await logOutService()
            if (res.status == 200) {
                Alert("خروج", "عملیات با موفقیت انجام شد", "success")
                localStorage.removeItem('loginToken')
                setLoading(false);
            } else {
                Alert("متاسفم", "خروج موفقیت آمیز نبود", "warning")
            }
            
        } catch (error) {
            Alert("خروج", "عملیات خروج با موفقیت انجام شد", "warning")
            setLoading(false);
        }
    }

    useEffect(() => {
        handleLogout()
    }, []);

    return (
        <>
            {
                loading ? (
                    <Waiting/>
                ) : (
                    <Navigate to='/auth/login' />
                )
            }
        </>
    );
}

export default Logout;
