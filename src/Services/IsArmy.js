import httpServices from "./httpServices"

export const IsArmyService = (userId, values)=>{
    return httpServices(`/UserArmyFeature/${userId}`, 'post', values)
}
export const GetArmyUsers = (id)=>{
    return httpServices (`/UserArmyFeature/${id}`, 'get')
}