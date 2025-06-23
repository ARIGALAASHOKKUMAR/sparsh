import axios from "axios"

export const base_url = process.env.REACT_APP_BASEURL

console.log("ba", base_url);


export const myAxios = axios.create({
    baseURL: base_url,
    headers: {
        //'Content-Type': 'application/json',

    },
})




export const VolunteerRegister = "open/volunteer/register"
