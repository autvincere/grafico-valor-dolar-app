import React, { createContext, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';




export const ValueByDatesDolarContext = createContext();

const ValueByDatesDolarContextProvider = ({ children }) => {

     const [ dates, setDates ] = useState('');

const handleChangeDate = (e) => {
     console.log(e.target.value);
     setDates({
       ...dates,
       [e.target.name]: e.target.value,
     });
};
     return (
          <ValueByDatesDolarContext.Provider value={{ dates,handleChangeDate }}>
               { children }
          </ValueByDatesDolarContext.Provider>
     
     )
}

export default ValueByDatesDolarContextProvider
