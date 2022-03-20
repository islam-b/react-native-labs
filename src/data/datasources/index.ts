import ENV from "../../../envrionment.";
import axios from "axios";
import {Alert} from "react-native"

export const HttpClient = axios.create({ baseURL: ENV.baseUrl });

HttpClient.interceptors.response.use(
    response=>response,
    error=>{
        console.log(error)
        Alert.alert("An error has occured !")
        return Promise.reject(error)
    }
)