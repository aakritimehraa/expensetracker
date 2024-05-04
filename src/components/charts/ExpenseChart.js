import React from 'react';
import './Piechart.css'
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

function ExpenseChart() {

    const { expenseList: list } = useSelector(state => state.expenses)
 const totalamount = {
    food: 0,
    education: 0,
    healthcare: 0,
    shopping: 0,
    other: 0

  }

  
  list.forEach(item => {
    console.log(item.category.title)
    var a = item.category.title.toLowerCase()
    if (a in totalamount) {
      console.log(totalamount[a] += item.amount)
    }

  });
  const options = {
    responsive: true,
      plugins: {
      legend: {
        display: false,
        position: "bottom",   
        },
      title: {
        display: true,
        text: 'Expense',
        color: "#ffffff",
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
  
  
  const labels =  Object.keys(totalamount)

 
const data = {
    labels,
    datasets: [
      {
        label: 'expense',
        data: Object.values(totalamount),
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

export default ExpenseChart