import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import UserAddressForm from './UserAddressForm';

const UserAddressIndex = () => {
    const location = useLocation()
    return (
        <>
            <section className='main-section'>
                <UserAddressForm/>
            </section>
        </>
    );
}

export default UserAddressIndex;
