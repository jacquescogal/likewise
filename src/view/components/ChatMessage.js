import { Box,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase-config'


const ChatMessage = ({message,messageScroll}) => {
  const [theMessage,setTheMessage]=useState(message.text)
  const uid=auth.currentUser.uid

  useEffect(()=>{//Implement soft hyphen for exceedingly long words (Delete if slow down is major)
    let messageSize=message.text.length
    let newMessage=message.text
    messageScroll.current.scrollIntoView({behavior:'smooth'})
    for (let i=0;i<messageSize;i+=30){
      newMessage=newMessage.slice(0,i)+'\u00AD'+newMessage.slice(i);
      messageSize+='\u00AD'.length;
    }
    setTheMessage(newMessage);
  },[])


  return (
    <div  style={{display:'flex',flexDirection:'column',width:'100%'}}>
      {(uid===message.uid)?
      <h2 style={{alignSelf:'flex-end'}}>{message.name}</h2>:<h2 style={{alignSelf:'flex-start'}}>{message.name}</h2>
      }
        {(uid===message.uid)?
        <div  style={{display:'flex',flexDirection:'row-reverse',alignItems:'flex-start',width:'100%'}}>
        <Box
        sx={{ bgcolor:'secondary.main',display:'flex',boxShadow:1,
        py:1,px:3,borderRadius:'20px',maxWidth:'400px',borderBottomRightRadius:'0',marginBottom:1,marginTop:-2,mx:1}}>
            <Typography style={{color:'white', wordWrap: "break-word"}} >{theMessage}</Typography>
        </Box>
        </div>
        :
        <div  style={{display:'flex',flexDirection:'row',alignItems:'flex-start',width:'100%'}}>
        <Box
        sx={{ bgcolor:'primary.main',display:'flex',boxShadow:1,
        py:1,px:3,borderRadius:'20px',maxWidth:'400px',borderBottomLeftRadius:'0',marginBottom:1,marginTop:-2,mx:1}}>
            <Typography style={{color:'white', wordWrap: "break-word"}} >{theMessage}</Typography>
        </Box>
        </div>
        }
    </div>
  )
}

export default ChatMessage