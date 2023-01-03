import { Form, Formik, useFormikContext } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import FormikControl from '../../Components/Formik/FormikControl';
import { sidenav } from '../../Utils/sidenav';
// import { initialValues, militaryClass, militaryDegree, onSubmit, validationSchema } from './Core';
import * as Yup from 'yup';
import { Alert } from '../../Components/Alert/Alert';
import { EditArmyUser, GetSingleArmyUser, IsArmyService } from '../../Services/IsArmy';


const IsArmy = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { state } = location;
    useEffect(() => {
        sidenav();
    }, []);
    const initialValues = {
        userId: state?.person?.id,
        militaryClass: 0,
        militaryDegree: 0,
        lastOccupation: "",
        isRetired: true
    }
    const onSubmit = async (values) => {
        if (reInitialValues.id) {
            try {
                const res = await EditArmyUser(reInitialValues.id)
                if (res.status == 200) {
                    Alert("انجام شد", res.data.metaData.message, "success")
                } else {
                    Alert("متاسفم", "ایراد رخ داده است", "warning")
                }
            } catch (error) {
                Alert("متاسفم", error.response.data.metaData.message, "error")
            }
        } else {
            values = {
                ...values,
                militaryClass: parseInt(values.militaryClass),
                militaryDegree: parseInt(values.militaryDegree),
            }

            try {
                const res = await IsArmyService(values)
                if (res.status === 200) {
                    Alert("انجام شد", res.data.metaData.message, "success")
                } else {
                    Alert("متاسفم", "ایراد رخ داده است", "warning")
                }
            } catch (error) {
                Alert("متاسفم", error.response.data.metaData.message, "error")
            }
        }
    }
    const validationSchema = Yup.object({
        militaryClass: Yup.string()
            .required("لطفا این قسمت را پر کنید"),
        militaryDegree: Yup.string()
            .required("لطفا این قسمت را پر کنید"),
        isRetired: Yup.boolean(),
        lastOccupation: Yup.string()
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
    const [reInitialValues, setReInitialValues] = useState();

    const handleGetSingleUserArmy = async () => {
        if (state.person.armyFeatures) {
            try {
                const res = await GetSingleArmyUser(state.person.id)
                const userArmy = res.data.data
                setReInitialValues(userArmy)
            } catch (error) {
                Alert("متاسفم", error.response.data.metaData.message, "error")
            }
        } else {
            setReInitialValues(null)
        }
    }
    useEffect(() => {
        handleGetSingleUserArmy()
    }, [])
    useEffect(() => {
        if (reInitialValues) {
            setReInitialValues({
                userId: state?.person?.id,
                militaryClass: reInitialValues.militaryClass,
                militaryDegree: reInitialValues.militaryDegree,
                lastOccupation: reInitialValues.lastOccupation,
                isRetired: reInitialValues.isRetired,
            })
        }
    }, [])

    return (
        <Formik
            initialValues={reInitialValues || initialValues}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {
                (formik) => {
                    return (
                        <Form className='isarmymainform'>
                            <div className='row'>
                                <div className='isarmytitlecontainer'>
                                    {
                                        reInitialValues ? (
                                            <h4>ویرایش اطلاعات پرسنل نظامی</h4>
                                        ) : (
                                            <h4>ثبت اطلاعات پرسنل نظامی</h4>
                                        )
                                    }
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
