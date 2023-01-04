import React from 'react';
import {useLocation, useNavigate } from 'react-router';

const UserOptionView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='option-view'>
            <div>
                <button onClick={()=>navigate(-1)}>
                    بازگشت
                </button>
            </div>
        </div>
    );
}

export default UserOptionView;
