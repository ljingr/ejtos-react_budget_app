import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch , currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const buttonStyle = {
        border : "none",
        background: "transparent"
      };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={buttonStyle} onClick={event=> increaseAllocation(props.name)} ><img src="https://www.pngmart.com/files/21/Green-Add-Button-PNG.png" border="0" alt="button+" height='20' width='20'/></button></td>
        <td><button style={buttonStyle} onClick={event=> decreaseAllocation(props.name)}><img src="https://cdn-icons-png.flaticon.com/512/5974/5974627.png" border="0" alt='button-' height='20' width='20'/></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
