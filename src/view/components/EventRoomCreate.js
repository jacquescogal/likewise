import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

//datetime picker
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';

import { useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function EventRoomCreate({openCreate,setOpenCreate,createChatRoom}) {

    const [cap,setCap]=useState(2)
    const [roomName,setRoomName]=useState('')
    const [location,setLocation]=useState('')
    const [dateTime,setDateTime]=useState({value:null,error:null})

  const handleClose = () => {
    setOpenCreate(false);
  };

  const handleCreate = () => {
    
    let pass=true
    console.log(dateTime.error)
    if (dateTime.error===true){
        pass=false
        toast.error('Date needs to be in the future and minute must be in 15 minute intervals only')
    }
    if (roomName===''){
        pass=false
        toast.error('Event name cannot be left blank')
    }
    if (location===''){
        pass=false
        toast.error('Location cannot be leftblank')
    }
    if (pass===true){
        setOpenCreate(false);
        console.log(dateTime.value.$d)
        createChatRoom({name:roomName,cap:cap,location:location,time:dateTime.value.$d})
    }
  };

  return (
    <div>
      <Dialog open={openCreate} onClose={handleClose}>
        <DialogTitle>Create Room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide the following details to create a room now:
          </DialogContentText>
          <Stack spacing={1.5}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event name"
            fullWidth
            variant="standard"
            onChange={e=>setRoomName(e.target.value)}
          />

<TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            fullWidth
            variant="standard"
            onChange={e=>setLocation(e.target.value)}
          />


          {/* DateTime Picker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>

      <MobileDateTimePicker
      disablePast
      minutesStep={15}
minDateTime={dayjs().add(1, 'day').subtract(dayjs().hour(),'hour')}
views={['month','day','hours','minutes']}
defaultCalendarMonth={dayjs()}
onChange={e=>{setDateTime({value:e,error:false});console.log('changed');}}
          value={dateTime.value}
          label="Date & Time of Event"
          inputFormat="YYYY/MM/DD hh:mm a"
          renderInput={(params) => <TextField {...params} />}
          onError={value=>{console.log('error');(value!==null)?setDateTime({value:dateTime.value,error:true}):console.log('fixed')}}
        />
        </LocalizationProvider>

          <FormControl margin="dense" fullWidth>
        <InputLabel id="Capacity">Capacity</InputLabel>
        <Select
          labelId="Capacity"
          id="CapacitySelect"
          value={cap}
          label="Capacity"
          onChange={e=>{setCap(e.target.value);}}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        
      </FormControl>
      </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}