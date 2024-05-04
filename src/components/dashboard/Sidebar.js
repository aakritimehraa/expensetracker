import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';

function Sidebar() {
    const location = useLocation();

    return (
        <div className='sidebar'>
            <h1>Xspense</h1>
            <div>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link className='link' to='/'>
                            <i className="fa fa-tasks" aria-hidden="true"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className={location.pathname === '/incomes' ? 'active' : ''}>
                        <Link className='link' to='/incomes'>
                            <i className="fa fa-money" aria-hidden="true"></i>
                            Income List
                        </Link>
                    </li>
                    <li className={location.pathname === '/expenses' ? 'active' : ''}>
                        <Link className='link' to='/expenses'>
                            <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                            Expense List
                        </Link>
                    </li>
                
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
