import React from "react";
import "./assets/css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import DateModule from './components/DateModule';
import Header from "components/Common/Header";
import FinancialContextProvider from "./contexts/FinancialContext";
import ValueByDatesProvider from './contexts/ValueByDatesDolarContext'
import ValueByDateOfDay from './components/ValueByDateOfDay'
import ValueByDates from "components/ValueByDates";
import Footer from "components/Common/Footer";

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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
