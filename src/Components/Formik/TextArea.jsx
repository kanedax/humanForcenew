import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FormikError from './FormikError';

const TextArea = (name) => {
    return (
        <div className="input-field col s4">
            <FastField as="textarea" 
            className="materialize-textarea" 
            name={name}
            ></FastField>
            <label>توضیحات</label>
            <ErrorMessage name={name} component={FormikError} />
          </div>
    );
}

export default TextArea;
