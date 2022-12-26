import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import FormikControl from '../../Components/Formik/FormikControl';
import { initialValues, onSubmit, validationSchema } from './Core';



const PasswordMaganement = () => {
    const navigate = useNavigate()
    return (
        <Formik
            initialValues={ initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                (formik) => {
                    return (
                        <Form className='password-container'>
                            <div>
                                <div className='password-title'>
                                    <h4>تغییر کلمه عبور</h4>
                                    <i className='fa fa-lock'></i>
                                </div>
                            </div>
                            <FormikControl
                                control="input1"
                                name="currentPassword"
                                type="text"
                                className="validate"
                                placeholder="کلمه عبور قبلی"
                            />
                            <FormikControl
                                control="input1"
                                name="password"
                                type="text"
                                className="validate"
                                placeholder="کلمه عبور جدید"
                            />
                            <FormikControl
                                control="input1"
                                name="confirmPassword"
                                type="text"
                                className="validate"
                                placeholder="تکرار کلمه عبور"
                            />
                            <div className='form-part col s12 button-container'>
                                <button className='btn waves-effect' type='submit'>
                                    <i>ثبت</i>
                                </button>
                                <button className='btn waves-effect back-button' type='button'
                                    onClick={() => navigate(-1)}
                                >
                                    <i>بازگشت</i>
                                </button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default PasswordMaganement;
