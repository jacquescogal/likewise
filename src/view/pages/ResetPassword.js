import Button from "../components/common/Button";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { TextField } from "@mui/material";

const ResetPassword = ({setEmail, handleReset}) => {
  
    return (
      <div style={{
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0
      }} >
        <Stack spacing={2}>
        <b style={{alignSelf:'center', fontSize:40}}>Reset Password</b>
        <TextField label="E-mail" onChange={e=>setEmail(e.target.value)}/>
        <Button label="Reset Password" style={{alignSelf:'center'}} handleAction={handleReset} />     
        </Stack>
      </div>
    )
  }

  export default ResetPassword