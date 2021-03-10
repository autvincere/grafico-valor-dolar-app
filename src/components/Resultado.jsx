import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Grid from '@material-ui/core/Grid'

import { firstLetterCapital } from '../Utils'
import 'moment/locale/es'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
     },
     paper: {
          maxWidth: '500px',
          padding: theme.spacing(3),
          textAlign: 'center',
          color: theme.palette.text.secondary,
     },
     textDescription: {
          fontSize: '1.2em',
     },
}));

const Resultado = ({ valor, fecha }) => {
     const classes = useStyles();
     const date = fecha;
     const formatSpanish = moment(date).format('dddd LL')
     return (

          <Paper className={classes.paper} elevation={3} >
                
               <Typography className={classes.title} color="textSecondary" variant="h5">
                    Valor del Día: <Box component="span" className={classes.date}>{firstLetterCapital(formatSpanish)}</Box>
               </Typography>
               <hr />
               <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="nowrap"
               >
                    <Typography color="textSecondary" variant="h5">
                         1 USD
                    </Typography>
                    <ArrowRightAltIcon />
                    <Typography color="textSecondary" variant="h5">
                         {valor} 
                    </Typography>
                    <Box component="span" className={classes.textDescription} ml={0.5}>Pesos chilenos</Box>
               </Grid>
               <hr />
          </Paper>

     )
}

export default Resultado

