import { Form, Formik, useFormikContext } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import FormikControl from '../../Components/Formik/FormikControl';
import { sidenav } from '../../Utils/sidenav';
// import { initialValues, militaryClass, militaryDegree, onSubmit, validationSchema } from './Core';
import * as Yup from 'yup';
import { Alert } from '../../Components/Alert/Alert';
import { IsArmyService } from '../../Services/IsArmy';


const initialValues = {
    userId : 0,
    militaryClass : 0 ,
    militaryDegree : 0 ,
    lastOccupation : "" ,
    isRetired : true
}
const onSubmit = async (values, location) => {
    values = {
        ...values , 
        militaryClass : parseInt(values.militaryClass),
        militaryDegree : parseInt(values.militaryDegree),
    }
    console.log(location);
    try {
        const res = await IsArmyService(values)
        if(res.status == 200){
            console.log(res);
            Alert("انجام شد", res.data.metaData.message, "success")
        }else{
            Alert("متاسفم", "" , "warning")
        }
    } catch (error) {
        Alert("متاسفم", error.response.data.metaData.message, "error")
    }
}
const validationSchema = Yup.object({
    militaryClass : Yup.string()
    .required("لطفا این قسمت را پر کنید"),
    militaryDegree : Yup.string()
    .required("لطفا این قسمت را پر کنید"),
    isRetired: Yup.boolean(),
    lastOccupation : Yup.string()
    .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
})
const militaryClass = [
    { id: 0, value: "لطفا انتخاب کنید" },
    { id: 1, value: "راهور" },
    { id: 2, value: "نیروی انتظامی" }
]
const militaryDegree = [
    { id: 0, value: "لطفا انتخاب کنید" },
    { id: 1, value: "سرهنگ" },
    { id: 2, value: "ستوان" }
]

const IsArmy = () => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        console.log(location);
        sidenav();
    }, []);
    
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={(values, location) => onSubmit(values, location)}
        validationSchema={validationSchema}
        >
            {
                (formik) => {
                    console.log(formik.values);
                    return (
                        <Form className='isarmymainform'>
                            <div className='row'>
                                <div className='isarmytitlecontainer'>
                                    <h4>ثبت و ویرایش اطلاعات پرسنل نظامی</h4>
                                    <i className="fa-solid fa-person-military-pointing"></i>
                                </div>
                                <FormikControl
                                    control='select'
                                    name="militaryClass"
                                    label="یگان خدمتی"
                                    options={militaryClass}
                                    className="validate"
                                />
                                <FormikControl
                                    control='select'
                                    name="militaryDegree"
                                    label="درجه نظامی"
                                    options={militaryDegree}
                                    className="validate"
                                />
                                <FormikControl
                                    control="input1"
                                    name="lastOccupation"
                                    type="text"
                                    className="validate"
                                    placeholder="آخرین عنوان شغلی"
                                />
                                <FormikControl
                                    control='switch'
                                    name='isRetired'
                                    label3='آیا باز نشسته هست ؟'
                                    type='checkbox'
                                    label1="هست"
                                    label2="نیست"
                                    className="lever"
                                />
                                <div className='form-part col s12 submit-container'>
                                    <button className='btn waves-effect sized-btn' type='submit'>
                                        <i>ثبت</i>
                                    </button>
                                    <button className='btn waves-effect back-btn' type='button'>
                                        <i>ویرایش</i>
                                    </button>
                                    <button className='btn waves-effect back-btn' type='button'
                                        onClick={() => navigate(-1)}
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

export default IsArmy;
