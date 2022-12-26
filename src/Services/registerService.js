import httpServicesPut from "./httpServicePut"
import httpServices from "./httpServices"

export const registerService = (values)=>{
    return httpServices('/Users', 'post', values)
}

export const editSingleUser = (data)=>{
    if(data.avatar){
        let formdata = new FormData();
        formdata.append("Avatar", data.Avatar)
        formdata.append("Name", data.Name)
        formdata.append("Family", data.Family)
        formdata.append("PersonalCode", data.PersonalCode)
        formdata.append("NationalId", data.NationalId)
        formdata.append("IdCode", data.IdCode)
        formdata.append("MobileNumber", data.MobileNumber)
        formdata.append("DateOfBirth", data.DateOfBirth)
        formdata.append("Degree", data.Degree)
        formdata.append("Major", data.Major)
        formdata.append("Email", data.Email)
        formdata.append("Gender", data.Gender)
        formdata.append("MilitaryStatus", data.MilitaryStatus)
        formdata.append("Description", data.Description)
        formdata.append("IsArmy", data.IsArmy)
        data=formdata
        console.log(formdata);
    }
    return  httpServicesPut('/Users', 'put', data)
}