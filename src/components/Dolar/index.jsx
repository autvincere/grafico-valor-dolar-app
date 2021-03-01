import React, { useContext, Fragment } from 'react';
import { FinancialContext } from '../../contexts/FinancialContext'

const Dolar = () => {
     const { fetchUnit } = useContext(FinancialContext)
     console.log(fetchUnit);
     return (
          <div >
               {
                    fetchUnit ? fetchUnit.map(unit => {
                         const { Valor, Fecha } = unit;
                         return (
                              <Fragment>
                                   <p>{Valor}</p>
                                   <p>{Fecha}</p>
                              </Fragment>
                         )
                    }) : <p>No hay nada</p>
               }
          </div>
     )
}

export default Dolar
