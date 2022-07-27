import React from 'react'
import ExpenseHome from './pages/home/expenseHome'
import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Expense from './pages/add-expense/expense'

import Dashboard from './pages/dashboard/dashboard'
import IncomeHome from './pages/home/incomeHome'
import Income from './pages/add-income/income'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/expenses' element={<ExpenseHome />} />
        <Route path='/expense' element={<Expense />} />
        <Route path='/income' element={<Income />} />
        <Route path='/incomes' element={<IncomeHome />} />

     </Routes>
     </BrowserRouter>

  )
}

export default App