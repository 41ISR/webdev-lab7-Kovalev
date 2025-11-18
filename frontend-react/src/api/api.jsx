import axios from "axios"

const apiInstance = axios.create({
    baseURL:"https://kitek.ktkv.dev/feedback/api",
    Headers:{
        "Content-Type":"application/json"
    }
})

const getMessages = async() =>{
    const data = await apiInstance.get("/messages")
    return data.data
}

const registerUser = async (user) =>{
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const loginUser = async (user) =>{
    const res = await apiInstance.post("/auth/login", user)
    return res
}

export const api = {
    getMessages,
    registerUser,
    loginUser
}

