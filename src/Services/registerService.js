import httpServicesPut from "./httpServicePut"
import httpServices from "./httpServices"

export const registerService = (values)=>{
    return httpServices('/Users', 'post', values)
}

export const editSingleUser = (values)=>{
    return  httpServicesPut('/Users', 'put', values)
}