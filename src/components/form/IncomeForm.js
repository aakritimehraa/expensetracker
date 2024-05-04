import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { incomeCategories } from '../../constants/incomeCategories';
import { addIncome } from '../../redux/action/incomes';


function IncomeForm() {




    

    let navigate = useNavigate();
    const cat = incomeCategories
    const [incometitle, setIncomeTitle] = useState('')
    const [incomeamount, setIncomeAmount] = useState('')
    const [incomecategory, setIncomeCategory] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()



    const handleINAmount = (e) => {

        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setIncomeAmount("")
            return
        }
        setIncomeAmount(val)
    }


    const handleINCategory = (category) => {
        setIncomeCategory(category)
        setShow(false)
    }
    const handleSubmit = () => {
        if (incometitle === "" || incomeamount === "" || !incomecategory) {
            const notify = () => toast("please enter valid data")
            notify()
            return
        }
        const data = {
            incometitle,
            incomeamount,
            incomecategory,
            createdAt: new Date()
        }
        console.log('data')
        const notify = () => toast("income added")
        notify()
        dispatch(addIncome(data))
        setIncomeTitle('')
        setIncomeAmount('')
        setIncomeCategory('')
        navigate('/incomes')
 
    }

  return (



<>
        <div className='form'>
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                
            />
           
           <div className='input-wrapper'>
            <div className='form-input'>
                <label>Title</label>
                <input placeholder='title' value={incometitle} onChange={(e) => { setIncomeTitle(e.target.value) }} />
            </div>
            <div className='form-input'>
                <label>Amount</label>
                <input placeholder='amount' value={incomeamount} onChange={(e) => handleINAmount(e)} />
            </div>
            <div className='categories'>
                <div className='category-dropdown'>
                    <div onClick={() => setShow(!show)}><label>{incomecategory ? incomecategory.title : 'Category'}<i class="fa fa-angle-down" aria-hidden="true"></i>
                    </label></div>
                    {show && <div className='category'>
                        {cat.map(category => (
                            <div className='item' style={{ borderRight: `5px solid ${category.color}` }}
                                onClick={() => handleINCategory(category)}>
                                <label>{category.title}</label>
                                <i class={category.icon} aria-hidden="true"></i>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className='form-submit' onClick={() => handleSubmit()}><i class="fa fa-plus" aria-hidden="true"></i>
                Add</div>
            
            </div>
      
        </div>
      

        </>    
    )
}

export default IncomeForm