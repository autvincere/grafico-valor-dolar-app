import React, { createContext, useState, useEffect } from "react";
import { dayDateValue, oneDateValue } from "../constants/index";

export const FinancialContext = createContext();

// export const handleChangeDate = (e) => {
//   console.log(e.target.value);
//   setDates({
//     ...dates,
//     [e.target.name]: e.target.value,
//   });
// };

const FinancialContextProvider = ({ children }) => {

     const [prueba, setPrueba] = useState({
          Moneda: 'bitcoin',
          valor: 7750
     })
     const [doneFetch, setDoneFetch] = useState();

     const [fetchUnit, setFetchUnit] = useState([]);
     
     const [fetchYear, setFetchYear] = useState([]);

     const getFinancialUnit = async() => {
          try {
               const res = await fetch(dayDateValue('dolar'))
               const data = await res.json()
               setFetchUnit(data.Dolares)

          } catch (error) {
               console.log(error)
          }
          
     }
     
     const getFinancialUnitYear = async () => {
          
          try {
               const res = await fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar/2021?apikey=bcab1f6493785dc221a83db5d7cc6d3cbd6525d0&formato=json')
               const data = await res.json()
               setFetchYear(data.Dolares)

          } catch (error) {
               console.log(error);
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
     <FinancialContext.Provider value={{ fetchUnit, fetchYear }}>
     { children }
     </FinancialContext.Provider>
  )
};

export default FinancialContextProvider;
