import axios from "axios"
import Config from './Config.json'

const httpServices = (url, method, data=null)=>{
    const tokenInfo = JSON.parse(localStorage.getItem("loginToken"))
    return axios({
        url: Config.onlineApi+url,
        method,
        data,
        headers:{
            Authorization : tokenInfo ? `Bearer ${tokenInfo.data.token}` : null,
            "Content-Type" : "application/json"
        },
    });

}

export default httpServices