import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Tabs= styled(NavLink)`
font-size:20px;
margin-right:20px;
text-decoration:none;
color:inherit;
`

export default function Navbar() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Tabs to='/'>CRUD APP</Tabs>
          <Tabs to='all'>AllUsers</Tabs>
          <Tabs to ='add'>AddUser</Tabs>

        </Toolbar>
      </AppBar>
    </div>
  )
}
