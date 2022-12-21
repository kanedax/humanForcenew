import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FormikError from './FormikError';

const Input1 = ({name, type, className, placeholder, label}) => {
    return (
        <div className="form-part col s4 input-field">
            <FastField  placeholder={placeholder}  type={type} className={className} name={name}></FastField>
            <label className='input-span'>{label}</label>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
}

export default Input1;
