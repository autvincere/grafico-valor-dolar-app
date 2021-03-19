import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DateModule from '../Common/DateModule'
import { ValueByDatesDolarContext } from '../../contexts/ValueByDatesDolarContext'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Message from '../Common/Message';
import ChartTwoValues from './ChartTwoValues';

const useStyles = makeStyles((theme) => ({
     root: {
          // flexGrow: 1,
          marginTop: '30px'
     },
     boxChartOne: {
          marginRight: '48px',
          [theme.breakpoints.down('md')]: {
               marginRight: '0px',
             }
     },
     boxChartTwo: {
          marginLeft: '48px',
          [theme.breakpoints.down('md')]: {
               marginLeft: '0px',
               marginTop:'30px',
             }
     },
     control: {
          padding: theme.spacing(2),
     },
}));

const ValueByDates = () => {

     const classes = useStyles();
     const { doneFetchValues, chartExists, handleChangeDate, dateRange } = useContext(ValueByDatesDolarContext)

     return (
          <Grid container className={classes.root} spacing={1}>
               <Grid item xs={12}>
                    <Grid container justify="center">
                         <Box className={classes.boxChartOne}>
                              <DateModule handleChangeDate={handleChangeDate} id="dateOne" />
                         </Box>
                         <Box className={classes.boxChartTwo}>
                              <DateModule handleChangeDate={handleChangeDate} id="dateTwo" />
                         </Box>
                         <Grid
                              container
                              spacing={1}
                              direction="row"
                              justify="center"
                              alignItems="center"
                              alignContent="center"
                              wrap="nowrap"
                         >

                       
                              {
                                   chartExists === true ? <ChartTwoValues dateRange={dateRange} doneFetchValues={ doneFetchValues}/> : <Message message="Por favor, ingrese las fechas de su consulta" />
                              }
                          

                         </Grid>

                    </Grid>
               </Grid>

          </Grid>
     )
}

export default ValueByDates
