import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';


const BasicCard = ({nameOfEvent,dateTime,numOfJoiners,thePath,setChatRoom}) =>{
  
  const navigate=useNavigate();

  return (
    <Card sx={{display:'flex',minWidth: 50, ':hover':{boxShadow:'10'}, marginTop:'15px', fill:'#cd853f'}}>
      <CardContent>
        <h1>{nameOfEvent}</h1>
        <p>{dateTime}, {numOfJoiners}/8 joiners</p>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={()=>{setChatRoom(thePath);navigate('/home/chatroom')}}>Join</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;