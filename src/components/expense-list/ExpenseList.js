import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import './ExpenseList.css'
import TotalExpense from './TotalExpense'


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseList() {

  const { expenseList: list, query } = useSelector(state => state.expenses)
  const filteredList = list.filter(item => item.title.includes(query))


  var total = 0;
  list.forEach(item => {
    total += item.amount;
  });

  console.log(total);


  return (
    <div className='expense-container'>
       
      <div className=''>
      {filteredList?.map(item => (
        <Card item={item} />
      ))
      }
      <TotalExpense title = 'expense' total={total} />
      </div>

      {/* <div className='pie'>
        <Pie data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }} />
      </div> */}
    </div>
  )
}

export default ExpenseList