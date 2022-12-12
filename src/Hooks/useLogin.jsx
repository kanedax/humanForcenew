import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useLogin = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loginToken = JSON.parse(localStorage.getItem("loginToken"))
        if (loginToken) {
            axios.get("http://45.138.135.108:8080/api/Users/Current", {
                headers: {
                    'Authorization': `Bearer ${loginToken.data.token}`
                }
            }).then(res => {
                setIsLogin(res.status == 200 ? true : false)
                setLoading(false)
            }).catch(e => {
                localStorage.removeItem("loginToken")
                setIsLogin(false)
                setLoading(false)
            })
        } else {
            setIsLogin(false)
            setLoading(false)
        }
    }, [])
    return [loading, isLogin]
}
export default useLogin;