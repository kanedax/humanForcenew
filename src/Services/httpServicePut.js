import axios from "axios"
import Config from './Config.json'

const httpServicesPut = (url, method, data)=>{
    const tokenInfo = JSON.parse(localStorage.getItem("loginToken"))
    return axios({
        url: Config.onlineApi+url,
        method,
        data,
        headers:{
            Authorization : tokenInfo ? `Bearer ${tokenInfo.data.token}` : null,
            'Content-Type': 'multipart/form-data',
        },
    });

}

export default httpServicesPut