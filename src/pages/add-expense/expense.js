import React from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import Form from '../../components/form/Form'
import Input from '../../components/Input/Input'
import'./expense.css'
function Expense() {
  return (

    <div style={{display:'flex'}}>
     <Sidebar />      
         <div className='expense'>
               <Form />
         </div>

    </div>
  )
}

export default Expense