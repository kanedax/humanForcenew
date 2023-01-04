import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import FormikControl from '../../Components/Formik/FormikControl';
import * as Yup from 'yup';
import { Alert } from '../../Components/Alert/Alert';
import { sidenav } from '../../Utils/sidenav';
import { GetUserSpecification, PostUserSpecification, PutUserSpecification } from '../../Services/UserSpecification';


const initialValues = {
    userId: 0,
    fatherName: "",
    motherName: "",
    relegion: 0,
    height: "",
    weight: "",
    isDisablePeople: true,
    specializedDegree: "",
    occupationHistory: "",
    stateOfIdentification: ""
}
const onSubmit = async (values, actions, userId, userSpecificationData) => {
    if (userSpecificationData) {
        console.log(values);
        values = {
            ...values,
            userId: userId,
        }
        try {
            const res = await PutUserSpecification(values)
            if (res.status == 200) {
                Alert("انجام شد", res.data.metaData.message, "success")
            } else {
                Alert("متاسفم", res.data.metaData.message, "warning")
            }
        } catch (error) {
            Alert("متاسفم", error.response.data.metaData.message , "error")
        }
    } else {
        values = {
            ...values,
            userId: userId,
            relegion: parseInt(values.relegion)
        }
        console.log(values);
        try {
            const res = await PostUserSpecification(values)
            if (res.status == 200) {
                Alert("انجام شد", res.data.metaData.message, "success")
            } else {
                Alert("متاسفم", res.data.metaData.message, "warning")
            }
        } catch (error) {
            Alert("متاسفم", error.response.data.metaData.message, "error")
        }
    }
}
const validationSchema = Yup.object({
    fatherName: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    motherName: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    height: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{3,3})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    weight: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{2,3})/, "طول اعداد نباید کمتر از دو یا بیشتر از سه رقم باشد"),
    specializedDegree: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    occupationHistory: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    stateOfIdentification: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
})
const religion = [
    { id: 0, value: "لطفا انتخاب کنید" },
    { id: 1, value: "اسلام" },
    { id: 2, value: "مسیحی" },
]
const UserSpecificationForm = () => {
    const location = useLocation()
    const userId = location?.state?.personalInfo?.person?.id
    const userSpecificationId = location?.state?.personalInfo?.person?.specifications[0]?.id
    const userSpecificationData = location?.state?.personalInfo?.person?.specifications[0]
    const [reInitialValues, setReInitialValues] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        sidenav()
    }, [])
    const handleGetUserSpecification = async () => {
        if (userSpecificationId) {
            try {
                const res = await GetUserSpecification(userSpecificationId)
            } catch (error) {
                Alert("متاسفم", error.response.data.metaData.message, "error")
            }
        } else {
            setReInitialValues(null)
        }
    }
    useEffect(() => {
        handleGetUserSpecification()
    }, [userSpecificationData])
    useEffect(() => {
        if (userSpecificationData) {
            setReInitialValues({
                id: userSpecificationId,
                fatherName: userSpecificationData.fatherName,
                motherName: userSpecificationData.motherName,
                relegion: userSpecificationData.relegion,
                height: userSpecificationData.height,
                weight: userSpecificationData.weight,
                isDisablePeople: userSpecificationData.isDisablePeople,
                specializedDegree: userSpecificationData.specializedDegree,
                occupationHistory: userSpecificationData.occupationHistory,
                stateOfIdentification: userSpecificationData.stateOfIdentification
            })
        }
    }, [])
    return (
        <Formik
            initialValues={reInitialValues || initialValues}
            onSubmit={(values, actions) => onSubmit(values, actions, userId, userSpecificationId, userSpecificationData)}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {
                (formik) => {
                    return (
                        <Form className='specification-container'>
                            <div className='row'>
                                <div className='specification-title-container'>
                                    <h4>ثبت مشخصات تکمیلی</h4>
                                    <i className="fa-solid fa-clipboard-user"></i>
                                </div>
                                <FormikControl
                                    control="input1"
                                    name="fatherName"
                                    type="text"
                                    className="validate"
                                    placeholder="نام پدر"
                                />
                                <FormikControl
                                    control="input1"
                                    name="motherName"
                                    type="text"
                                    className="validate"
                                    placeholder="نام مادر"
                                />
                                <FormikControl
                                    control="input1"
                                    name="height"
                                    type="text"
                                    className="validate"
                                    placeholder="قد به سانتی متر"
                                />
                                <FormikControl
                                    control="input1"
                                    name="weight"
                                    type="text"
                                    className="validate"
                                    placeholder="وزن به کیلوگرم"
                                />
                                <FormikControl
                                    control="input1"
                                    name="specializedDegree"
                                    type="text"
                                    className="validate"
                                    placeholder="وزن"
                                />
                                <FormikControl
                                    control="input1"
                                    name="occupationHistory"
                                    type="text"
                                    className="validate"
                                    placeholder="تاریخچه شغلی"
                                />
                                <FormikControl
                                    control="input1"
                                    name="stateOfIdentification"
                                    type="text"
                                    className="validate"
                                    placeholder="تاریخچه شغلی"
                                />
                                <FormikControl
                                    control='select'
                                    name="relegion"
                                    label="دین"
                                    options={religion}
                                    className="validate"
                                />
                                <FormikControl
                                    control='switch'
                                    name='isDisablePeople'
                                    label3='آیا غیر فعال هست ؟'
                                    type='checkbox'
                                    label1="هست"
                                    label2="نیست"
                                    className="lever"
                                />
                                <div className='form-part col s12 submit-container'>
                                    <button className='btn waves-effect sized-btn' type='submit'>
                                        <i>ثبت</i>
                                    </button>
                                    <button className='btn waves-effect back-btn' type='button'
                                        onClick={() => navigate(-2)}
                                    >
                                        <i>بازگشت</i>
                                    </button>

                                </div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default UserSpecificationForm;
