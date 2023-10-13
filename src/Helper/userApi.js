 import axios from 'axios'
import { BASE_URL } from '../Global/Global'

axios.defaults.headers.common['auth-token'] = `${localStorage.getItem('token')}`;

 
 export const LoginUser = async(user) =>{
    try {
        const response = await axios.post(`${BASE_URL}/login`,user)
        return response 
    } catch (error) {
        console.log("Error in doing login ",error.message)
        return error.response 
    }
}

 export const RegisterUser = async(user) =>{
    try {
        const response = await axios.post(`${BASE_URL}/register`,user)
        return response 
    } catch (error) {
        console.log("Error in doing Register ",error)
        return error.response 
    }
}

 export const ResetUser = async(user) =>{
    try {
        const response = await axios.post(`${BASE_URL}/reset-password`,user)
        return response
    } catch (error) {
        console.log("Error in doing Reset ",error)
        return error.response 
    }   
}

 export const ResetUserWithToken = async(user) =>{
    try {
        const response = await axios.post(`${BASE_URL}/reset-password-with-token`,user)
        return response
    } catch (error) {
        console.log("Error in doing Reset ",error)
        return error.response 
    }   
}

 export const getUser = async(user) =>{
    try {
        const response = await axios.get(`${BASE_URL}/private`)
        return response.data
    } catch (error) {
        console.log("Error in getting User ",error)
        return error.response 
    }
}

 export const forgetPassword = async(user) =>{
    try {
        const response = await axios.post(`${BASE_URL}/forget-password`,user)
        return response
    } catch (error) {
        console.log("Error in getting Forget Password Email ",error)
        return error.response 
    }
}

 export const SendEmailForVerification = async(user) =>{
    try {
        const response = await axios.post(`${BASE_URL}/generate-token-to-verify-email`,user)
        return response
    } catch (error) {
        console.log("Error in Sending Email for Verification",error)
        return error.response 
    }
}

export const VerifyUser = async(user) =>{
    try {
        const response = await axios.post(`${BASE_URL}/verify-user-with-token`,user)
        return response
    } catch (error) {
        console.log("Error in doing Verification of User ",error)
        return error.response 
    }   
}

