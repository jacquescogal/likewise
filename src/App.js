//firebase API
import fireBase, { db } from './firebase-config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth'
import 'firebase/auth'

//Routing libs
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";

//Page components
import Login from "./view/pages/Login";
import Register from "./view/pages/Register";
import Home from "./view/pages/Home";
import Onboard from './view/pages/Onboard';
import ResetPassword from './view/pages/ResetPassword';
import EventRooms from "./view/pages/EventRooms";
import ChatRoom from './view/pages/ChatRoom';

import MyRooms from "./view/pages/MyRooms";
import ActivityRooms from "./view/pages/ActivityRooms";
import Profile from "./view/pages/Profile";

//Hooks
import { useEffect, useState } from 'react';

//Toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import userEvent from '@testing-library/user-event';
import { Outlet ,Navigate} from 'react-router-dom';

//adding Doc to firestore
import { doc, setDoc } from "firebase/firestore"; 

const App = () =>{
  
  const [user,setUser]=useState('');
  const [eventRoom,setEventRoom]=useState('');
  const [chatRoom,setChatRoom]=useState('');

  //login & registration 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [imageUrl,setImageUrl]=useState("https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png")
  const [username,setUsername]=useState('')
  const [gender,setGender]=useState('')
  const [DOB,setDOB]=useState('')
  const [course,setCourse]=useState('')
  const [studyYear,setStudyYear]=useState('')

  let navigate=useNavigate();

  

  
  const handleLogin = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          const user=auth.currentUser;
          console.log(user.emailVerified);
          if (user.emailVerified){
            console.log(auth.currentUser);
            setUser(user);
            navigate('/Home/ActivityRooms');
          }
          else{
            toast.error("Please verify your Email");
          }
        }).catch((error) => {
          console.log(error)
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please register for an account');
          }
          if(error.code === 'auth/invalid-email'){
            toast.error('Please check the Email');
          }
          if (error.code ==='auth/internal-error'){
            toast.error('Please enter both Email and Password');
          }
        })
  }


  const handleRegister = () => {
    //Check for new field's existence and that there is no duplicate of username before creating.
    //Add upload of profile photo
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const auth = getAuth();
    console.log(imageUrl);
    console.log(email);
    console.log(password);
    console.log(username);
    console.log(gender);
    console.log(DOB);
    console.log(course);
    console.log(studyYear);
    if(email.indexOf('@e.ntu.edu.sg') === -1) {
      toast.error('Only NTU students are allowed to register');
    }
    else if (password.length < 8) {
      toast.error('Password must be 8 characters or longer');
    }
    else if (/[a-zA-Z]/.test(password) === false) {
      toast.error('Password must contain alphabets');
    }
    else if (specialChars.test(password) == false) {
      toast.error('Password must contain at least one special character');
    }
    else if (username.length < 4) {
      toast.error('Username must be 4 characters or longer');
    }
    else if ((parseInt(DOB.slice(-4)) > 2005) | (parseInt(DOB.slice(-4)) < 1980)) {
      toast.error('Please check your date of birth again');
    }
    else if ((gender == '') | (DOB == '') | (course == '') | (studyYear == '')) {
      toast.error('Please fill up all required information');
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
    .then((response)=>
    {console.log('what');
    console.log(response);

      setDoc(doc(db,'users',auth.currentUser.email),{
        imageUrl:imageUrl,
        username:username,
        gender:gender,
        DOB:DOB,
        course:course,
        studyYear:studyYear,
      })

      sendEmailVerification(auth.currentUser).then((value)=>{
        toast('Email sent');
        console.log(auth.currentUser.email);
      })
  toast('Please verify your Email address');}).catch((error) => {
      console.log(error)
      if(error.code === 'auth/wrong-password'){
        toast.error('Please check the Password');
      }
      if(error.code === 'auth/invalid-email'){
        toast.error('Please check the Email');
      }
      if (error.code ==='auth/internal-error'){
        toast.error('Please enter both Email and Password');
      }
      if (error.code ==='auth/email-already-in-use'){
        toast.error('Email already in use. Please try to login.');
      }
    })
    }
  }
  const handlePasswordReset = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
    .then((response)=>
    { toast('Password reset link sent');}).catch((error) => {
      })
  }

  

  return(
      <div className="App">
        <ToastContainer/>
        <Routes>
            <Route path='/' element={<Onboard />}>
              <Route path="Login" element={<Login setEmail={setEmail} setPassword={setPassword} handleAction={handleLogin}/>}/>
              <Route path="Register" element={<Register setEmail={setEmail} email={email} setPassword={setPassword} handleAction={handleRegister} setUsername={setUsername} setImageUrl={setImageUrl} setGender={setGender} setDOB={setDOB} setCourse={setCourse} setStudyYear={setStudyYear} course={course} studyYear={studyYear} DOB={DOB} gender={gender}/>}/>
              <Route path="ResetPassword" element={<ResetPassword setEmail={setEmail} handleReset={handlePasswordReset}/>}/>
            </Route>
            <Route element={<ProtectedRoute user={user}/>}>
              <Route path="/Home" element={<Home />}>
                <Route path="ActivityRooms" element={<ActivityRooms setEventRoom={setEventRoom}/>}/>
                <Route path="EventRooms" element={<EventRooms setChatRoom={setChatRoom} eventRoom={eventRoom} chatRoom={chatRoom}/>}/>
                <Route path="MyRooms" element={<MyRooms />}/>
                <Route path="Profile" element={<Profile />}/>
                <Route path="ChatRoom" element={<ChatRoom chatRoom={chatRoom}/>}/>
              </Route>
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
  );
}

const ProtectedRoute=({children, user})=>{
  if (!user || !user.emailVerified){
    console.log('What')
    return <Navigate to={'/'} replace />;
  }
  else{
    return (children)?children:<Outlet/>;
  }
}

export default App;
