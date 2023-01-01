// import { IsArmyService } from '../../Services/IsArmy';
// import { Alert } from '../../Components/Alert/Alert';
// import * as Yup from 'yup';

// export const initialValues = {
//     userId : "",
//     militaryClass : 0 ,
//     militaryDegree : 0 ,
//     lastOccupation : "" ,
//     isRetired : true
// }
// export const onSubmit = async (values) => {
//     console.log(values);
//     try {
//         const res = await IsArmyService(values)
//         if(res.status == 200){
//             Alert("انجام شد", "", "success")
//         }else{
//             Alert("متاسفم", "" , "warning")
//         }
//     } catch (error) {
//         Alert("متاسفم", "", "error")
//     }
// }
// export const validationSchema = Yup.object({
//     militaryClass : Yup.string()
//     .required("لطفا این قسمت را پر کنید"),
//     militaryDegree : Yup.string()
//     .required("لطفا این قسمت را پر کنید"),
//     isRetired: Yup.boolean(),
//     lastOccupation : Yup.string()
//     .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
// })
// export const militaryClass = [
//     { id: 0, value: "لطفا انتخاب کنید" },
//     { id: 1, value: "راهور" },
//     { id: 2, value: "نیروی انتظامی" }
// ]
// export const militaryDegree = [
//     { id: 0, value: "لطفا انتخاب کنید" },
//     { id: 1, value: "سرهنگ" },
//     { id: 2, value: "ستوان" }
// ]