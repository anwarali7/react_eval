import './App.css'
import Form from './component/Form';
import ListeDepenses from './component/ListeDepenses';
import TotalDepenses from './component/TotalDepenses';
import { useReducer } from 'react';
import depensesReducer, {initialState} from './utils/reducer/depensesReducer';
import CategorieDepenses from './component/CategorieDepenses';

const categories = [
  "Alimentation",
  "Logement",
  "Transport",
  "Divertissement",
  "Santé",
  "Éducation",
  "Autres"
]

function App() {
  const [state, dispatch] = useReducer(depensesReducer, initialState);

  return (
    <>
      <h1>Ma liste de dépenses</h1>
      <Form dispatch={dispatch} formData={state.formData} categories={categories}/>
      <p className="message">{state.message}&nbsp;</p>
      <ListeDepenses expenses={state.expenses}/>
      <TotalDepenses expenses={state.expenses}/>
      <CategorieDepenses expenses={state.expenses}/>
    </>
  )
}

export default App
