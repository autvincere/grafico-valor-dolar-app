import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import moment from 'moment'
import Chart from '../Chart'
import Resultado from 'components/Resultado';
import { FinancialContext } from '../../contexts/FinancialContext'

const Dolar = () => {
     const { fetchUnit, fetchYear } = useContext(FinancialContext)

     const getValue = (state) => {
          const valor = state.map(value => parseInt(`${value.Valor}`))
          const fecha = state.map(value => moment(value.Fecha).format('D MMMM'))
          return [ valor, fecha ]
          // console.log(fecha);
          // console.log(fecha[0]);
     }
     // console.log(fetchYear);
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
                         fetchUnit ? fetchUnit.map((unit, i) => {
                              const { Valor, Fecha } = unit;
                              return (
                                   <Resultado key={i} valor={Valor} fecha={Fecha} />
                              )
                         }) : <p>No hay nada</p>
                    }
               </Box>

               <Box mt={4}>
                    {
                         fetchYear ? () => {
                              const [valor, fecha] = getValue(fetchYear)
                              return (
                                   <Box mt={8}>
                                        <Chart valor={valor} fecha={fecha} />
                                   </Box>
                              )
                         }
                         : <p>No hay nada</p>
                    }
               </Box>

          </Grid>
     )
}

export default Dolar
