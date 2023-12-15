import "./Form.css";

function Form({categories, dispatch, formData}) {

  const handleChange = (e) => {
    const {value, name} = e.target;
    const newData = {...formData}
    newData[name] = value;
    dispatch({type: "UPDATE_FORM_DATA", payload: newData})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "ADD_DEPENSE"})
  }

  const buttonDisabled = formData.category === "" ||
    formData.amount === "0" ||
    formData.amount === "";

  return (
    <form onSubmit={handleSubmit}>
      <select name="category" className="category" value={formData.category} onChange={handleChange}>
        <option value="" disabled>Choisissez une catégorie</option>
        {categories.map((category, index) => <option key={index}>{category}</option>)}
      </select>
      <input type="number" className="amount" name="amount" placeholder="10,00" step="0.01" min="0" value={formData.amount} onChange={handleChange}/>
      <button disabled={buttonDisabled} className="add-btn">Ajouter</button>
    </form>
  )
}

export default Form;