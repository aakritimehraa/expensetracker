import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function IncomeChart() {
    const { incomeList: list, query } = useSelector(state => state.incomes)

    const totalINamount = {
        salary: 0,
        business: 0,
        stockmarket: 0,
        sidehustles: 0,
        rent: 0
    
      }
      list.forEach(item => {
        console.log(item.incomecategory.title)
        var a = item.incomecategory.title.toLowerCase()
    if (a in totalINamount) {
      console.log(totalINamount[a] += item.incomeamount)
    }
    })
    const options = {
        responsive: true,
          plugins: {
          legend: {
            display: false,
            position: "bottom",   
            },
          title: {
            display: true,
            text: 'Income',
            color: "#ffffff"
          },
        },
        scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: "#ffffff"
            },
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                color: "#ffffff"
            },
            },
            
          },
         
      };
      
      const labels =  Object.keys(totalINamount)
    
     
  const data = {
        labels,
        datasets: [
          {
            label: 'income',
            data: Object.values(totalINamount),
            backgroundColor: ['rgba(22, 87, 254, 0.6)' ,' rgba(22, 87, 254, 1)','rgba(22, 87, 254, 0.6)' ,' rgba(22, 87, 254, 1)','rgba(22, 87, 254, 0.6)' ,' rgba(22, 87, 254, 1)' ],
          },
         
        ],
      };
    return (



        <div >

<Bar options={options} data={data} />

        </div>
    )
}

export default IncomeChart