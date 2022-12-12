import React from 'react';
import { useEffect } from 'react';
import { sidenav } from '../Utils/sidenav';
import RegisterForm from './RegisterForm'


const MultiPageForm = () => {
    
    return (
        <>
            <section className='main-section'>
                <div className="row form-position">
                    <RegisterForm />
                </div>
            </section>
        </>
    );
}

export default MultiPageForm;