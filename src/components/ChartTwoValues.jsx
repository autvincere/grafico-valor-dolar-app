import React from 'react'
import Box from '@material-ui/core/Box';
import Chart from './Chart'
import Averages from './Common/Averages';
import ProgressBar from './Common/ProgressBar';

import { getValue } from '../Utils'

const ChartTwoValues = ({ dateRange, doneFetchValues }) => {

     const [valor, fecha] = getValue(dateRange)

     return (
          doneFetchValues ?
               (dateRange.length ?
                    <>
                         <Box mt={8}>
                              <Chart valor={valor} fecha={fecha} />
                         </Box>
                         <Box mt={8}>
                              <Averages valor={valor}/>
                         </Box>
                    </>
                    : <p>No hay nada</p>)
               : <ProgressBar />
     )
}

export default ChartTwoValues
