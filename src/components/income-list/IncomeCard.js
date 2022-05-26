import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify'
import { deleteIncome } from '../../redux/action/incomes';

function IncomeCard({item}) {
    
    const handleDelete = () => {
        dispatch(deleteIncome(item))
        const notify = () => toast("Deleted")
        notify()
      }
    

    const time = moment(item.createdAt).fromNow();
    const dispatch = useDispatch()
  return (
    

  
    
<div className='card-container'>
<ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                
            />
<div> <i class={item.incomecategory.icon} aria-hidden="true"></i>    </div>

    <div className='card' style={{ borderRight: `5px solid ${item.incomecategory.color}` }}>
          <div className='title'><p>{item.incometitle}</p> 
          <p className='time'>{time}</p>
          </div>
          <div className='amount'>
          <p onClick={handleDelete}><i style={{color:'white' , marginTop:'10px'}} class="fa fa-trash" aria-hidden="true"></i>
</p>
           <p style={{color:'#2D4263'}}> ${item.incomeamount}</p>
     
          </div>
    </div>
    </div>
  )
}

export default IncomeCard