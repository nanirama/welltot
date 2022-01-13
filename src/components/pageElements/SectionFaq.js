import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const SectionFaq = ({data})=>{
    const useStyles = makeStyles({
        container:{
            width:'1157px',
            padding:'0 15px',
        },
        title:{
            textAlign:'center',
        },
        
        });
        const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h2" color="textsecondary" className={classes.title}>FAQ</Typography>
        </Container>
    )
}
export default SectionFaq