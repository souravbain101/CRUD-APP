import axios from "axios";

const URL='http://localhost:8000';
export const adduser=async(data)=>{
    try {
       return await axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log("error while calling the api",error);
    }
}

export  const getUsers=async()=>{
    try {
        return await axios.get(`${URL}/all`);   
    } catch (error) {
        console.log("Error while getiing data",error);
    }
}

export const loaduser=async(id)=>{
    try {
        // console.log(userid);
       return await axios.get(`${URL}/${id}`);
       
    } catch (error) {
        console.log('error while calling loaduser',error);
    }
}

export const edituser=async(user,id)=>{
    try {
        return await axios.put(`${URL}/${id}`,user);
    } catch (error) {
        console.log("error while calling edituser api");
    }
}

export const deleteuser=async(id)=>{
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("error while calling delete api");
    }
}