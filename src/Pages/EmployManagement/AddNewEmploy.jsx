import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EditPersonelContext } from '../../Context/EditPersonelContext';


const AddNewEmploy = () => {
    const {editId , setEditId} = useContext(EditPersonelContext)
    return (
        <div className='table-add-new-person'>
            <Link to={'/registerform'}
                onClick={() => setEditId(null)}
            >
                <i className='fas fa-plus'
                    title="افزودن پرسنل جدید"
                ></i>
            </Link>
        </div>
    );
}

export default AddNewEmploy;
