import React from 'react';

const TextArea = () => {
    return (
        <div className="input-field col s4">
            <textarea className="materialize-textarea" data-length="60"></textarea>
            <label >توضیحات</label>
          </div>
    );
}

export default TextArea;
