import axios from "axios"

export default function Auth() {

    const http = axios.create({
        baseURL: process.env.REACT_APP_BACK,
        headers:{
            "Content-Type":"application/json"
        }
    })

    return {
        http,
    }

}