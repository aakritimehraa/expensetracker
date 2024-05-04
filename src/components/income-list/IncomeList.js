import moment from 'moment';
import React from 'react'
import {  useSelector } from 'react-redux'
import TotalExpense from '../expense-list/TotalExpense';
import IncomeCard from './IncomeCard'

function Incomelist() {



  const { incomeList: list } = useSelector(state => state.incomes)


  var total = 0;
  list.forEach(item => {
    total += item.incomeamount;
  });

  console.log(total);
  return (
    <div>
      {list?.map(item => (
       <IncomeCard item={item} />
      ))
      }
    
    <TotalExpense title='income'  total={total} />

    </div>

  )
}

export default Incomelist