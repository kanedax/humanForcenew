import httpServices from "./httpServices"

 export const getAllUsers = ()=>{
    return httpServices('/Users/GetAllUsers', 'get')
 }

 export const getSingleUser = (id)=>{
   return httpServices(`/Users/${id}`, 'get')
 }