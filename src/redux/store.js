import {createStore,combineReducers,applyMiddleware} from"redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { userreducer } from "./reducer";


const reducer=combineReducers({
    user:userreducer
});



const middleware = [thunk];

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;