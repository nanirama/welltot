import React from 'react';
import * as styles from './Header.module.scss';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from '@material-ui/core/Container';

const HeaderFaq: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const useStyles = makeStyles({
    subtitle: {
      fontSize:'1.3rem',
      },
      container:{
        width:'1157px',
        padding:'0 15px',
    },
    faq:{
      textAlign:'center',
    },
});
    const classes = useStyles();
  return (
    <div className={classes.faq}>
    <Container maxWidth="md" className={classes.container}>
    <div {...props}>
      <Typography variant="h2" className={classes.title} color="textSecondary">Tot Life</Typography>
      <Typography variant="h4" className={classes.subtitle} color="textSecondary">A Welltot Magazine FAQ</Typography>
    </div>
    </Container>
    </div>
  );
};

export default HeaderFaq;
