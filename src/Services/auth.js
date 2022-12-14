import httpServices from "./httpServices"

export const loginService = (values)=>{
    return httpServices("/Auth/Login","post", values)
}

export const logOutService = ()=>{
    return httpServices("/Auth/logout", "delete")
}

export const getUserAuth = ()=>{
    return httpServices("/Users/Current", "get")
}