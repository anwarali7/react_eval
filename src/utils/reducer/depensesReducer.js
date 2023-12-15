/*
depenses : [
  {
    id: 1,
    category: "Alimentation",
    amount: 100,
  }
]
*/

export const initialState = {
    formData: {
      category: "",
      amount: "",
    },
    expenses: [],
    message: "",
}

let id = 0;

const depensesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_DEPENSE": {
          if(state.formData.category === "" || 
          parseFloat(state.formData.amount) === 0 ||
          state.formData.amount === ""
          ) {
            return {
              ...state,
              message: "Veuillez remplir tous les champs !"
            }
          }
            return {
                ...state,
                expenses: state.expenses.concat({
                  id: id++,
                  category: state.formData.category,
                  amount: parseFloat(state.formData.amount)
                })
            }
          }
        
        case "UPDATE_FORM_DATA":
          return {
            ...state,
            message: "",
            formData: {
              ...state.formData,
              ...action.payload,
            }
          }
        default:
            return state
    }
}

export default depensesReducer;