import React from 'react';

const File = ({name, formik}) => {
    return (
        <div className="file-field input-field col s4">
            <div className="btn">
                <span>
                    عکس
                </span>
                <input type="file"  name={name}
                    onChange={e=>{
                        formik.setFieldValue(name , e.target.files[0])
                    }}
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
        </div>
    );
}

export default File;
