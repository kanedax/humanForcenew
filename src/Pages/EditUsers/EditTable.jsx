import { Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Alert } from '../../Components/Alert/Alert';
import FormikControl from '../../Components/Formik/FormikControl';
import { EditPersonelContext } from '../../Context/EditPersonelContext';
import { getSingleUser } from '../../Services/getUsers';
import { sidenav } from '../../Utils/sidenav';
import { educations, gender, initialValues, military, onSubmit, validationSchema } from './Core';

const EditTable = () => {
    const { editId, setEditId } = useContext(EditPersonelContext);
    const [editPersonel, setEditPersonel] = useState(null);
    const [reInitialValues, setReinitialValues] = useState(null);
    const navigate = useNavigate();
    
    const handleGetSingleUser = async () => {
        try {
            const res = await getSingleUser(editId)
            if (res.status == 200) {
                const oldPersonel = res.data.data
                console.log(oldPersonel);
                setEditPersonel(oldPersonel);
            }
        } catch (error) {
            Alert("متاسفم", "کارمند مورد نظر یافت نشد", "warning")
        }
    }
    useEffect(() => {
        if (editId) handleGetSingleUser();
        else setEditPersonel(null);
    }, [editId]);
    useEffect(()=>{
        if(editPersonel){
            setReinitialValues({
                Avatar: editPersonel.avatarName,
                Name: editPersonel.name,
                Family: editPersonel.family,
                PersonalCode: editPersonel.personalCode,
                NationalId: editPersonel.nationalId,
                IdCode: editPersonel.idCode,
                MobileNumber: editPersonel.mobileNumber,
                DateOfBirth: editPersonel.dateOfBirth,
                Degree: editPersonel.degree,
                Major: editPersonel.major,
                Email: editPersonel.email,
                Gender: editPersonel.gender,
                MilitaryStatus: editPersonel.militarystatus,
                Description: editPersonel.description,
                IsArmy: editPersonel.isArmy,
            })
        }
    },[editPersonel])
    useEffect(() => {
        sidenav()
    }, []);

    return (
        <Formik
        initialValues={reInitialValues || initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions, editId)}
        validationSchema={validationSchema}
        enableReinitialize
        >
            {
                (formik) => {
                    return (
                        <Form className='main-section'>
                            <div className="form-container">
                                <div className="row">
                                    <div className='title-container'>
                                        <h4>ویرایش پرسنل</h4>
                                        <i className='fas fa-user'></i>
                                    </div>
                                    <FormikControl
                                        control="input1"
                                        name="Name"
                                        type="text"
                                        className="validate"
                                        placeholder="نام"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="Family"
                                        type="text"
                                        className="validate"
                                        placeholder="نام خانوادگی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="PersonalCode"
                                        type="text"
                                        className="validate"
                                        placeholder="شماره پرسنلی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="NationalId"
                                        type="text"
                                        className="validate"
                                        placeholder="کد ملی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="IdCode"
                                        type="text"
                                        className="validate"
                                        placeholder="شماره شناسنامه"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="MobileNumber"
                                        type="text"
                                        className="validate"
                                        placeholder="شماره موبایل"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="DateOfBirth"
                                        type="text"
                                        className="validate"
                                        placeholder="تاریخ تولد"
                                    />
                                    <FormikControl
                                        control="select"
                                        name="Degree"
                                        label="مدرک تحصیلی"
                                        options={educations}
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="Major"
                                        type="text"
                                        className="validate"
                                        placeholder="رشته تحصیلی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="Email"
                                        type="text"
                                        className="validate"
                                        placeholder="ایمیل"
                                    />
                                    <FormikControl
                                        control="select"
                                        name="Gender"
                                        label="جنسیت"
                                        options={gender}
                                    />
                                    <FormikControl
                                        control="select"
                                        name="MilitaryStatus"
                                        label="وضعیت نظام وظیفه"
                                        options={military}
                                    />
                                    <FormikControl
                                        control="file"
                                        title="عکس پرسنلی"
                                        name="Avatar"
                                    />
                                    <FormikControl
                                        control="textarea"
                                        name="Description"
                                    />
                                    <FormikControl
                                        control="switch"
                                        type="checkbox"
                                        label1="هست"
                                        label2="نیست"
                                        className="lever"
                                        name="IsArmy"
                                    />
                                    <div className='form-part col s12 submit-container'>
                                        <button className='btn waves-effect' type='submit'>
                                            <i>ثبت</i>
                                        </button>
                                        <button className='btn waves-effect back-btn' type='button'
                                            onClick={() => navigate(-1)}
                                        >
                                            <i>بازگشت</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default EditTable;
