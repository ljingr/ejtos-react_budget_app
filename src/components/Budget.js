import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses,currency, dispatch } = useContext(AppContext);
    const [budget, setBudget] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

 

    const changeEvent1 = (event) => {
        setBudget(event.target.value);
        
    }
    const changeEvent2 = (event) => {

        if(budget > 20000) {
            alert("The value cannot exceed 20000");
            setBudget("");
            return;
        }
        else if (budget  < 0) {
            alert("The value cannot be negative");
            setBudget("");
            return;
        }
        else if (budget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending " + totalExpenses)
            setBudget("");
            return;
        }
        // else {
        //     setBudget(event.target.value);
        // }

        
    };

    const setbudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });

    }

    const twoCalls = () => {
        changeEvent2()
        setbudget()
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{<input
                required='required'
                type='number'
                step = '10'
                max = '20000'
                id='budget'
                value={budget}
                
                style={{ size: 10}}
                onChange={changeEvent1}
                onBlur={twoCalls}
                >
            </input>}</span>
        </div>
    );
};

export default Budget;
