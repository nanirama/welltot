import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from "../components/layouts/LayoutMain"
import "../styles/pageGettingStarted.scss"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const GettingStartedPage = (props) => {
    const useStyles = makeStyles({
        container:{
            maxWidth: '1157px',
            padding:'0 15px',
        },
        heading:{
          fontSize:'2rem',
        },
    });
        const classes = useStyles();
        return(
    <LayoutMain>
        <Helmet>
            <title>Getting Started</title>
            <meta name="description" content="Getting Started" />
            <bodyAttributes className="theme1" />
        </Helmet>
        <Container maxWidth="lg" className={classes.container}>
        <div className="container-gettingStarted">
            <div className="gettingStarted">
                <Typography variant="h1" color="textSecondary" className={classes.heading}>Getting Started</Typography>
            </div>
        </div>
        </Container>
    </LayoutMain>
        )
        }

export default GettingStartedPage
