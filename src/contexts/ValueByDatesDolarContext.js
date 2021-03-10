import React, { createContext, useState, useEffect } from "react";
import { twoDatesValue } from "../constants/index";
import { dateSeparator } from "../Utils";
import moment from "moment";
import "moment/locale/es";

export const ValueByDatesDolarContext = createContext();

const ValueByDatesDolarContextProvider = ({ children }) => {
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");
  const [doneFetch, setDoneFetch] = useState(false);
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
 


  useEffect(() => {
    if (dateOne && dateTwo) {
     compareDates(dateOne, dateTwo);
    }
  }, [dateOne, dateTwo]);
     
  const compareDates = (dateOne, dateTwo) => {
     const one = moment(dateOne.date);
     const two = moment(dateTwo.date);
     const difference = two.diff(one, "days");
 
     if (difference > 0) {
       setChartExists(true);
     }
  }
  const getDates = async (dolar, yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd) => {
     try {
          const res = await fetch(twoDatesValue(dolar, yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd))
          const data = await res.json()
          setDateRange(data.Dolares)
          setDoneFetch(true);
          console.log(data.Dolares)

     } catch (error) {
          console.log(error)
     }
}

  return (
    <ValueByDatesDolarContext.Provider
      value={{ dateOne, dateTwo, doneFetch, chartExists, handleChangeDate,getDates,dateRange,setDateRange }}
    >
      {children}
    </ValueByDatesDolarContext.Provider>
  );
};

export default ValueByDatesDolarContextProvider;
