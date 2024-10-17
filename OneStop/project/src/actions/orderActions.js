import axios from 'axios';

export const placeOrder = (token , subtotal)=>async(dispatch , getState)=>{

    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems

    try{

        const response = await axios.post('/api/orders/placeorder' , {token , subtotal,currentUser, cartItems})
        dispatch({type : 'PLACE_ORDER_SUCCESS'})
        console.log(response);
        
        

    }catch(error){
        dispatch({type : 'PLACE_ORDER_FAILED'})
        console.log(error)

    }
}

export const getUserOrders = () => async (dispatch, getState) => {
    try {
        // Retrieve the current user from the Redux state
        const currentUser = getState().loginUserReducer.currentUser;

        // Dispatch an action to indicate that fetching user orders has started
        dispatch({ type: 'GET_USER_ORDERS_REQUEST' });

        // Fetch user orders from the server
        const response = await axios.post('/api/orders/getuserorders', { userid: currentUser._id });
        
        // Dispatch an action with the fetched data upon successful retrieval
        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
    } catch (error) {
        // Dispatch an action with the error information if the request fails
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
    }
};