import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { categories } from '../../constants/expenseCategory'
import { addExpense } from '../../redux/action/expenses'

import './Form.css'
import { useNavigate } from 'react-router-dom';

function Form() {


    let navigate = useNavigate();
    const cat = categories
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()



    const handleAmount = (e) => {

        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount("")
            return
        }
        setAmount(val)
    }


    const handleCategory = (category) => {
        setCategory(category)
        setShow(false)
    }
    const handleSubmit = () => {
        if (title === "" || amount === "" || !category) {
            const notify = () => toast("please enter valid data")
            notify()
            return
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        }
        console.log('data')
        const notify = () => toast("expense added")
        notify()
        dispatch(addExpense(data))
        setTitle('')
        setAmount('')
        setCategory('')
        navigate('/expenses')

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

            <div className='form-input'>
                <label>Title</label>
                <input placeholder='title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div className='form-input'>
                <label>Amount</label>
                <input placeholder='amount' value={amount} onChange={(e) => handleAmount(e)} />
            </div>
            <div className='categories'>
                <div className='category-dropdown'>
                    <div onClick={() => setShow(!show)}><label>{category ? category.title : 'Category'}<i class="fa fa-angle-down" aria-hidden="true"></i>
                    </label></div>
                    {show && <div className='category'>
                        {cat.map(category => (
                            <div className='item' style={{ borderRight: `5px solid ${category.color}` }}
                                onClick={() => handleCategory(category)}>
                                <label>{category.title}</label>
                                <i class={category.icon} aria-hidden="true"></i>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>

            
        </div>
        <div className='form-submit' onClick={() => handleSubmit()}><i class="fa fa-plus" aria-hidden="true"></i>
                Add</div>

        </>
    )
}

export default Form