import React, { useContext, useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DateModule from './DateModule'
import { ValueByDatesDolarContext } from '../contexts/ValueByDatesDolarContext'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import moment from 'moment'
import 'moment/locale/es'
import Message from './Common/Message';
import ChartTwoValues from './ChartTwoValues';


const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
          marginTop: '30px'
     },
     paper: {
          height: 140,
          width: 100,
     },
     control: {
          padding: theme.spacing(2),
     },
}));

const ValueByDates = () => {

     const classes = useStyles();
     const [dateOne, setDateOne] = useState('')
     const [dateTwo, setDateTwo] = useState('')
     const [chartExists, setChartExists ] = useState(false)

     const { dates } = useContext(ValueByDatesDolarContext)
     // console.log(dates);

     const handleChangeDate = (e) => {

          // setDateOne('')
          // setDateTwo('')
          // console.log(e.target.id);
          if (e.target.id === 'dateOne') {
               setDateOne({
                    ...dateOne,
                    [e.target.name]: e.target.value,
               })
          } else if (e.target.id === 'dateTwo') {
               setDateTwo({
                    ...dateTwo,
                    [e.target.name]: e.target.value,
               })
          } else {
               console.log('no llego');
               return
          }
          
          // compareDates(dateOne,dateTwo )
          // console.log(dateOne);
          // console.log(dateTwo);
     };

     const compareDates = (dateOne, dateTwo) => {
          
          const one = moment(dateOne.date)
          const two = moment(dateTwo.date)
          const difference = two.diff(one,'days')
          console.log(difference);

          if (difference > 0) {
               setChartExists(true) 
          }
          
          // if (difference <= 0) {
          //      setChartExists(false)
          //      return
          // }
          // setChartExists(true)
     }
     useEffect(() => {
          compareDates(dateOne,dateTwo ) 
     }
          , [dateOne, dateTwo])
     
     return (
          <Grid container className={classes.root} spacing={1}>
               <Grid item xs={12}>
                    <Grid container justify="center">
                         <Box mr={6}>
                              <DateModule handleChangeDate={handleChangeDate} id="dateOne" />
                         </Box>
                         <Box ml={6}>
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

                             {/* {
                              dateOne && dateTwo ?  <ChartTwoValues /> : <Message message="Por favor, ingrese las fechas de su consulta"/>
                              } */}
                              {
                                   chartExists === true ? <ChartTwoValues dateOne={dateOne.date} dateTwo={ dateTwo.date} /> : <Message message="Por favor, ingrese las fechas de su consulta"/>
                              }
                     {/* compareDates(dateOne,dateTwo ) */}
                              {/* chartExists ? console.log('aca va el grafico') : <Message message="Por favor, ingrese las fechas de su consulta"/> */}
                        
                         </Grid>
                        

                         {/* {  
                              // !dateTwo && !dateOne ? (console.log('Por favor llena los campos'))
                              //      : (dateTwo <= dateOne ? console.log('ingrese una fecha mayor')
                              //           : console.log('se carga grafico'))
                         } */}
                    </Grid>
               </Grid>

          </Grid>
     )
}

export default ValueByDates
