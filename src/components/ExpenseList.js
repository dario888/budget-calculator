import React from 'react';
import Item from './ExpenseItem';



//App --> ExpenseList --> Item
const ExpenseList = ({expenses}) => {
    return (
        <>
        <ul className="list">
            {expenses.map(expense => {
                return <Item key={expense.id} expenses={expenses} />
            })}
            {/* <li></li> */}
        </ul>
        </>
    )
}

export default ExpenseList
