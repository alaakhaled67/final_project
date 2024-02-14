import { legacy_createStore as createStore } from "redux";
import SearchReducer from "./Reducer";






const myStore=createStore(SearchReducer);



export default myStore;