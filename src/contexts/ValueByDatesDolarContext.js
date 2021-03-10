import React, { createContext, useState, useEffect } from "react";
import { twoDatesValue } from "../constants/index";
import { dateSeparator } from "../Utils";
import moment from "moment";
import "moment/locale/es";

export const ValueByDatesDolarContext = createContext();

const ValueByDatesDolarContextProvider = ({ children }) => {
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");
  const [doneFetchValues, setDoneFetchValues] = useState(false);
     const [chartExists, setChartExists] = useState(false);
     const [dateRange,setDateRange] = useState([])

  const handleChangeDate = (e) => {
    if (e.target.id === "dateOne") {
      setDateOne({
        ...dateOne,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.id === "dateTwo") {
      setDateTwo({
        ...dateTwo,
        [e.target.name]: e.target.value,
      });
    } else {
      console.log("no llego");
      return;
    }

    // compareDates(dateOne,dateTwo )
    // console.log(dateOne);
    // console.log(dateTwo);
  };
     
  const getDates = async (dolar, yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd) => {
     try {
          const res = await fetch(twoDatesValue(dolar, yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd))
          const data = await res.json()
          setDateRange(data.Dolares)
          setDoneFetchValues(true);
          console.log(data.Dolares)

     } catch (error) {
          console.log(error)
     }
}

useEffect(() => {
  if (dateOne && dateTwo) {

      const one = moment(dateOne.date);
      const two = moment(dateTwo.date);
      const difference = two.diff(one, "days");
  
      if (difference > 0) {
        setChartExists(true)
        const [yearStart, monthStart, dayStart] = dateSeparator(dateOne.date)
        const [yearEnd, monthEnd, dayEnd] = dateSeparator(dateTwo.date)
        getDates('dolar', yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd)
      }
   }
}, [dateOne, dateTwo]);

  return (
    <ValueByDatesDolarContext.Provider
      value={{ doneFetchValues, chartExists, handleChangeDate,getDates,dateRange }}
    >
      {children}
    </ValueByDatesDolarContext.Provider>
  )
};

export default ValueByDatesDolarContextProvider;
