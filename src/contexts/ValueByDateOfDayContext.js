import React, { createContext, useState, useEffect } from "react";
import { dayDateValue, oneDateValue } from "../constants/index";

export const ValueByDateOfDayContext = createContext();

const ValueByDateOfDayContextProvider = ({ children }) => {

     const [doneFetch, setDoneFetch] = useState(false);

     const [fetchUnit, setFetchUnit] = useState([]);
     
     const [fetchYear, setFetchYear] = useState([]);

     const getFinancialUnit = async() => {
          try {
               const res = await fetch(dayDateValue('dolar'))
               const data = await res.json()
               setDoneFetch(true)
               setFetchUnit(data.Dolares)

          } catch (error) {
               setDoneFetch(false)
               console.log(error)
          }
          
     }
     
     const getFinancialUnitYear = async () => {
          
          try {
               const res = await fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar/2021?apikey=bcab1f6493785dc221a83db5d7cc6d3cbd6525d0&formato=json')
               const data = await res.json()
               console.log(data.Mensaje)
               setDoneFetch(true)
               setFetchYear(data.Dolares)

          } catch (error) {
               setDoneFetch(false)
               console.log(error.Mensaje);
          }

     }
     // const getFinancialUnit = () => {
     //      fetch(dayDateValue('dolar'))
     //      // fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=bcab1f6493785dc221a83db5d7cc6d3cbd6525d0&formato=json')
     //           .then( res => res.json())
     //           .then(data => {
     //                // setDoneFetch(true)
     //                setFetchUnit(data.Dolares)
     //           })
     //           .catch( err => console.log(err))    
     // }
     
     useEffect(
          () => getFinancialUnit(),
          []
     );
     useEffect(() => getFinancialUnitYear(),[])
     
     // useEffect(() => {
     //           return () => {
     //                getFinancialUnit();
     //           };
     //         }, []);

  return (
     <ValueByDateOfDayContext.Provider value={{ fetchUnit, fetchYear, doneFetch }}>
     { children }
     </ValueByDateOfDayContext.Provider>
  )
};

export default ValueByDateOfDayContextProvider;

