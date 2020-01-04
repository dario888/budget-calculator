import React, {useState} from 'react';
import './App.css';
import Form from './components/ExpenseForm';
import List from './components/ExpenseList';
import Alert from './components/Alert';
import uuid from 'uuid/v4';


const initialExpenses = [
  {id: uuid(), charge: 'rent', amount: 1600},
  {id: uuid(), charge: 'car payment', amount: 400},
  {id: uuid(), charge: 'credidt card bill', amount: 1200}
];

function App() {
  //STATES
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({show: false});

  const chargeHendler = event => {
    setCharge(event.target.value);
  }

  const amountHendler = event => {
    setAmount(event.target.value);
  }
  // + 2 properties type, text
  const alertHendler = ({type, text}) => {
    setAlert({show:true, type: type, text: text});

    setTimeout(()=>{
      setAlert({show: false})
    },5000);

  }

  const submitHendler = event => {
    event.preventDefault();
    if(charge !== 'rent' && charge !== 'car payment' && charge !== 'credidt card bill'){
      return alertHendler({type: 'danger', 
      text: 'Please enter correct charge'});
    }
    //expenses=initialExpenses
    if(charge !== '' && amount !== ''){
      const singleEcxpense = {id: uuid(), charge: charge, amount: amount}
      setExpenses([...expenses, singleEcxpense]);
      alertHendler({type: 'success', text: 'Item added'})
      setCharge('');
      setAmount('');

    } else {
      alertHendler({type: 'danger', 
      text: 'charge can\'t be empty value and amount value has to be bigger than'});

    }
    
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
      <Form 
      amount={amount}
      charge={charge}
      amountHendler={amountHendler}
      chargeHendler={chargeHendler}
      submitHendler={submitHendler} /> 
      <List expenses={expenses} />
      </main>
        <h1>
          total spending : <span className="total">
            $ {expenses.reduce((acc,crv) => {
              return acc += +crv.amount
            }, 0)}
          </span>
        </h1>
    </>
  );
}

export default App;
