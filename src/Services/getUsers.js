import httpServices from "./httpServices"

 export const getAllUsers = ()=>{
    return httpServices('/Users/GetAllUsers', 'get')
 }