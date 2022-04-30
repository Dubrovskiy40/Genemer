import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import statusReducer from "./statusReducer";
import citiesReducer from "./citiesReducer";
import universityReducer from "./universityReducer";

const rootReducer = combineReducers({
    status: statusReducer,
    cities: citiesReducer,
    university: universityReducer
});

const store = createStore(rootReducer, composeWithDevTools());

type RootReducer = typeof rootReducer

export type RootState = ReturnType<RootReducer>

export default store;