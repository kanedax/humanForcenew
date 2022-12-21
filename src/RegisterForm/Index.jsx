import React from 'react';
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