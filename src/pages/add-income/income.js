import React from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import IncomeForm from '../../components/form/IncomeForm'
import '../add-expense/expense.css'
function Income() {
  return (



<div style={{display:'flex'}}>
     <Sidebar />      
         <div className='expense'>
               <IncomeForm />
         </div>

    </div>  )
}

export default Income