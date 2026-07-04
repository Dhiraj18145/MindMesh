import axios from "axios";

const API = axios.create({
    baseURL:"https://mindmesh-backend-mi8l.onrender.com/api"
});

API.interceptors.request.use((config)=>{

    const token=localStorage.getItem("token");

    if(token){

        config.headers.Authorization=`Bearer ${token}`;

    }

    return config;

});

export default API;