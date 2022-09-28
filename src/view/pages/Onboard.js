import ButtonGroup from '@mui/material/ButtonGroup';
import TextBox from "../components/common/TextBox";
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

const Onboard = () => {
    let navigate=useNavigate()

  return (
    <div className="onboard">
        <div style={{
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} className="onboardingFloat">
        <Stack spacing={0}>
            <img className="img-fluid" style={{alignSelf:'center'}}src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" height={200} width={200}/>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=>
                    {navigate('Login');
                    }} variant="outlined"
                    sx={{
                      ':hover': {
                        bgcolor: 'primary.main', // theme.palette.primary.main
                        color: 'white',
                      },
                    }}>Login</Button>
                <Button onClick={()=>
                    {navigate('Register');
                    }} variant="outlined"sx={{
                      ':hover': {
                        bgcolor: 'primary.main', // theme.palette.primary.main
                        color: 'white',
                      },
                    }}>Register</Button>
                <Button onClick={()=>
                    {navigate('ResetPassword');
                    }} variant="outlined"
                    sx={{
                      ':hover': {
                        bgcolor: 'primary.main', // theme.palette.primary.main
                        color: 'white',
                      },
                    }}>Forgotten Password?</Button>
            </ButtonGroup>
      </Stack>
      </div>
      <div className="onboardContent">
        <Outlet />
      </div>
    </div>
  )
}

export default Onboard