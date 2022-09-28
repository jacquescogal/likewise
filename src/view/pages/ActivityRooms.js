import React, { useState } from 'react'
import ActivityCard from '../components/ActivityCard'
import {query,collection,orderBy,onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const ActivityRooms = ({setEventRoom}) => {

  const [aRooms,setARooms]=useState(null);

  useEffect(()=>{
    const q = query(collection(db, 'aRooms'),orderBy('cap','desc'))
    let t=0
    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
      let aRooms=[]
      QuerySnapshot.forEach((doc)=>{
        aRooms.push({...doc.data(),id:doc.id,timer:t*500})
        t+=0.25;
      })
      console.log(aRooms);
      setARooms(aRooms);
    })
  },[])

  
  return (

    <Box sx={{marginLeft:"20px"}}>
    <div > 
    <Box sx={{ flexGrow: 1, height: '80px'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography height= '80px'>
          <h1 style={{marginTop:"12px", fontFamily:"serif", fontWeight: 'bold', fontSize: '45px', color:'white'}}>Activity Rooms</h1>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <div >
      <h1 style={{marginLeft:"12px", marginTop:"12px"}}>ActivityRooms</h1>
      {(aRooms)?
    <div className="container-fluid d-flex justify-content-center" style={{minWidth:1000,color:'orange',bgcolor:'orange'}}>
      <div className="row">
        {aRooms.map(activityObject=>(
          <div key={activityObject.id} className="col-md-auto">
          <ActivityCard key={activityObject.id} nameOfEvent= {activityObject.id} 
            imageOfEvent = {activityObject.imageUrl} setEventRoom={setEventRoom} timer={activityObject.timer}/>
          </div>
        ))}
      </div>
    </div>:<div
    style={{
        position: 'absolute', left: '60%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
      <p>loading...</p>
      <CircularProgress color="secondary" size={50} thickness={5}/>
    </div>}
    </div>

    </div>

  </Box>
  )
}

export default ActivityRooms