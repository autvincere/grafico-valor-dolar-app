import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { getValue } from '../../Utils'
import Chart from '../Common/Chart'
import Resultado from 'components/Common/Resultado';
import { ValueByDateOfDayContext } from '../../contexts/ValueByDateOfDayContext'
import ProgressBar from '../Common/ProgressBar';
import Averages from '../Common/Averages';

const ValueByDateOfDay = () => {
     const { fetchUnit, fetchYear, doneFetchUnit, doneFetchYear } = useContext(ValueByDateOfDayContext)

     return (
          <Grid
               mt={20}
               container
               spacing={1}
               direction="column"
               justify="center"
               alignItems="center"
               alignContent="center"
               wrap="nowrap"
          >
               <Box mt={4}>
                    {
                         doneFetchUnit === true ?
                              (fetchUnit.length ? fetchUnit.map((unit, i) => {
                                   // console.log(fetchUnit.length);
                                   const { Valor, Fecha } = unit
                                   return (
                                        <Resultado key={i} valor={Valor} fecha={Fecha} />
                                   )
                              }) : <p>No hay nada</p>)
                              : <ProgressBar />
                    }
               </Box>

               <Box mt={4}>
                    {
                         doneFetchYear === true ?
                              (
                                   fetchYear.length ? () => {
                                   const [valor, fecha] = getValue(fetchYear)
                                   return (
                                        <>
                                             <Box mt={8}>
                                                  <Chart valor={valor} fecha={fecha} />
                                             </Box>

                                             <Box mt={8}>
                                                  <Averages valor={valor}/>
                                             </Box>
                                        </>
                                   )
                              } : <p>No hay nada</p>)
                              : <ProgressBar />

                    }
               </Box>

          </Grid>
     )
}

export default ValueByDateOfDay
