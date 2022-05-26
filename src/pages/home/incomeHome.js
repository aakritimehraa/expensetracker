import React from 'react'
import ExpensePiechart from '../../components/charts/ExpensePiechart'
import Piechart from '../../components/charts/ExpensePiechart'
import IncomePiechart from '../../components/charts/IncomePiechart'
import Sidebar from '../../components/dashboard/Sidebar'
import Incomelist from '../../components/income-list/IncomeList'
import Input from '../../components/Input/Input'

function IncomeHome() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-input'>
       <Input />
       <Incomelist />
       </div>
       <IncomePiechart />
    </div>
  )
}

export default IncomeHome