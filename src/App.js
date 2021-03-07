import React from "react";
import "./assets/css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import DateModule from './components/DateModule';
import Header from "components/Common/Header";
import FinancialContextProvider from "./contexts/FinancialContext";
import Dolar from "components/Dolar";
import ValueByDatesProvider from './contexts/ValueByDatesDolarContext'
import ValueByDateOfDay from './components/ValueByDateOfDay'
import ValueByDates from "components/ValueByDates";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <FinancialContextProvider>
            <ValueByDateOfDay />
          </FinancialContextProvider>
        </Route>
        <Route path="/valor-por-fechas">
          <ValueByDatesProvider>
          <ValueByDates />
          </ValueByDatesProvider>
        </Route>
      </Switch>
      {/* <DateModule handleChangeDate={handleChangeDate}/> */}
    </BrowserRouter>
  );
};

export default App;
