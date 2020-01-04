import React from 'react';
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md'



//App --> ExpenseList --> Item
const ExpenseList = ({expenses}) => {
    return (
        <>
        <ul className="list">
            {expenses.map(expense => {
                return <Item key={expense.id} expenses={expenses} />
            })}
        </ul>
        {expenses.length > 0 && (<button className="btn">
        clear expenses
        <MdDelete className="btn-icon" />
        </button>)}
        </>
    )
}

export default ExpenseList
