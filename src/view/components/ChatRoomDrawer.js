import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlaceIcon from '@mui/icons-material/Place';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const TemporaryDrawer=({roomDate,roomTime,roomLocation,roomPax,roomCap})=> {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItemText primary='Event Details:' sx={{marginLeft:'10px'}}/>
        <ListItem key='Date'>
            <ListItemIcon>
                <CalendarMonthIcon/>
            </ListItemIcon>
            <ListItemText primary='Date' secondary={roomDate}/> {/*put date text here*/}
        </ListItem>
        <ListItem key='Time'>
            <ListItemIcon>
                <ScheduleIcon/>
            </ListItemIcon>
            <ListItemText primary='Time' secondary={roomTime}/> {/*put time text here*/}
        </ListItem>
        <ListItem key='Location'>
            <ListItemIcon>
                <PlaceIcon/>
            </ListItemIcon>
            <ListItemText primary='Location' secondary={roomLocation}/> {/*put location text here*/}
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItemText sx={{marginLeft:'10px'}}>Attendees ({roomPax}/{roomCap}) :</ListItemText>
      <ListItem>
            <ListItemIcon>
                <ManIcon sx={{fill:'#ffad01'}}/>
            </ListItemIcon>
            <ListItemText primary='Andrei (Owner)'/> 
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <WomanIcon/>
            </ListItemIcon>
            <ListItemText primary='Ann'/> 
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <ManIcon/>
            </ListItemIcon>
            <ListItemText primary='Dave'/> 
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={'right'}>
            <IconButton
            size="large"
            aria-label="menu"
            
            onClick={toggleDrawer('right', true)} 
          >
            <MenuIcon/>
          </IconButton>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
}
    </div>
  );
}

export default TemporaryDrawer