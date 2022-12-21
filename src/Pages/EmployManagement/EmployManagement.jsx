import React from 'react';
import EmployManagementTable from './EmployManagementTable';

const EmployManagement = () => {
    return (
            <>
                <section className='main-section' >
                    <div className='title-container'>
                        <h4>مدیریت پرسنل</h4>
                    </div>
                    <div>
                        <EmployManagementTable />
                    </div>
                </section>
            </>
    );
}

export default EmployManagement;
