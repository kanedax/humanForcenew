import httpServices from "./httpServices"

export const IsArmyService = (values)=>{
    return httpServices("/UserArmyFeature/", 'post', values)
}
export const GetSingleArmyUser = (id)=>{
    return httpServices (`/UserArmyFeature/${id}`, 'get')
}
export const EditArmyUser = (values)=>{
    return httpServices ("/UserArmyFeature", "put" , values)
}
