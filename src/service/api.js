import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.40.224:3000"
})

export default api;