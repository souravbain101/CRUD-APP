import React, { useState } from 'react'
import { FormControl, FormGroup, Input, InputLabel, Button } from '@mui/material';
import styled from '@emotion/styled';
import{adduser} from './services/api';



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



export default function AddUser() {
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

  const adduserdetails=async()=>{
    await adduser(input);
  }
  

  return (
    <div>
     <Container>
     <h1>Add User</h1>
      <FormControl>
        <InputLabel >Name</InputLabel>
        <Input   onChange={handleChange} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={handleChange} name='username'/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={handleChange} name='email'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={handleChange} name='phone'/>
      </FormControl>
      <FormControl >
      <Button onClick={adduserdetails} variant="contained">Add User</Button>
      </FormControl>
     </Container>
    </div>
  )
}
