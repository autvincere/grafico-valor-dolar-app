import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ valor, fecha }) => {

     const data = {
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
     }

     const options = {
          // responsive: true,
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
     }

     return (
          <article className="canvas-container">
               <Line data={data} options={options}/>
          </article>
     )
}

export default Chart
