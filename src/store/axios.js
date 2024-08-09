import axios from 'axios';


const instance = axios.create({
    baseURL: "https://dreamscloudtechbackend.vercel.app/api"
})


export default instance