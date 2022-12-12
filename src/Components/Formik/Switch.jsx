import { FastField } from 'formik';
import React from 'react';

const Switch = ({label1, label2, type, className, name}) => {
    return (
        <div>
            <div className="switch col s4 switch-pro">
                <label className='switch-label'>پرسنل نیروهای مسلح</label>
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
