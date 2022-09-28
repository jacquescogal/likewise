import Button from "../components/common/Button";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Login = ({setEmail, setPassword, handleAction, handleReset}) => {
  
  //Runs once after render
  useEffect(()=>{
    setEmail('');
    setPassword('');
  },[])

  let navigate=useNavigate()

  return (
    <div style={{
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0
    }} >
      <Stack spacing={2}>
      <b style={{alignSelf:'center', fontSize:40}}>Login</b>
      <TextField label="E-mail" onChange={e=>setEmail(e.target.value)}/>
      <TextField label="Password" onChange={e=>setPassword(e.target.value)} type='password'/>
      <Button label="Confirm Login" style={{alignSelf:'center'}} handleAction={handleAction} />
      </Stack>
    </div>
  )
}

export default Login