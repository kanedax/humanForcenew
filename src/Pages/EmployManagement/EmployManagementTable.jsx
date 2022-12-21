import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Alert } from '../../Components/Alert/Alert';
import PaginatedTable from '../../Components/PaginatedTable';
import { getAllUsers } from '../../Services/getUsers';
import { JalaliConvert } from '../../Utils/JalaliConverter';
import Action from './Actions';
import AddNewEmploy from './AddNewEmploy';

const EmployManagementTable = () => {
    const params = useParams();

    const [data, setData] = useState([]);

    const [forceRender, setForceRender] = useState(0);

    const [loading , setLoading] = useState(false)

    const handleGetUsers = async () => {
        try {
            const res = await getAllUsers();
            if(res.status == 200 ){
                setData(res.data.data)

            }else{
                Alert("مشکل", res.data.metaData.message, "error");
            }
        } catch (error) {
            Alert("مشکل", "ایراد از سمت سرور", "warning");
            
        }
        
    }

    useEffect(() => {
        handleGetUsers()
    }, [params, forceRender]);

    const dataInfo = [
        { field: "id", title: "#" },
        { field: "name", title: "نام" },
        { field: "family", title: "نام خانوادگی" },
        { field: "personalCode", title: "شماره پرسنلی" },
    ]

    const additionalField = [
        {
            title:"تاریخ ثبت",
            elements: (rowData) => JalaliConvert(rowData.creationDate),
        },{
            title: "عملیات",
            elements: (rowData) => <Action rowData={rowData}/>,
        }
    ];

    const searchParams = {
        // title: "جستجو",
        placeholder: "جستجو با شماره پرسنلی ",
        searchField: "personalCode",
    }

    return (
        <>
            <PaginatedTable
                numOfPages={10}
                data={data}
                dataInfo={dataInfo}
                additionalField={additionalField}
                searchParams={searchParams}
                loading={loading}
                >
            </PaginatedTable>
            <AddNewEmploy/>
        </>
    );
}

export default EmployManagementTable;
