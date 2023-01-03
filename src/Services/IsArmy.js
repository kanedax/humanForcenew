import httpServices from "./httpServices"

export const IsArmyService = (values)=>{
    return httpServices("/UserArmyFeature/", 'post', values)
}
export const GetArmyUsers = (id)=>{
    return httpServices (`/UserArmyFeature/${id}`, 'get')
}