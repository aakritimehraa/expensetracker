import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './Piechart.css'


ChartJS.register(ArcElement, Tooltip, Legend);


function ExpensePiechart() {
  
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

  console.log(totalamount)
  const data = {
    labels: Object.keys(totalamount),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(totalamount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='pie'> 
   
   <Doughnut data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }} />
    </div>
  )
}

export default ExpensePiechart