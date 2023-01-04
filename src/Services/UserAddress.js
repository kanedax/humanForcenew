import httpServices from "./httpServices"

export const PostUserAddress = (UserId , values)=>{
    return httpServices(`/UserAddress/${UserId}` , "post" , values)
}
export const GetUserAddress = (id)=>{
    return httpServices(`/UserAddress/${id}` , "get" )
}
export const EditUserAddress = (values)=>{
    return httpServices(`/UserAddress/EditUserByAdmin` , "put" , values)
}