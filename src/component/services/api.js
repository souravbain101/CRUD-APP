import axios from "axios";

const URL='http://localhost:8000';
export const adduser=async(data)=>{
    try {
       return await axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log("error while calling the api",error);
    }
}
