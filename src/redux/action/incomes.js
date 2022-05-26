import { ADD_INCOME, DELETE_INCOME, SEARCH_INCOME } from "../action-types/incomes"

export const addIncome = (data) => {
    return{
        type: ADD_INCOME,
        data,
    }
}

export const deleteIncome = (data) => {
return {
    type:DELETE_INCOME,
    data,
}
}

export const searchIncome = (query) => {
    return {
        type:SEARCH_INCOME,
        query,
    }
}

