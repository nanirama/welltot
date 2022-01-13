import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
//drawer elements used
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "gatsby"
export default function MainNavigation() {
const useStyles = makeStyles({
link:{
  textDecoration:"none",
  color: "#876D6F",
  fontSize: "14px",
  textTransform:'uppercase',
  padding:"8px 12px",
  display:"flex",
  width:'100%',
},
link2:{
  textDecoration:"none",
  color: "#876D6F",
  fontSize: "15px",
  padding:"5px 15px",
  display:"flex",
},
closeicon:{
  float:'right',
  display:'flex',
  justifyContent: 'flex-end', 
    '&:hover': {
    background: "inherit",
    },
},
openicon:{
  '&:hover': {
  background: "inherit",
  fontSize:'45px'
  }
} ,
mainbg:{
  background:'#fff',
  height:'100%',
  width:'260px',
  overflowX:'hidden',
}  ,
svg:{
  fontSize:'42px',
}            
});
const classes = useStyles();
//react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
const [open, setState] = useState(false);
//function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
const toggleDrawer = (open) => (event) => {
if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
return;
}
//changes the function state according to the value of open
setState(open);
};
return (
<>
<IconButton edge="start" className={classes.openicon} color="primary" aria-label="open drawer" onClick={toggleDrawer(true)}
sx={{ 
mr: 2, 
display: {
xs: 'block',
sm: 'none',
}
}}
>
<MenuIcon className={classes.svg} />
</IconButton>
{/* The outside of the drawer */}
<Drawer
//from which side the drawer slides in
anchor="right"
//if open is true --> drawer is shown
open={open}
//function that is called when the drawer should close
onClose={toggleDrawer(false)}
//function that is called when the drawer should open
onOpen={toggleDrawer(true)}
>
{/* The inside of the drawer */}
<Box className={classes.mainbg}>
   {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
   <IconButton  color="primary" className={classes.closeicon}>
      <CloseIcon className={classes.svg} onClick={toggleDrawer(false)} />
   </IconButton>
   <Box sx={{p: 3}}>
   <>
   <ListItemText>
      <Link to="/" className={classes.link}>
      Home</Link>
   </ListItemText>
   </>
   <>
   <ListItemText>
      <Link to="/start" className={classes.link}>
      Getting Started</Link>
   </ListItemText>
   </>
   <>
   <ListItemText>
      <Link to="/tot-life" className={classes.link}>
      TOT LIFE MAGAZINE</Link>
   </ListItemText>
   </>
   <ListItemText>
      <Link to="/help" className={classes.link}>
      HELP CENTER</Link>
   </ListItemText>
</Box>
<Divider sx={{mb: 2}} />  
<Box sx={{
p: 3,
}}>
<ListItemText>
   <Link to="https://www.affirmxh.com/conditions-of-use" className={classes.link2}>
   Conditions of Use</Link>
</ListItemText>
<ListItemText>
   <Link to="https://www.affirmxh.com/privacy" className={classes.link2}>
   Privacy Policy</Link>
</ListItemText>
<ListItemText>
   <Link to="/cookies" className={classes.link2}>
   Cookies</Link>
</ListItemText>
</Box>
</Box>
</Drawer>
</>
);
}