import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllFoodsReducer } from './reducers/foodReducer';
import { cartReducer } from './reducers/cartReducer';
import { loginUserReducer, registerUserReducer } from './reducers/userReducers';
import { placeOrderReducer , getUserOrderReducer } from './reducers/orderReducer';


const rootReducer = {
    getAllFoodsReducer: getAllFoodsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrderReducer : getUserOrderReducer
};

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
console.log("Value of cartItems in localStorage:", cartItems);
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
console.log("Value of Login in localStorage:", currentUser);


const initialState = {
    cartReducer :{
        cartItems: []
    },
    loginUserReducer :{
        currentUser: currentUser
    }
}



const composeEnhancers = composeWithDevTools({});
const middleware = [thunk];

const store = configureStore({
    initialState,middleware,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: composeEnhancers
});


export default store;