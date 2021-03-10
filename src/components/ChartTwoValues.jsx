import React,{useEffect} from 'react'
import Box from '@material-ui/core/Box';
// import { dateSeparator } from "../Utils";

const ChartTwoValues = ({ dateOne, dateTwo, getDates, dateRange, setDateRange }) => {

     // const { dateOne } = prop     nst [dateRange, setDateRange] = useState(['caca']);
     // console.log(props);
     // if (dateOne && dateTwo) {
     //      const [yearStart, monthStart, dayStart] = dateSeparator(dateOne)
     //      const [yearEnd, monthEnd, dayEnd] = dateSeparator(dateTwo)
     //      getDates('dolar', yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd)
     // }

     
     
     // useEffect(
     //      () => {

     //           if (dateOne && dateTwo) {
     //                const [yearStart, monthStart, dayStart] = dateSeparator(dateOne)
     //                const [yearEnd, monthEnd, dayEnd] = dateSeparator(dateTwo)
     //               getDates('dolar', yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd)
     //           }
     //      },
     //      [dateOne,dateTwo,getDates]
     // );


     return (
          <Box mt={8}>
               ChartTwoValues
               {/* { dateOne} {dateTwo} */}
               {/* {
                    dateRange && console.log('existe')
               } */}
          </Box>
     )
}

export default ChartTwoValues
