import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { ReactComponent as SVGDolar } from '../../assets/icons/dolar.svg'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
// import Navbar from '../Common/Navbar'
import Navbar from '../Common/Navbar'


const useStyles = makeStyles((theme) => ({
     root: {
          // flexGrow: 1,
     },
     titleCenter: {
          justifyContent: 'center',
     },
     Dolar: {
          marginLeft: '11px',
          border: '3px solid white',
          borderRadius: '5px',
          width: '53px'
     },
}));

const Header = () => {

     const classes = useStyles();

     return (
          <div className={classes.root}>
               <AppBar position="relative" color="primary">
                    <Toolbar className={classes.titleCenter}>
                         <Typography variant="h6">Valor - Dolar</Typography>
                         <SVGDolar className={classes.Dolar} />
                    </Toolbar>
               </AppBar>
               <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="nowrap"

               >
                    <Box mt={4} mb={4}>
                         <Navbar />
                    </Box>
               </Grid>
          </div>

     )
}

export default Header
