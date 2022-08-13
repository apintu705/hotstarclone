import {createStore,combineReducers,applyMiddleware} from"redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { moviereducer, userreducer } from "./reducer";


const reducer=combineReducers({
    user:userreducer,
    movies:moviereducer
});



const middleware = [thunk];

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;