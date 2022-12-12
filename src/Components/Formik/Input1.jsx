import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FormikError from './FormikError';

const Input1 = ({name, type, className, title}) => {
    return (
        <div className="form-part col s4 input-field">
            <FastField name={name} type={type} className={className}></FastField>
            <label>{title}</label>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
}

export default Input1;
