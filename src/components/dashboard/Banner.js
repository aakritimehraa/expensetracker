import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ExpenseChart from '../charts/ExpenseChart'
import IncomeChart from '../charts/IncomeChart'
import './Dashboard.css'

function Banner() {


    const [chart , setChart] = useState('income')

    const { incomeList: inlist } = useSelector(state => state.incomes)
    const { expenseList: list } = useSelector(state => state.expenses)

var expensestotal = 0;
  list.forEach(item => {
    expensestotal += item.amount;
  });

  var INtotal = 0;
  inlist.forEach(item => {
    INtotal += item.incomeamount;
  });

  return (
    <div className='banner'>

        <div className='banner-header'>
            <h1>Dashboard</h1>
            <input placeholder='Search' />
        </div>
        <div className='balance'>
          <div>
              <p className='heading'>Current balance</p>
              <p>${INtotal - expensestotal}</p>

          </div>
          <div>
              <p className='heading'>Income </p>
              <p style={{color:'green'}}>${INtotal}</p>
              <p onClick={() => {setChart('income')}}  className={chart === 'income' ? 'visualize' : 'heading' }>Visualize</p>
          </div>
          <div>
              <p className='heading'>Expenses</p>
              <p style={{color:'red'}}>${expensestotal}</p>
              <p onClick={() => {setChart('expense')}} className={chart !== 'income' ? 'visualize' : 'heading' }>Visualize</p>

          </div>


        </div>

      <div className='' style={{marginTop:'0px' }}>
        {chart === 'income' ?
      <IncomeChart />

      :
      <ExpenseChart />
      }
      </div>
    </div>
  )
}

export default Banner