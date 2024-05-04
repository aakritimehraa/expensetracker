import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/action/expenses';
import { toast, ToastContainer } from 'react-toastify';
function Card({ item }) {

  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch()



  const handleDelete = () => {
    dispatch(deleteExpense(item))
    const notify = () => toast("Deleted")
    notify()
  }

  return (

<div className='card-container'>
<ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                
            />
<div> <i class={item.category.icon} aria-hidden="true"></i>    </div>

    <div className='card' style={{ borderRight: `5px solid ${item.category.color}` }}>
          <div className='title'><p>{item.title}</p> 
          <p className='time'>{time}</p>
          </div>
          <div className='amount'>
          <p onClick={handleDelete}><i style={{color:'white' , marginTop:'10px' , cursor:'pointer'}} class="fa fa-trash" aria-hidden="true"></i>
</p>
           <p style={{color:'#fff'}}> ${item.amount}</p>
     
          </div>
    </div>
    </div>
  )
}

export default Card