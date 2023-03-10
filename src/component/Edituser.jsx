import React, { useEffect, useState} from 'react'
import { FormControl, FormGroup, Input, InputLabel, Button } from '@mui/material';
import styled from '@emotion/styled';
import{edituser,loaduser} from './services/api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';





const Container=styled(FormGroup)`
width:50%;
margin:8% auto 0 auto;
& > div{
  margin-top:20px;
}
& > h1{
  color:#1976d2;
  text-align:center;
}
`



export default function EditUser() {

  const{id}=useParams();
   

  const navigate=useNavigate();
  const User={
   
    name:'',
    username:'',
    email:'',
    phone:''
  }
  const[input,setinput]=useState(User);
  
  
  const handleChange=(event)=>{
    
    setinput({...input,[event.target.name]:event.target.value});
    
  }

  const edituserdetails=async()=>{
    await edituser(input,id);
    navigate('/all');
  }
  
 
  useEffect(()=>{
    Loaduserdetails();
},[])


  const Loaduserdetails=async()=>{
   const response= await loaduser(id);
   
   setinput(response.data[0]);
   console.log(response.data);

  }

  return (
    <div>
     <Container>
     <h1>Edit User</h1>
      <FormControl>
        <InputLabel >Name</InputLabel>
        <Input   onChange={handleChange} name="name" value={input.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={handleChange} name='username' value={input.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={handleChange} name='email' value={input.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={handleChange} name='phone' value={input.phone}/>
      </FormControl>
      <FormControl >
      <Button onClick={edituserdetails} variant="contained">Edit User</Button>
      </FormControl>
     </Container>
    </div>
  )
}
