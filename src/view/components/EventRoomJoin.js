import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom';

export default function EventRoomCreate({openJoin,setOpenJoin,eventCard,setChatRoom}) {
    const navigate=useNavigate();


  const handleClose = () => {
    setOpenJoin(false);
  };

  const updatePax=()=>{
    
  };

  return (
    <div>
        {(eventCard)?
      <Dialog open={openJoin} onClose={handleClose}>
        
        <DialogTitle>Join Room: {eventCard.name}</DialogTitle>
        <DialogContent>
        <Stack spacing={1.5} sx={{minWidth:'300px'}}>
          <DialogContentText>
            Location: {eventCard.location}
          </DialogContentText>
          
          <DialogContentText>
            Date: {eventCard.date}
          </DialogContentText>

          <DialogContentText>
            Time: {eventCard.time}
          </DialogContentText>

          <DialogContentText>
            Pax/Capacity : {eventCard.pax}/{eventCard.cap}
          </DialogContentText>
      
      </Stack>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>{setChatRoom(eventCard.path);navigate('/home/chatroom')}}>Join</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>:<div></div>}
    </div>
  );
}