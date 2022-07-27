import React from 'react'
import { Doughnut, Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './Piechart.css'


function IncomePiechart() {

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

    console.log(totalINamount)
  const data = {
    labels: Object.keys(totalINamount),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(totalINamount),
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

export default IncomePiechart