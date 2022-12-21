import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../Components/Formik/FormikControl';
import { sidenav } from '../Utils/sidenav';
import { useNavigate } from 'react-router';
import { educations, gender, initialValues, military, onSubmit, validationSchema } from './Core';



const RegisterForm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        sidenav()
    }, []);
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validationSchema}
        >
            {
                (formik) => {
                    return (
                        <Form className='main-section'>
                            <div className="form-container">
                                <div className="row">
                                    <div className='title-container'>
                                        
                                         <h4>ثبت اولیه پرسنل</h4>
                                        
                                        <i className='fas fa-user'></i>
                                    </div>
                                    <FormikControl
                                        control="input1"
                                        name="name"
                                        type="text"
                                        className="validate"
                                        placeholder="نام"
                                        label="نام"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="family"
                                        type="text"
                                        className="validate"
                                        placeholder="نام خانوادگی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="personalCode"
                                        type="text"
                                        className="validate"
                                        placeholder="شماره پرسنلی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="nationalId"
                                        type="text"
                                        className="validate"
                                        placeholder="کد ملی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="idCode"
                                        type="text"
                                        className="validate"
                                        placeholder="شماره شناسنامه"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="mobileNumber"
                                        type="text"
                                        className="validate"
                                        placeholder="شماره موبایل"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="dateOfBirth"
                                        type="text"
                                        className="validate"
                                        placeholder="تاریخ تولد"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="major"
                                        type="text"
                                        className="validate"
                                        placeholder="رشته تحصیلی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="password"
                                        type="password"
                                        className="validate"
                                        placeholder="رمز عبور"
                                    />
                                    <FormikControl
                                        control="select"
                                        name="degree"
                                        label="مدرک تحصیلی"
                                        options={educations}
                                    />
                                    <FormikControl
                                        control="select"
                                        name="gender"
                                        label="جنسیت"
                                        options={gender}
                                    />
                                    <FormikControl
                                        control="select"
                                        name="militaryStatus"
                                        label="وضعیت نظام وظیفه"
                                        options={military}
                                    />
                                    <FormikControl
                                        control="switch"
                                        type="checkbox"
                                        label1="هست"
                                        label2="نیست"
                                        className="lever"
                                        name="isArmy"
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

export default RegisterForm;
