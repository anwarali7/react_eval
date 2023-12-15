const TotalDepenses = ({ expenses }) => {
    const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const formatToEuros = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    });

    return (
        <div>
            <p><strong>Total : {formatToEuros.format(totalAmount)}</strong></p>
        </div>
    );
};

export default TotalDepenses;