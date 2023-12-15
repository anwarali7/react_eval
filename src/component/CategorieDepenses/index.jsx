import './CategorieDepenses.css';

const CategorieDepenses = ({ expenses }) => {
    const formatToEuros = new Intl.NumberFormat('fr-Fr', {
        style: 'currency',
        currency: 'EUR',
    });

    const categoryTotals = expenses.reduce((acc, expense) => {
        const { category, amount } = expense;
        acc[category] = (acc[category] || 0) + amount;
        return acc;
    }, {});

    return (
        <div>
            <h2>Dépenses par Catégories</h2>
            <ul className="categories-expenses">
                {Object.entries(categoryTotals).map(([category, totalAmount]) => (
                    <li key={category}>
                        <span>{category} :</span><span>{formatToEuros.format(totalAmount)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategorieDepenses;