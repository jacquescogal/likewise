import React, { useState } from 'react'
import ActivityCard from '../components/ActivityCard'
import {query,collection,orderBy,onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityRooms = ({setEventRoom}) => {

  const [aRooms,setARooms]=useState([]);

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

  const navigate = useNavigate();

  return (
    <div >      
      <h1 style={{marginLeft:"12px", marginTop:"12px"}}>ActivityRooms</h1>
      <div className="container-fluid d-flex justify-content-center" style={{minWidth:1000,color:'orange',bgcolor:'orange'}}>
        <div className="row">
          {aRooms.map(activityObject=>(
            <div key={activityObject.id} className="col-md-auto">
            <ActivityCard key={activityObject.id} nameOfEvent= {activityObject.id} 
              imageOfEvent = {activityObject.imageUrl} setEventRoom={setEventRoom} timer={activityObject.timer}/>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate("/home/map")}>Go To Maps</button>
    </div>
  )
}

export default ActivityRooms