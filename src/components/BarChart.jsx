import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

const BarChart = () => {
     return (
          <div>
               <Line
                    data={{
                         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                         datasets: [
                              {
                                   label: 'dolar anual',
                                   data: [12, 19, 3, 5, 1, 3],
                                   backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',

                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ],
                                    borderWidth: 2      
                              },
                              // {
                              //      label: 'Quantity',
                              //      data: [90, 30, 30, 50, 10, 60],
                              //      backgroundColor:'blue', 
                              //      borderColor: 'red',
                              //      borderWidth:3
                              // },
                         ],
                    }}
                    height={400}
                    width={600}
                    options={{
                         maintainAspectRatio: false,
                         scales: {
                              yAxes: [{
                                  ticks: {
                                      beginAtZero: true
                                  }
                              }]
                         },
                         legend: {
                              labels: {
                                   // fontSize:200,
                              }
                         }
                    }}
               />
          </div>
     )
}

export default BarChart
