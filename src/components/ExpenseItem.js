import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md';

//JSX se pravat <li> koi se spojuvaat vo ExpenseList vo <ul> od tamu se prikazuva cela lista vo App
const ExpenseItem = (props) => {
    const {expense, deleteHendler, editHendler} = props;
    const {id, charge, amount} = expense;
    
    return (
        <li className="item">
        <div className="info">
            <span className="expense">{charge}</span>
            <span className="amount">{amount}</span>
        </div>
        <div>
            <button className="edit-btn" aria-label="edit buton" onClick={()=>editHendler(id)}>
                <MdEdit/>
            </button>
            <button className="clear-btn" aria-label="delete buton" onClick={()=>deleteHendler(id)}>
                <MdDelete/>
            </button>
        </div>
        </li>
    )
}

export default ExpenseItem
