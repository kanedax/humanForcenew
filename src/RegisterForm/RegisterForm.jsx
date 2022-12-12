import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from '../Components/Formik/FormikControl';
import { sidenav } from '../Utils/sidenav';
import axios from 'axios';
import { Alert } from '../Components/Alert/Alert';


const initialValues = {
    name: "",
    family: "",
    personalCode: "",
    nationalId: "",
    idCode: "",
    mobileNumber:{
        value:""
    },
    dateOfBirth: "",
    degree: "",
    major: "",
    password: "",
    email: "",
    gender: "",
    militaryStatus: "",
    isArmy: false,
    description:"",
    email:"",

}

const onSubmit = async (values, actions) => {

    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    const token = loginToken.data.token;
    await axios.post('http://45.138.135.108:8080/api/Users' , values, 
        {headers:{
            Authorization : `Bearer ${token}`,
            'Content-Type': 'application/json',
            "accept": "text/plain",
        }}
    ).then(res=>{
        if (res.status == 201) {
            Alert('انجام شد', 'پرسنل جدید با موفقیت ثبت گردید', 'success')
            actions.resetForm();
        }else{
            Alert('متاسفم', 'عملیات با خطا مواجه گردید', 'warning')
        }
    }).catch(err=>{
        console.log(err.message);
        Alert('متاسفم', 'خطا از سمت سرور', 'error')

    })
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    family: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    personalCode: Yup.string()
        .required("لطفااین قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{9,9})/, "طول اعداد نباید کمتر یا بیشتر از نه رقم باشد"),
    nationalId: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{10,10})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    idCode: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{1,10})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    mobileNumber: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{11,11})/, "طول اعداد نباید کمتر یا بیشتر از یازده رقم باشد"),
    dateOfBirth: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    degree: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    major: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    password: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.*[@#*])(?=.*[a-z])(?=.{6,10})/, "طول اعداد نباید کمتراز شش یا بیشتر از ده رقم باشد"),
    gender: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    militaryStatus: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    isArmy: Yup.boolean(),
})


const RegisterForm = () => {
    useEffect(() => {
        sidenav()
    }, []);
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => onSubmit(values, actions)}
            validationSchema={validationSchema}
        >
            {
                (formik) => {
                    console.log(formik.values);
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
                                        title="نام"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="family"
                                        type="text"
                                        className="validate"
                                        title="نام خانوادگی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="personalCode"
                                        type="text"
                                        className="validate"
                                        title="شماره پرسنلی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="nationalId"
                                        type="text"
                                        className="validate"
                                        title="کد ملی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="idCode"
                                        type="text"
                                        className="validate"
                                        title="شماره شناسنامه"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="mobileNumber.value"
                                        type="text"
                                        className="validate"
                                        title="شماره موبایل"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="dateOfBirth"
                                        type="text"
                                        className="validate"
                                        title="تاریخ تولد"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="major"
                                        type="text"
                                        className="validate"
                                        title="رشته تحصیلی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="password"
                                        type="password"
                                        className="validate"
                                        title="رمز عبور"
                                    />
                                    <FormikControl
                                        control="select2"
                                        name="degree"
                                        label="مدرک تحصیلی"
                                        option1="لطفا انتخاب کنید..."
                                        option2="دیپلم"
                                        option3="فوق دیپلم"
                                        option4="لیسانس"
                                        option5="فوق لیسانس"
                                        option6="دکترا"
                                        option7="دکترای تخصصی"
                                    />
                                    <FormikControl
                                        control="select"
                                        name="gender"
                                        label="جنسیت"
                                        option1="لطفا انتخاب کنید..."
                                        option2="مرد"
                                        option3="زن"
                                    />
                                    <FormikControl
                                        control="select3"
                                        name="militaryStatus"
                                        label="وضعیت نظام وظیفه"
                                        option1="لطفا انتخاب کنید..."
                                        option2="در حال تحصیل"
                                        option3="معافیت پزشکی"
                                        option4="خدمت زیر پرچم"
                                        option5="معافیت"
                                    />
                                    <FormikControl
                                        control="switch"
                                        type="checkbox"
                                        label1="هست"
                                        label2="نیست"
                                        className="lever"
                                        name="isArmy"
                                    />
                                    <div className='form-part col s4 submit-container'>
                                        <button className='btn waves-effect' type='submit'>
                                            <i className='fa-solid fa-check-double'> ثبت</i>
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
