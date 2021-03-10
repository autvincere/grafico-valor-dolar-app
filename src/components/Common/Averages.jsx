import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import { calculateAverage, calculateMaxValue, calculateMinValue } from '../../Utils'

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
const Averages = ({ valor }) => {
     const classes = useStyles();
     return (
          <Paper className={classes.paper} elevation={3} >
                <Typography className={classes.title} color="textSecondary" variant="h5">
                    El Valor Promedio es de : <Box component="span" className={classes.date}>${calculateAverage(valor)}</Box>
               </Typography>

               <Typography className={classes.title} color="textSecondary" variant="h6">
                    El Valor Más alto es de : <Box component="span" className={classes.date}>${calculateMaxValue(valor)}</Box>
               </Typography>

               <Typography className={classes.title} color="textSecondary" variant="h6">
                    El Valor Mínimo es de : <Box component="span" className={classes.date}>${calculateMinValue(valor)}</Box>
               </Typography>
          </Paper>
     )
}

export default Averages
