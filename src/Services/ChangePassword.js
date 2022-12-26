import httpServices from "./httpServices"

export const ChangePassword = (data)=>{
    return httpServices('/Users/ChangePassword', 'put', data)
}