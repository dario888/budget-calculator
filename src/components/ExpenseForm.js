import React from 'react'
import {MdSend} from 'react-icons/md'


const ExpenseForm = (props) => {
    const {amount, charge, amountHendler, chargeHendler, submitHendler} = props;
   

    return (
        <form onSubmit={submitHendler}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="charge"
                    name="charge"
                    placeholder="e.g rent"
                    value={charge}
                    onChange={chargeHendler} />
                </div>       
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input 
                    type="number" 
                    className="form-control"
                    id="amount"
                    name="amount"
                    placeholder="e.g rent"
                    value={amount}
                    onChange={amountHendler}  />
                </div>
            </div>
            <button type="submit" className="btn">
                submit
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
    
}

export default ExpenseForm
