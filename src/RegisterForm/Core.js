import { Alert } from "../Components/Alert/Alert";
import { editSingleUser, registerService } from "../Services/registerService";
import * as Yup from 'yup';

export const initialValues = {
    name: "",
    family: "",
    personalCode: "",
    nationalId: "",
    idCode: "",
    mobileNumber: "",
    dateOfBirth: "",
    degree: 0,
    major: "",
    password: "",
    email: "",
    gender: 0,
    militaryStatus: 0,
    isArmy: false,
    description: "",

}
 export const onSubmit = async (values, actions) => {
    try {
            const res = await registerService(values);
            if (res.status == 200) {
                Alert('انجام شد', 'پرسنل جدید با موفقیت ثبت گردید', 'success')
                actions.resetForm();
            }
    } catch (error) {
        Alert('متاسفم', 'خطا از سمت سرور', 'error')

    }

}
 export const validationSchema = Yup.object({
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
 export const gender = [
    { id: 0, value: "لطفا انتخاب کنید" },
    { id: 1, value: "مرد" },
    { id: 2, value: "زن" },
]
 export const educations = [
    { id: 0, value: "لطفا انتخاب کنید" },
    { id: 1, value: "دیپلم" },
    { id: 2, value: "فوق دیپلم" },
    { id: 3, value: "لیسانس" },
    { id: 4, value: "فوق لیسانس" },
    { id: 5, value: "دکترا" },
    { id: 6, value: "دکترای تخصصی" },
]
export const military = [
    { id: 0, value: "لطفا انتخاب کنید" },
    { id: 1, value: "معافیت پزشکی" },
    { id: 2, value: "در حال تحصیل" },
    { id: 3, value: "خدمت زیر پرچم" },
    { id: 4, value: "معافیت دائم" },
]