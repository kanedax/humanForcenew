import httpServices from "./httpServices"

export const PostUserSpecification = (values)=>{
    return httpServices('/UserSpecification' , "post" , values)
}
export const GetUserSpecification = (id)=>{
    return httpServices(`/UserSpecification/${id}` , "get")
}
export const PutUserSpecification = (values)=>{
    return httpServices('/UserSpecification' , "put" , values)
}