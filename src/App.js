
import React,{useEffect} from 'react';
import './App.css';
// import DateModule from './components/DateModule';
import FinancialContextProvider from "./contexts/FinancialContext";
import Dolar from 'components/Dolar';
// import BarChart from './components/BarChart';

const App = () => {

const getDolar = async() => {
  try {
    const res = await fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar/2010/01/dias/05?apikey=bcab1f6493785dc221a83db5d7cc6d3cbd6525d0&formato=json')
    const data = await res.json()
    console.log(data.Dolares[0]);

  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    // getDolar()
  },[])
  
  return (
    <FinancialContextProvider>
      <Dolar />
   {/* <DateModule handleChangeDate={handleChangeDate}/> */}
     {/* <BarChart /> */}
    </FinancialContextProvider> 
  );
}

export default App;
