import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import ExtensionIcon from '@mui/icons-material/Extension';
import ForumIcon from '@mui/icons-material/Forum';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Box from '@mui/material/Box';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sideBar">
        <Box sx={{marginTop:'30px', marginLeft:'42px'}}>
        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" height={200} width={200} sx={{marginTop:"10px"}}/>
        </Box>
        <hr/>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          m: 1,
          borderRadius: 1,
          marginLeft: 4,
        }}
      >
          <Button sx={{paddingLeft:1, minWidth:'200px', justifyContent: "flex-start", color:'white',fontSize:'20px', fontFamily:"Quicksand", ':hover':{color:'primary.main',bgcolor:'white'}}} onClick={()=>navigate('ActivityRooms')} startIcon={<ExtensionIcon sx={{ fill:'white','&:hover':{fill:'primary.main'}}}/>}>Activity Rooms</Button>
          <Button sx={{minWidth:'200px', justifyContent: "flex-start", color:'white',fontSize:'20px', fontFamily:"Quicksand", ':hover':{color:'primary.main',bgcolor:'white'}}} onClick={()=>navigate('MyRooms')} startIcon={<ForumIcon sx={{ fill:'white','&:hover':{fill:'primary.main'} }}/>}>My Rooms</Button>
          <Button sx={{minWidth:'200px', justifyContent: "flex-start", color:'white',fontSize:'20px', fontFamily:"Quicksand", ':hover':{color:'primary.main',bgcolor:'white'}}} onClick={()=>navigate('Profile')} startIcon={<AccountBoxIcon sx={{ fill:'white','&:hover':{fill:'primary.main'} }}/>}>Profile</Button>
          </Box>
    </div>
  )
}

export default SideBar