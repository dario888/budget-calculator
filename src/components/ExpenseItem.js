import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md';

//JSX se pravat <li> koi se spojuvaat vo ExpenseList vo <ul> od tamu se prikazuva cela lista vo App
const ExpenseItem = ({expense}) => {
    const {id, charge, amount} = expense;
    console.log(charge);
    return (
        <li className="item">
        <div className="info">
            <span className="expense">{charge}</span>
            <span className="amount">{amount}</span>
        </div>
        <div>
            <button className="edit-btn" aria-label="edit buton">
                <MdEdit/>
            </button>
            <button className="clear-btn" aria-label="delete buton">
                <MdDelete/>
            </button>
        </div>
        </li>
    )
}

export default ExpenseItem
