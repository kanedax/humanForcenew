import * as Yup from 'yup';
import { Alert } from '../../Components/Alert/Alert';
import { editSingleUser } from '../../Services/registerService';
import { convertToMiladi } from '../../Utils/JalaliConverter';

export const initialValues = {
    UserId: "",
    Avatar: "",
    Name: "",
    Family: "",
    Description: "",
    PersonalCode: "",
    NationalId: "",
    IdCode: "",
    MobileNumber: "",
    DateOfBirth: "",
    Degree: 0,
    Major: "",
    Email: "",
    Gender: 0,
    MilitaryStatus: 0,
    IsArmy: false,
}
export const onSubmit = async (values) => {
    console.log(values);
    values = {
        ...values,
        DateOfBirth: convertToMiladi(values.DateOfBirth),
        Description: "تست",
    }
    try {
        const res = await editSingleUser(values)
        console.log(res);
        const log = res.data.metaData
        if (res.status == 200) {
            Alert('انجام شد',log.message, 'success')
        }
    } catch (error) {
        console.log(error.response);
        Alert('متاسفم', 'خطا از سمت سرور', 'error')
    }
}
export const validationSchema = Yup.object({
    Avatar: Yup.mixed()
        .required('لطفا این قسمت را پر کنید'),
    Name: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    Family: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    PersonalCode: Yup.string()
        .required("لطفااین قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{9,9})/, "طول اعداد نباید کمتر یا بیشتر از نه رقم باشد"),
    NationalId: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{10,10})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    IdCode: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{1,10})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    MobileNumber: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{11,11})/, "طول اعداد نباید کمتر یا بیشتر از یازده رقم باشد"),
    DateOfBirth: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    Degree: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    Major: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    Email: Yup.string()
        .required('لطفا این قسمت را پر کنید')
        .email('لطفا قالب ایمیل را رعایت کنید'),
    Gender: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    MilitaryStatus: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    IsArmy: Yup.boolean(),

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