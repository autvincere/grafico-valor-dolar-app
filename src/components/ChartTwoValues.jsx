import React from 'react'
import Box from '@material-ui/core/Box';

const ChartTwoValues = ({ dateOne,dateTwo }) => {
     // console.log(props);
     // const { dateOne } = props
     return (
          <Box mt={8}>
               ChartTwoValues
               {/* { dateOne } */}
               { dateOne } {dateTwo }
          </Box>
     )
}

export default ChartTwoValues
