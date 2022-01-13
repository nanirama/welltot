import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from "../components/layouts/LayoutMain"
import "../styles/pageHelpCenter.scss"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const HelpCenterPage = (props) => {
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
            <title>Help Center</title>
            <meta
                name="description"
                content="Help center"
            />
            <bodyAttributes
                className="theme1"
            />
        </Helmet>

        <Container maxWidth="lg" className={classes.container}>
        <div className="container-helpCenter">

            <div className="helpCenter">
                <Typography variant="h1" color="textSecondary" className={classes.heading}>Help Center</Typography>

            </div>

        </div>
        </Container>

    </LayoutMain>
)
}
export default HelpCenterPage



