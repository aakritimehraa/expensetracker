import React from 'react'

function TotalExpense({total , title}) {
  return (
   <div className='totalexpense'><p>Total {title}: ${total}</p></div>
    
  )
}

export default TotalExpense