import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormikControl from '../../Components/Formik/FormikControl';
import { Alert } from '../../Components/Alert/Alert';


const initialValues = {
    personalCode: "",
    password: "",
}

const onSubmit = async (values, submitMethods, navigate) => {
   await axios.post('http://45.138.135.108:8080/api/Auth/login' , values).then(res=>{
        if(res.status == 200){
            localStorage.setItem('loginToken', JSON.stringify(res.data));
            navigate('/');
            Alert("خوش آمدید", "شما با موفقیت وارد شدید", "success")
            submitMethods.setSubmitting(false)
        }else{
            Alert("متاسفم!", "مشخصات وارد شده صحیح نمیباشد.", "warning")
            submitMethods.setSubmitting(false)
        }
   }).catch(error=>{
    Alert("متاسفم", "ایرادی از سمت سرور رخ داده است", "success")
   })
}

const validationSchema = Yup.object({
    personalCode: Yup.string()
        .required("لطفا این قسمت را پر کنید"),

    password: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(
            /^(?=.*[0-9])(?=.{8,})/,
            "حداقل از هشت عدد استفاده شود"
        )
})

const Login = () => {
    const navigate = useNavigate()
    return (
        <Formik

            initialValues={initialValues}
            onSubmit={(values, submitMethods)=>onSubmit(values,submitMethods, navigate)}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <div className='login-container'>
                        <div className="row ">
                            <Form className="col s3 form-handler">
                                <div className="logo-container"></div>
                                <FormikControl
                                    control="input"
                                    id="last_name"
                                    type="text"
                                    name="personalCode"
                                    InputClassName="validate"
                                    htmlFor="last_name"
                                    label="نام کاربری"
                                    icon="fas fa-user prefix"
                                    className=" input-field col s12"
                                />
                                <FormikControl
                                    control="input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    InputClassName="validate"
                                    htmlFor="password"
                                    label="کلمه عبور"
                                    icon="fas fa-lock prefix"
                                    className=" input-field col s12"
                                />
                                <div className="row flex-display">
                                    <div className='col s3'>
                                        <button className="btn waves-effect waves-light" type='submit'
                                            disabled={formik.isSubmitting} >
                                            {
                                                formik.isSubmitting ? <i className="fa fa-spinner fa-spin"></i> : "ورود"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </Form>
                            <div className='col s8 image-container'></div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
}

export default Login;
