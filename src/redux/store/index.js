import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";
import { incomeReducer } from "../reducers/incomes";
const reducer = combineReducers({
  expenses: expenseReducer,
  incomes: incomeReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;