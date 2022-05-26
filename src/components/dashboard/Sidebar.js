import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Sidebar() {
    return (
        <div className='sidebar'>

            <h1>Xspense</h1>
            <div>
                <ul>
                    <Link className='link' to='/'> <li className='active'><i class="fa fa-tasks" aria-hidden="true"></i>
                        Dahsboard</li></Link>
                    <Link className='link' to='/incomes'>   <li><i class="fa fa-money" aria-hidden="true"></i>
                        Income List</li></Link>
                    <Link className='link' to='/expenses'>
                        <li><i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                            Expense List</li></Link>
                    <li><i class="fa fa-line-chart" aria-hidden="true"></i>
                        Charts</li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar