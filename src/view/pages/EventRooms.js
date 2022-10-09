import React from 'react'
import EventCard from '../components/EventCard'
import {query,collection,orderBy,onSnapshot,doc,setDoc,addDoc, serverTimestamp} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';


import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import EventRoomCreate from '../components/EventRoomCreate';

const EventRooms = ({eventRoom,setChatRoom,isLoaded}) => {
  const [eRooms,setERooms]=useState([]);
  const [openCreate,setOpenCreate]=useState(false);

  useEffect(()=>{
    if (eventRoom===''){
      console.log('Wait for event room state update')
    }
    else{
    const q = query(collection(db, 'aRooms/'+eventRoom+'/eRooms'),orderBy('cap','desc'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
      let eRooms=[]
      QuerySnapshot.forEach((doc)=>{
        eRooms.push({...doc.data(),id:doc.id})
      })
      console.log(eRooms);
      setERooms(eRooms);
    })
  }},[eventRoom])

  const handleClickOpen = () => {
    setOpenCreate(true);
  };

  const createChatRoom=async({name='testRoom',cap=10,location='Singapore',pax=1,time=serverTimestamp()})=>{

    //https://firebase.google.com/docs/firestore/manage-data/add-data
    const docRef = await addDoc(collection(db, 'aRooms/'+eventRoom+'/eRooms'), {
      name: name,
      cap: cap,
      pax: pax,
      rem: cap-pax,
      location:location,
      time:time
    });

  }

  //hardcoded, to be changed
  const dateTime="29 Sep 2022";
  const numOfJoiners=3;
  const activityName="Swimming"

  return (
    <menu>
    <div>
      <h1>
        Events for: {activityName}
        <Fab size="small" color="primary" aria-label="add" sx={{marginTop:'4px', marginLeft:'4px'}} onClick={handleClickOpen}>
        <AddIcon style={{fill:'white'}}/>
      </Fab>
        <EventRoomCreate openCreate={openCreate} setOpenCreate={setOpenCreate} createChatRoom={createChatRoom} isLoaded={isLoaded}/>
        {eRooms.map(eventObject=>(
          <div key={eventObject.id} className="col-md-auto">
          <EventCard key={eventObject.id} setChatRoom={setChatRoom} nameOfEvent={eventObject.name} dateTime={dateTime} numOfJoiners={numOfJoiners} chatRoomId={eventObject.id} thePath={'/aRooms/'+eventRoom+'/eRooms/'+eventObject.id+'/messages'} />
          </div>
        ))}
      </h1>
    </div>
    </menu>
  )
}

export default EventRooms