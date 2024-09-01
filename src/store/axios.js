import axios from 'axios';


const instance = axios.create({
    baseURL: "https://dreamscloudtechbackend.onrender.com/api"
})


export default instance