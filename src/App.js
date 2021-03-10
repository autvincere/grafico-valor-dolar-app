import React from "react";
import "./assets/css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "components/Common/Header";
import ValueByDateOfDayContextProvider from "./contexts/ValueByDateOfDayContext";
import ValueByDatesProvider from './contexts/ValueByDatesDolarContext'

import ValueByDateOfDay from './components/valueByDate'
import ValueByDates from "components/valueByDates";

import Footer from "components/Common/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <ValueByDateOfDayContextProvider>
            <ValueByDateOfDay />
          </ValueByDateOfDayContextProvider>
        </Route>
        <Route path="/valor-por-periodos">
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
