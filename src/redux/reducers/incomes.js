import { ADD_INCOME, DELETE_INCOME, SEARCH_INCOME } from "../action-types/incomes";

const initialList = () => {
    const list = localStorage.getItem("income-list")
    let incomes = []
    

    if(list){
        incomes = JSON.parse(list)
    }
    return incomes
}



const initialState = {
    incomeList:initialList(),
    query: ""
}

export const incomeReducer = (state=initialState, action) => {
    switch(action.type){

        case ADD_INCOME:{
            localStorage.setItem("income-list" , JSON.stringify([...state.incomeList , action.data]))
            return{
                ...state,
                incomeList: [...state.incomeList , action.data]
            }
        }
        case DELETE_INCOME: {
            const { data } = action;
            const updatedList = state.incomeList.filter(
              (item) => item.createdAt !== data.createdAt
            );
            localStorage.setItem("income-list" , JSON.stringify(updatedList))
            return {
                ...state,
                incomeList: updatedList,
              };

            
        }
        case SEARCH_INCOME:{
            const {query} = action
            return{
                ...state,
                query

            }
        }
        default:
            return state;
    }
}