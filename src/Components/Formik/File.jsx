import React from 'react';

const File = () => {
    return (
        <div className="file-field input-field col s4">
            <div className="btn">
                <span>
                    عکس
                </span>
                <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
        </div>
    );
}

export default File;
