import React from "react"
import "../../styles/sectionWhyChooseWelltot.scss"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const SectionWhyChooseWelltot = () => {
const useStyles = makeStyles({
whychooseus:{
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'column',
    marginTop:'50px',
    marginBottom:'50px',
    textAlign:'center',
    justifyContent:'center',
},
container:{
    padding:'0',
},
card:{
    backgroundColor:'transparent',
    boxShadow:'none',
},
media:{
    width: '100px',
    height: '100px',
    display:'inline-block',
    fill: '#297f3f',
},
heading: {
    marginBottom:'30px',
},
title: {
    marginBottom:'14px'
},
text: {
    justifyContent:'start',
    textAlign:'left',
},
CardContent:{
    paddingTop:'0',
    paddingBottom:'0',
},
});
const classes = useStyles();
return (
<div className="sectionWhyChooseWelltot" className={classes.whychooseus}>
   <div className="headCopy">
      <Typography variant="h2" color="textSecondary" className={classes.heading}>Why Choose Welltot</Typography>
   </div>
   <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={4}>
         <Box>
            <Card className={classes.card}>
               <CardMedia className={classes.media}>
                  <svg id="sleep-more" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                     <path d="M63.1,20.34a1.65,1.65,0,0,0-1.94,2.34A30.91,30.91,0,0,1,64.65,37,31.31,31.31,0,0,1,24.28,67a1.66,1.66,0,0,0-1.75.52,1.64,1.64,0,0,0-.19,1.81,34.62,34.62,0,1,0,40.76-49Zm-10,64.48a31.18,31.18,0,0,1-25.9-13.74,33.87,33.87,0,0,0,6.11.55A34.66,34.66,0,0,0,68,37a34,34,0,0,0-2.22-12.17,31.32,31.32,0,0,1-12.62,60Z"/>
                     <path d="M27.1,38.65h13L25.83,55.74a1.65,1.65,0,0,0,1.27,2.7H43.59a1.65,1.65,0,1,0,0-3.3h-13L44.86,38.06a1.62,1.62,0,0,0,.22-1.75,1.64,1.64,0,0,0-1.49-1H27.1a1.65,1.65,0,1,0,0,3.29Z"/>
                     <path d="M25.45,28.52a1.65,1.65,0,0,0-1.65-1.65H17.21l7.91-10.55a1.65,1.65,0,0,0-1.32-2.64H13.91a1.65,1.65,0,0,0,0,3.3H20.5L12.59,27.53a1.64,1.64,0,0,0-.16,1.73,1.67,1.67,0,0,0,1.48.91H23.8A1.65,1.65,0,0,0,25.45,28.52Z"/>
                     <path d="M33.7,10.38h3.51l-4.89,7.33a1.68,1.68,0,0,0-.08,1.69,1.65,1.65,0,0,0,1.46.87h6.59a1.65,1.65,0,0,0,0-3.3H36.78l4.88-7.33A1.65,1.65,0,0,0,41.75,8a1.67,1.67,0,0,0-1.46-.87H33.7a1.65,1.65,0,0,0,0,3.3Z"/>
                  </svg>
               </CardMedia>
               <CardContent className={classes.CardContent}>
                  <Typography variant="h3" color="textSecondary" className={classes.title}>Sleep More</Typography>
                  <Typography variant="body1" color="textSecondary" className={classes.text}>Through a Bluetooth connection, the Welltot sensor connects to your mobile phone, so you do not need to get out of bed or wake your sleeping child.</Typography>
               </CardContent>
            </Card>
         </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <Box>
            <Card className={classes.card}>
               <CardMedia className={classes.media}>
                  <svg id="know-the-fever" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                     <path d="M52.91,91.14a18,18,0,0,0,9.22-33.39V18.9a9.22,9.22,0,0,0-18.44,0V57.75a18,18,0,0,0,9.22,33.39ZM46.67,62l2.15-1.19V18.9a4.09,4.09,0,0,1,8.18,0V60.76L59.15,62a12.83,12.83,0,1,1-12.48,0Z"/>
                     <path d="M52.91,84.08a10.91,10.91,0,0,0,5.3-20.45l-2.64-1.47a1,1,0,0,1-.49-.84V18.9a2.14,2.14,0,0,0-2.17-2.16,2.17,2.17,0,0,0-2.17,2.16V61.32a1,1,0,0,1-.49.84l-2.64,1.47a10.91,10.91,0,0,0,5.3,20.45Z"/>
                     <rect x="66.3" y="22.22" width="5.36" height="1.92"/>
                     <rect x="66.3" y="14.81" width="9.21" height="1.92"/>
                     <rect x="66.3" y="29.63" width="9.21" height="1.92"/>
                     <rect x="66.3" y="37.04" width="6.65" height="1.92"/>
                     <rect x="66.3" y="44.44" width="5.36" height="1.92"/>
                     <rect x="66.3" y="51.85" width="9.21" height="1.92"/>
                  </svg>
               </CardMedia>
               <CardContent className={classes.CardContent}>
                  <Typography variant="h3" color="textSecondary" className={classes.title}>Know the Fever</Typography>
                  <Typography variant="body1" color="textSecondary" className={classes.text}>Whether it spikes at night or does not respond to the Tylenol, continuous temperature tracking allows you to see the trends, spikes, and dips.</Typography>
               </CardContent>
            </Card>
         </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <Box>
            <Card className={classes.card}>
               <CardMedia className={classes.media}>
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                     <path d="M50,88.93A38.93,38.93,0,1,1,88.93,50,39,39,0,0,1,50,88.93Zm0-73.86A34.93,34.93,0,1,0,84.93,50,35,35,0,0,0,50,15.07Z"/>
                     <path d="M45.53,68.23,33.46,56.16a6,6,0,1,1,8.48-8.48l3.59,3.58L62.35,34.44a20.07,20.07,0,1,0,6.77,10.2Z"/>
                     <path d="M45.53,66.11l-11-11a4.5,4.5,0,1,1,6.36-6.36l4.65,4.64L66.7,32.22a4.5,4.5,0,0,1,6.36,6.36Z"/>
                  </svg>
               </CardMedia>
               <CardContent className={classes.CardContent}>
                  <Typography variant="h3" color="textSecondary" className={classes.title}>Accurate & Simple</Typography>
                  <Typography variant="body1" color="textSecondary" className={classes.text}>Tested to be accurate within 0.1°C (0.2°F),the Welltot sensor is simple to connect to your phone, lasting 6-months with no charging needed.</Typography>
               </CardContent>
            </Card>
         </Box>
      </Grid>
      </Grid>
   </Container>
   {/* 
   <div className="whyContainer sleep-more">
      <div className="iconSpot">
         <svg id="sleep-more" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M63.1,20.34a1.65,1.65,0,0,0-1.94,2.34A30.91,30.91,0,0,1,64.65,37,31.31,31.31,0,0,1,24.28,67a1.66,1.66,0,0,0-1.75.52,1.64,1.64,0,0,0-.19,1.81,34.62,34.62,0,1,0,40.76-49Zm-10,64.48a31.18,31.18,0,0,1-25.9-13.74,33.87,33.87,0,0,0,6.11.55A34.66,34.66,0,0,0,68,37a34,34,0,0,0-2.22-12.17,31.32,31.32,0,0,1-12.62,60Z"/>
            <path d="M27.1,38.65h13L25.83,55.74a1.65,1.65,0,0,0,1.27,2.7H43.59a1.65,1.65,0,1,0,0-3.3h-13L44.86,38.06a1.62,1.62,0,0,0,.22-1.75,1.64,1.64,0,0,0-1.49-1H27.1a1.65,1.65,0,1,0,0,3.29Z"/>
            <path d="M25.45,28.52a1.65,1.65,0,0,0-1.65-1.65H17.21l7.91-10.55a1.65,1.65,0,0,0-1.32-2.64H13.91a1.65,1.65,0,0,0,0,3.3H20.5L12.59,27.53a1.64,1.64,0,0,0-.16,1.73,1.67,1.67,0,0,0,1.48.91H23.8A1.65,1.65,0,0,0,25.45,28.52Z"/>
            <path d="M33.7,10.38h3.51l-4.89,7.33a1.68,1.68,0,0,0-.08,1.69,1.65,1.65,0,0,0,1.46.87h6.59a1.65,1.65,0,0,0,0-3.3H36.78l4.88-7.33A1.65,1.65,0,0,0,41.75,8a1.67,1.67,0,0,0-1.46-.87H33.7a1.65,1.65,0,0,0,0,3.3Z"/>
         </svg>
      </div>
      <div className="copy">
         <h3>Sleep More</h3>
         <p>Through a Bluetooth connection, the Welltot sensor connects to your mobile phone, so you do not need to get out of bed or wake your sleeping child.</p>
      </div>
   </div>
   <div className="whyContainer know-the-fever">
      <div className="iconSpot">
         <svg id="know-the-fever" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M52.91,91.14a18,18,0,0,0,9.22-33.39V18.9a9.22,9.22,0,0,0-18.44,0V57.75a18,18,0,0,0,9.22,33.39ZM46.67,62l2.15-1.19V18.9a4.09,4.09,0,0,1,8.18,0V60.76L59.15,62a12.83,12.83,0,1,1-12.48,0Z"/>
            <path d="M52.91,84.08a10.91,10.91,0,0,0,5.3-20.45l-2.64-1.47a1,1,0,0,1-.49-.84V18.9a2.14,2.14,0,0,0-2.17-2.16,2.17,2.17,0,0,0-2.17,2.16V61.32a1,1,0,0,1-.49.84l-2.64,1.47a10.91,10.91,0,0,0,5.3,20.45Z"/>
            <rect x="66.3" y="22.22" width="5.36" height="1.92"/>
            <rect x="66.3" y="14.81" width="9.21" height="1.92"/>
            <rect x="66.3" y="29.63" width="9.21" height="1.92"/>
            <rect x="66.3" y="37.04" width="6.65" height="1.92"/>
            <rect x="66.3" y="44.44" width="5.36" height="1.92"/>
            <rect x="66.3" y="51.85" width="9.21" height="1.92"/>
         </svg>
      </div>
      <div className="copy">
         <h3>Know the Fever</h3>
         <p>Whether it spikes at night or does not respond to the Tylenol, continuous temperature tracking allows you to see the trends, spikes, and dips.</p>
      </div>
   </div>
   <div className="whyContainer accurate-simple">
      <div className="iconSpot">
         <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50,88.93A38.93,38.93,0,1,1,88.93,50,39,39,0,0,1,50,88.93Zm0-73.86A34.93,34.93,0,1,0,84.93,50,35,35,0,0,0,50,15.07Z"/>
            <path d="M45.53,68.23,33.46,56.16a6,6,0,1,1,8.48-8.48l3.59,3.58L62.35,34.44a20.07,20.07,0,1,0,6.77,10.2Z"/>
            <path d="M45.53,66.11l-11-11a4.5,4.5,0,1,1,6.36-6.36l4.65,4.64L66.7,32.22a4.5,4.5,0,0,1,6.36,6.36Z"/>
         </svg>
      </div>
      <div className="copy">
         <h3>Accurate &amp; Simple</h3>
         <p>Tested to be accurate within 0.1°C (0.2°F),the Welltot sensor is simple to connect to your phone, lasting 6-months with no charging needed.</p>
      </div>
   </div>
   */}
</div>
)
}
export default SectionWhyChooseWelltot

