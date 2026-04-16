import React from 'react'
import 'boxicons';
import {default as api} from '../store/apiSlice';

export default function List() {
    const { data, isFetching , isSuccess, isError } = api.useGetTransactionsQuery()
    const [deleteTransaction] = api.useDeleteTransactionMutation()
    let Transactions;

    
    const handlerClick = (e) => {
        if(!e.currentTarget.dataset.id) return 0;
        deleteTransaction({ _id : e.currentTarget.dataset.id })
    }

    if(isFetching){
        Transactions = <div>Fetching</div>;
    }else if(isSuccess){
        Transactions = [...data]
            .reverse()
            .map((transaction) => (
                <Transaction
                    key={transaction._id}
                    category={transaction}
                    handler={handlerClick}
                />
            ));
    }else if(isError){
        Transactions = <div>Error</div>
    }


  return (
    <div className="history-block">
        <div className="section-header section-header-compact">
            <div>
                <p className="section-eyebrow">Recent activity</p>
                <h2>History</h2>
            </div>
            <span className="section-badge">Latest entries</span>
        </div>
        {Transactions}
    </div>
  )
}

function Transaction({ category, handler }){
    if(!category) return null;
    const formattedDate = category.date ? new Date(category.date).toLocaleDateString() : '';
    return (
        <div className="transaction-card" style={{ borderLeft : `5px solid ${category.color ??  "#e5e5e5"}`}}>
            <button className='trash-button' data-id={category._id ?? ''} onClick={handler} aria-label={`Delete ${category.name ?? 'transaction'}`}>
                <box-icon color={category.color ??  "#e5e5e5"} size="18px" name="trash" ></box-icon>
            </button>
            <div className="transaction-content">
                <div className="transaction-topline">
                    <span className="transaction-name">{category.name ?? ''}</span>
                    <span className="transaction-amount">{category.amount !== undefined ? `$${category.amount}` : ''}</span>
                </div>
                <div className="transaction-meta">
                    <span>{category.type ?? 'Transaction'}</span>
                    {formattedDate ? <span>{formattedDate}</span> : null}
                </div>
            </div>
        </div>
    )
}
