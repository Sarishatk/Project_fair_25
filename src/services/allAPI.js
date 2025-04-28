import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonApi"



export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/users/login`,user,"")
}

// api for add project
