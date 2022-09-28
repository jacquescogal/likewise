import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import ExtensionIcon from '@mui/icons-material/Extension';
import ForumIcon from '@mui/icons-material/Forum';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Box from '@mui/material/Box';
import ChatRoomDrawer from './ChatRoomDrawer'

const ChatRoomBar = ({roomUID,roomName,roomDate,roomTime,roomLocation,roomPax,roomCap}) => {
  const navigate = useNavigate();
  return (
    <div className="chatRoomBar" style={{backgroundColor:'#ffad01', display:'flex',alignItems:'center',height:'50px',width:'80%',position:'absolute',left:'20%',top:'0'}}>
        <h2 style={{color:'white'}}>{roomName}</h2>
        <div style={{position:'absolute',right:'0'}}>
        <ChatRoomDrawer style={{alignSelf:'end'}} 
        roomDate={roomDate} 
        roomTime={roomTime} 
        roomLocation={roomLocation}
        roomCap={roomCap}
        roomPax={roomPax}/>
        </div>
    </div>
  )
}

export default ChatRoomBar