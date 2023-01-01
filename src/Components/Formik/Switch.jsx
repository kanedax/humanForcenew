import { FastField } from 'formik';
import React from 'react';

const Switch = ({label1, label2, label3, type, className, name}) => {
    return (
        <div>
            <div className="switch col s4 switch-pro">
                <label className='switch-label'>{label3}</label>
                <br></br>
                <br></br>
                <label>
                        {label1}
                    <FastField name={name}  type={type}></FastField>
                    <span className={className}></span>
                        {label2}
                </label>
            </div>
        </div>
    );
}

export default Switch;
