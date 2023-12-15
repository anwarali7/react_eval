import './ListeDepenses.css';

function ListeDepenses({expenses}) {
  const formatToEuros = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });
  
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense">
          <span className="expense-category">{expense.category}</span>
          <span className="expense-amount">{formatToEuros.format(expense.amount)}</span>
        </li>
      ) )}
    </ul>
  )
}

export default ListeDepenses;