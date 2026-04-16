import React from 'react'
import { useForm } from 'react-hook-form';
import List from './List';
import {default as api} from '../store/apiSlice';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount')
    }

  return (
    <div className="panel-card form-panel">
        <div className="section-header">
            <div>
                <p className="section-eyebrow">Add a transaction</p>
                <h2>Record income, savings, or spending.</h2>
            </div>
            <span className="section-badge">Quick entry</span>
        </div>

        <form id='form' onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="grid gap-4">
                <div className="input-group">
                    <label className="field-label" htmlFor="name">Title</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                        placeholder='Salary, rent, SIP, coffee'
                        className='form-input'
                    />
                </div>
                <div className="input-group">
                    <label className="field-label" htmlFor="type">Category</label>
                    <select id="type" className='form-input' {...register('type')}>
                        <option value="Investment" defaultValue>Investment</option>
                        <option value="Expense">Expense</option>
                        <option value="Savings">Savings</option>
                    </select>
                </div>
                <div className="input-group">
                    <label className="field-label" htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        step="0.01"
                        min="0"
                        {...register('amount')}
                        placeholder='0.00'
                        className='form-input'
                    />
                </div>
                <div className="submit-btn">
                    <button className='submit-button' type="submit">Make Transaction</button>
                </div>
            </div>    
        </form>

        <List />
    </div>
  )
}
