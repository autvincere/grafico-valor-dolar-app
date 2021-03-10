import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
     },
     titleCenter: {
          justifyContent: 'center',
     },
     toolbar: {
          minHeight: '48px',
          marginTop: '30px',
          backgroundColor: theme.palette.primary.main,
          color: '#ffffff'
     },
     link: {
          color: '#ffffff'
     }
}));

const Footer = () => {
     const classes = useStyles();
     return (

          <div className={classes.root}>
                    <Toolbar className={`${classes.titleCenter} ${classes.toolbar}`}>
                         Made with
                         <span role="img" aria-label="heart">
                         &nbsp;🖤&nbsp;
                         </span>
                         by&nbsp;
                         <a
                              href="https://www.linkedin.com/in/eduardo-palma-lopez/"
                              rel="noopener noreferrer"
                              target="_blank"
                              className={classes.link}
                         >
                              <span> &lt;&gt;</span> <span>Eduardo Palma</span>
                         </a>
                    </Toolbar>
          </div>
     )
}


export default Footer
