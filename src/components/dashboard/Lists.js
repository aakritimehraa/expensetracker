import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

function Lists() {
  const { incomeList: inlist } = useSelector(state => state.incomes);
  const { expenseList: list } = useSelector(state => state.expenses);

  const inc = inlist.slice(-3);
  const exp = list.slice(-3);

  return (
    <div className='lists'>
      <div className='lists-div'>
        <h1>Recent Incomes</h1>
        {inc.length > 0 ? (
          inc.map(item => (
            <div className='list-container'>
              <div>
                <i class={item.incomecategory.icon} aria-hidden="true"></i>
              </div>
              <div className='lists-card'>
                <div>
                  <p>{item.incometitle}</p>
                  <p className='time'>{moment(item.createdAt).fromNow()}</p>
                </div>
                <div>
                  <p style={{ color: 'green' }} className='amount'>${item.incomeamount}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text'>No recent incomes</p>
        )}
      </div>
      <div className='lists-div'>
        <h1>Recent Expenses</h1>
        {exp.length > 0 ? (
          exp.map(item => (
            <div className='list-container'>
              <div>
                <i class={item.category.icon} aria-hidden="true"></i>
              </div>
              <div className='lists-card'>
                <div>
                  <p>{item.title}</p>
                  <p className='time'>{moment(item.createdAt).fromNow()}</p>
                </div>
                <div>
                  <p style={{ color: 'red' }} className='amount'>${item.amount}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text'>No recent expenses</p>
        )}
      </div>
    </div>
  );
}

export default Lists;
