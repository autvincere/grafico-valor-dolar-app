import React from "react";
import "./assets/css/styles.css";
// import DateModule from './components/DateModule';
import FinancialContextProvider from "./contexts/FinancialContext";
import Dolar from "components/Dolar";
import Header from "components/Common/Header";
import BarChart from './components/BarChart';

const App = () => {
  return (
    <>
      <Header />
      <FinancialContextProvider>
        <Dolar />
        {/* <DateModule handleChangeDate={handleChangeDate}/> */}
       {/* <BarChart /> */}
      </FinancialContextProvider>
    </>
  );
};

export default App;
