export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':            
            const alreadyExists = state.cartItems.find(item => item._id === action.payload._id);
            if (alreadyExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
                };
            } else {
                const updatedCartItems = [...state.cartItems, action.payload];
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                return {
                    ...state,
                    cartItems: updatedCartItems
                };
            }
            
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems: action.payload
            };

        case "DELETE_FROM_CART":
            const newCartItems = state.cartItems.filter(item => item._id !== action.payload._id);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
            return {
                ...state,
                cartItems: newCartItems
            };
        
        default:
            return state;
    }
};
