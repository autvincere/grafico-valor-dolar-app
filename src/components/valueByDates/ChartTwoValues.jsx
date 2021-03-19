import React from 'react'
import Box from '@material-ui/core/Box';
import Chart from '../Common/Chart.jsx'
import Averages from '../Common/Averages';
import ProgressBar from '../Common/ProgressBar';
import Grid from '@material-ui/core/Grid';
import { getValue } from '../../Utils'

const ChartTwoValues = ({ dateRange, doneFetchValues }) => {

     const [valor, fecha] = getValue(dateRange)

     return (
          doneFetchValues ?
               (dateRange.length ?
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
                         <Box mt={8}>
                              <Chart valor={valor} fecha={fecha} />
                         </Box>
                         <Box mt={8}>
                              <Averages valor={valor} />
                         </Box>
                    </Grid>
                    : <p>No hay nada</p>)
               : <ProgressBar />
     )
}

export default ChartTwoValues
