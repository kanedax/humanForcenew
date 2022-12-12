
import { FastField } from 'formik';
import React from 'react';

const Checkbox = ({ name, label, type }) => {
    return (
        <div className="col s9">
            <label>
                <FastField type={type} name={name} className="filled-in" />
                <span>{label}</span>
            </label>
        </div>
    );
}

export default Checkbox;