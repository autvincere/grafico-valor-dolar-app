import React from "react";
import "./assets/css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import DateModule from './components/DateModule';
import FinancialContextProvider from "./contexts/FinancialContext";
import Dolar from "components/Dolar";
import Header from "components/Common/Header";
import BarChart from "./components/BarChart";
import ValueByDatesDolar from "components/ValueByDatesDolar";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <FinancialContextProvider>
            <Dolar />
          </FinancialContextProvider>
        </Route>
        <Route path="/valor-por-fechas">
          <ValueByDatesDolar />
        </Route>
      </Switch>
      {/* <DateModule handleChangeDate={handleChangeDate}/> */}
      {/* <BarChart /> */}
    </BrowserRouter>
  );
};

export default App;
