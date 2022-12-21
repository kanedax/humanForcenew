import httpServicesPut from "./httpServicePut"
import httpServices from "./httpServices"

export const registerService = (values)=>{
    return httpServices('/Users', 'post', values)
}

export const editSingleUser = (formData)=>{
    return  httpServicesPut('/Users', 'put', formData)
}