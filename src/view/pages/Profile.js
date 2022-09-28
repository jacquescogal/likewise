import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc,getDoc } from 'firebase/firestore'
import { auth } from '../../firebase-config'
import { db } from '../../firebase-config'
import ProfilePic from '../components/ProfilePic'
import { AirportShuttleTwoTone, NotListedLocation } from '@mui/icons-material'

const Profile = () => {

  //refer to registration for date picker/gender picker/year picker etc.
  
  let navigate = useNavigate();

  //profile hashmap
  const [profileInfo,setProfileInfo]=useState({
    imageUrl:'',
    username:'',
    email:'',
    password:'',
    gender:'',
    DOB:'',
    course:'',
    studyYear:''
  })


  const docRef = doc(db, "users", auth.currentUser.email);
  useEffect(()=>{
    getDoc(doc(db, "users", auth.currentUser.email)).then(docSnap => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setProfileInfo({...docSnap.data(),email:auth.currentUser.email,password:'password123'})
        console.log(docSnap.data().DOB.toString())
      } else {
        console.log("No such document!");
      }
    })
  },[])

  const handleLogout = () => {
      const auth=getAuth();
      auth.signOut().then((value)=>{
        console.log(value)
        navigate('/');
      },(reason)=>console.log(reason))
  }

  return (
    <menu>
    <div>
      <h1 style={{marginTop:"12px", fontFamily:"serif", fontWeight: 'bold', fontSize: '50px', color:'#ffad01'}}>Profile</h1>
      <section>
      </section>
      <ProfilePic />

      <section>
       Username:
      <p style={{minHeight:'25px',backgroundColor: "white", border:"1px solid orange", borderRadius: '5px', borderRight : '300px'}} >
      {profileInfo.username}
      </p></section>

      <section>
       Password:
      <input value={profileInfo.password} readOnly={true} disabled={true} style={{minHeight:'100%',minWidth:'100%',backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} type='password' >
      </input></section>

      <section>
       School Email:
      <p style={{minHeight:'25px',backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      {profileInfo.email}
      </p></section>

      <section>
       Gender:
      <p style={{minHeight:'25px',backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      {profileInfo.gender}
      </p></section>

      <section>
       Date of Birth:
      <p style={{minHeight:'25px',backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      {profileInfo.DOB} 
      </p></section>

      <section>
       Course of study:
      <p style={{minHeight:'25px',backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      {profileInfo.course}
      </p></section>

      <section>
       Year of study:
      <p style={{minHeight:'25px',backgroundColor: "white", border:"1px solid orange",borderRadius: '5px', borderRight : '300px'}} >
      {profileInfo.studyYear}
      </p></section>

      <br></br>
      <div>
        <button onClick={()=>handleLogout()}>Logout</button>
      </div>
    </div>
    </menu>
  )
}

export default Profile