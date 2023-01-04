import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Alert } from '../../Components/Alert/Alert';
import FormikControl from '../../Components/Formik/FormikControl';
import { GetUserAddress } from '../../Services/UserAddress';
import { initialValues, onSubmit, validationSchema } from './Core';


const UserAddressForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const userAddressId = location?.state?.personalInfo?.person?.addresses[0]?.id
    const userAddressData = location?.state?.personalInfo?.person?.addresses[0]
    const personId = location.state.personalInfo.person.id
    const [reInitialValues, setReInitialValues] = useState(null)
    const handleGetUserAddress = async () => {
        if (userAddressId) {
            try {
                const res = await GetUserAddress(userAddressId)
            } catch (error) {
                Alert("متاسفم", error.response.data.metaData.message, "error")
            }
        } else {
            setReInitialValues(null)
        }
    }

    useEffect(() => {
        handleGetUserAddress()
    }, [userAddressData])

    useEffect(() => {
        if (userAddressData) {
            setReInitialValues({
                id: userAddressId,
                userId: location.state.personalInfo.person.id,
                state: userAddressData.state,
                city: userAddressData.city,
                street: userAddressData.street,
                postalCode: userAddressData.postalCode,
                postalAddress: userAddressData.postalAddress,
                phoneNumber: userAddressData.phoneNumber,
            })
        }
    }, [])
    return (
        <Formik
            initialValues={reInitialValues || initialValues}
            onSubmit={(values, actions) => onSubmit(values, actions, location, userAddressData, personId)}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {
                (formik) => {
                    return (
                        <Form className='address-form-container'>
                            <div className='row'>
                                <div className='address-title-container'>
                                    {
                                       userAddressId ? (
                                        <h4>ویرایش آدرس</h4>
                                       ) : (
                                        <h4>ثبت آدرس</h4>
                                       ) 
                                    }
                                    <i className="fa-solid fa-map-location-dot"></i>
                                </div>
                                <FormikControl
                                    control="input1"
                                    name="state"
                                    type="text"
                                    className="validate"
                                    placeholder="استان محل سکونت"
                                />
                                <FormikControl
                                    control="input1"
                                    name="city"
                                    type="text"
                                    className="validate"
                                    placeholder="شهر محل سکونت"
                                />
                                <FormikControl
                                    control="input1"
                                    name="street"
                                    type="text"
                                    className="validate"
                                    placeholder="خیابان"
                                />
                                <FormikControl
                                    control="input1"
                                    name="postalAddress"
                                    type="text"
                                    className="validate"
                                    placeholder="آدرس"
                                />
                                <FormikControl
                                    control="input1"
                                    name="postalCode"
                                    type="text"
                                    className="validate"
                                    placeholder="کد پستی"
                                />
                                <FormikControl
                                    control="input1"
                                    name="phoneNumber"
                                    type="text"
                                    className="validate"
                                    placeholder=" تلفن ثابت به همراه کد محل سکونت"
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

export default UserAddressForm;
