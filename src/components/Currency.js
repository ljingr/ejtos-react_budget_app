import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('');

    const spanStyle = {
        color : "white",
        background: "green"
      };

    const changecurrency = () => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });

    }

    const twoCalls = (e) => {
        setCurrency(e.target.value)
        changecurrency()
    }


    return (
     
        <div style = {spanStyle} className="alert alert-secondary">

            <div >

            <span> Currency ({<select style = {spanStyle} className="currency-select" id="currencyselect" onChange={twoCalls}>
                <option value ="£" defaultValue name="Pound">£ Pound</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Rupee</option>
            </select>})
            
            </span>
            </div>
        </div>
    );
};

export default Currency;