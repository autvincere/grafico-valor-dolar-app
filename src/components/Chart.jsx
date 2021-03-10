import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ valor, fecha }) => { 
     
//     console.log(valor.length)
//      console.log(total / valor.length);
     // const average = (valor) => {
     //      const total = valor.reduce((a, b) => a + b, 0)
     //      const result = total / valor.length
     //      const final = result.toFixed(0)
     //      return final
     // }
     return (
          <>
               <Line
                     data={{
                         labels: fecha,
                         datasets: [
                              {
                                   label: 'Valor Año actual',
                                   data: valor,
                                   backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',

                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ],
                                    borderWidth: 2      
                              },

                         ],
                    }}
                    height={300}
                    width={500}
                    options={{
                         maintainAspectRatio: false,
                         scales: {
                              yAxes: [{
                                  ticks: {
                                      beginAtZero: true
                                  }
                              }],
                              xAxes: [{
                                   gridLines: {display: false}
                              }]
                         },
                         legend: {
                              labels: {
                                   // fontSize:200,
                              }
                         }
                    }}
               
               />
          </>
     )
}

export default Chart
