import React from 'react'
import ExpensePiechart from '../../components/charts/ExpensePiechart'
import Sidebar from '../../components/dashboard/Sidebar'
import ExpenseList from '../../components/expense-list/ExpenseList'
import Input from '../../components/Input/Input'
import './home.css'

function ExpenseHome() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-input'>
       <Input />
       <ExpenseList />
       </div>
       <ExpensePiechart/>
    </div>
  )
}

export default ExpenseHome