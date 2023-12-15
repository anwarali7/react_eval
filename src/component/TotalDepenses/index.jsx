import { useState, useEffect } from "react";
import './TotalDepenses.css';

const TotalDepenses = ({ expenses }) => {
    const [changed, setChanged] = useState(false);
    
    const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const formatToEuros = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    });

    useEffect(()=> {
        setChanged(true);
        setTimeout(() => {
            setChanged(false);
        }, 10);
    }, [expenses]);
    
    return (
        <div>
            <p className={'total-amount ' + (changed ? 'color-changed' : '')}>Total : {formatToEuros.format(totalAmount)}</p>
        </div>
    );
};

export default TotalDepenses;