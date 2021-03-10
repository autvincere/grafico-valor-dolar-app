import React, { createContext, useState, useEffect } from "react";
import { dayDateValue, yearDateValue } from "../constants/index";

export const FinancialContext = createContext();

const FinancialContextProvider = ({ children }) => {

     // const [prueba, setPrueba] = useState({
     //      Moneda: 'bitcoin',
     //      valor: 7750
     // })
     const [doneFetchUnit, setDoneFetchUnit] = useState(false);
     const [doneFetchYear, setDoneFetchYear] = useState(false);
     const [fetchUnit, setFetchUnit] = useState([]);
     
     const [fetchYear, setFetchYear] = useState([]);

     const getFinancialUnit = async() => {
          try {
               const res = await fetch(dayDateValue('dolar'))
               const data = await res.json()
               setFetchUnit(data.Dolares)
               setDoneFetchUnit(true);

          } catch (error) {
               console.log(error)
          }
          
     }
     
     const getFinancialUnitYear = async () => {
          const d = new Date()
          const actualYear = d.getFullYear()
          
          try {
               const res = await fetch(yearDateValue('dolar',actualYear))
               const data = await res.json()
               setFetchYear(data.Dolares)
               setDoneFetchYear(true);

          } catch (error) {
               console.log(error);
          }

     }
     
     useEffect(
          () => getFinancialUnit(),
          []
     );
     useEffect(() => getFinancialUnitYear(),[])
     
  return (
     <FinancialContext.Provider value={{ fetchUnit, fetchYear,doneFetchUnit,doneFetchYear }}>
     { children }
     </FinancialContext.Provider>
  )
};

export default FinancialContextProvider;
