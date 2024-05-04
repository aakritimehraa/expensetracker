import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchExpense } from '../../redux/action/expenses'
import { searchIncome } from '../../redux/action/incomes'
import './input.css'

function Input() {

    
    return (
        <div className='input'>
            
            <div className='searchbar'>

            <Link to= {window.location.pathname === '/expenses' ? '/expense' : '/income'} className='link'>
        <div className='btn'><i class="fa fa-plus" aria-hidden="true"></i>
            </div>
            </Link>
        </div>
       
            
        
        </div>
    )
}

export default Input