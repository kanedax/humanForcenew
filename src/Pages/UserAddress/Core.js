import * as Yup from 'yup';
import { Alert } from '../../Components/Alert/Alert';
import { EditUserAddress, PostUserAddress } from '../../Services/UserAddress';

export const initialValues = {
    userId: 0,
    state: "",
    city: "",
    street: "",
    postalCode: "",
    postalAddress: "",
    phoneNumber: ""
}

export const onSubmit = async (values, location, userAddressData, personId) => {
    if (userAddressData) {
        console.log(values);
        try {
            const res = await EditUserAddress(values)
            if (res.status == 200) {
                Alert("انجام شد", res.data.metaData.message, "success")
            } else {
                Alert("متاسفم", res.data.metaData.message, "warning")
            }

        } catch (error) {
            console.log(error);
            Alert("متاسفم",error.response.data.MetaData.Message , "error")
        }
    } else {
        values = {
            ...values,
            userId: location.state.personalInfo.person.id
        }
        try {
            const res = await PostUserAddress(personId, values)
            console.log(res);
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
export const validationSchema = Yup.object({
    state: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    city: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    street: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    postalAddress: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    postalCode: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{10,10})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    phoneNumber: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{11,11})/, "طول اعداد نباید کمتر یا بیشتر از یازده رقم باشد"),
})