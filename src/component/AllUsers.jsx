import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState} from 'react'
import {getUsers,deleteuser} from './services/api'
import { useEffect} from 'react'
import styled from '@emotion/styled'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useNavigate } from 'react-router-dom';


const Tablec=styled(Table)`
width:80%;
margin:10% auto 5% auto;
`
const TableRow1=styled(TableRow)`
background:#1976d2;
& > th{
  color:#fff;
  font-size:17px;
}
`

export default function AllUsers() {
  const navigate=useNavigate();

useEffect(()=>{
getallUsers();
},[]);
const [users,setUser]=useState([]);

const getallUsers=async()=>{
  const res=await getUsers();
  setUser(res.data);

}

const handleedit=(id)=>{
  navigate(`/edit/${id}`);
}

const handledelete=async(id)=>{
 await deleteuser(id);
 getallUsers();
 
}




  return (
    <div>
    
      <Tablec>
        <TableHead>
          <TableRow1>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>USERNAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell></TableCell>
          </TableRow1>
        </TableHead>
        <TableBody>
          {
            users.map(user=>(
              <TableRow key={user.userid}>
                <TableCell>{user.userid}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell style={{fontSize:20}}>
                
               <FaEdit style={{color:'#388e3c',cursor:'pointer'}} onClick={()=>handleedit(user.userid)}/>
                <MdDelete style={{marginLeft:5,color:'#d50000',cursor:'pointer'}}  onClick={()=>handledelete(user.userid)}/>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Tablec>
      
    </div>
  )
}
