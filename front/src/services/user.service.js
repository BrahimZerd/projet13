import axios from "axios";
import authHeader from "./auth.header";


const API_URL = "localhost:3001/api/v1";


const getUserProfil = () => {
    return axios.get(API_URL + "/user/profile", { headers: authHeader() });
}



export default {
    getUserProfil
}