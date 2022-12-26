import { Alert } from "../../Components/Alert/Alert";
import { ChangePassword } from "../../Services/ChangePassword";
import * as Yup from 'yup';


export const initialValues = {
    currentPassword:"",
    password:"",
    confirmPassword:""
}
export const onSubmit = async (values)=>{
    try {
        const res = await ChangePassword(values)
        if(res.status == 200){
            Alert("انجام شد", res.data.metaData.message, "success")
        }
    } catch (error) {
        console.log(error);
            Alert("متاسفم", "مشکل از سمت سرور", "error")
    }
}
export const validationSchema = Yup.object({
    currentPassword: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^(?=.*[0-9])(?=.*[@#*])(?=.*[a-z])(?=.{6,10})/, "طول اعداد نباید کمتراز شش یا بیشتر از ده رقم باشد"),
    password : Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^(?=.*[0-9])(?=.*[@#*])(?=.*[a-z])(?=.{6,10})/, "طول اعداد نباید کمتراز شش یا بیشتر از ده رقم باشد"),
    confirmPassword :Yup.string()
    .oneOf([Yup.ref('password'), ''], 'عدم تطابق')
    .required('لطفا این قسمت را پر کنید'),
})