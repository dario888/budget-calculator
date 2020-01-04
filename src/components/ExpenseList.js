import React from 'react';
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md'



//App --> ExpenseList --> Item
// VO <Item expense={expense}> se zima sekoj obj poedinacno od obj expenses i se ubacuva u Item
const ExpenseList = (props) => {
    const {expenses, deleteHendler, editHendler,clearItems} = props
    return (
        <>
        <ul className="list">
            {expenses.map(expense => {
                return <Item key={expense.id} 
                expense={expense}
                deleteHendler={deleteHendler}
                editHendler={editHendler} />
            })}
        </ul>
        {expenses.length > 0 && (<button className="btn" onClick={clearItems}>
        clear expenses
        <MdDelete className="btn-icon" />
        </button>)}
        </>
    )
}

export default ExpenseList
