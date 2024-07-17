import axios from "axios";

const Api = axios.create({
    baseURL : "http://localhost:5050",
    withCredentials : true,
    headers :{
        "Content-Type" : "application/json",
    }
})

export const testApi = Api.get("/test")
export const loginUserApi = (data) =>  Api.post('/api/user/login', data)