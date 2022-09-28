import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const MyRooms = () => {
  return (
      <Box sx={{height: '80px', marginLeft:"20px"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography height='80px'>
          <h1 style={{marginTop:"12px", fontFamily:"serif", fontWeight: 'bold', fontSize: '45px', color:'white'}}>My Rooms</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MyRooms