export const addToCart=(food , quantity , varient)=>(dispatch , getState)=>{


    var cartItem = {
        name : food.name ,
        _id : food._id,
        image : food.image,
        varient : varient,
        quantity : Number(quantity),
        prices : food.prices,
        price : food.prices[0][varient]*quantity
    }

    if(food.quantity>10){
        alert('You cannot add more than 10')

    }
    else{
        if(cartItem.quantity<0){
            dispatch({type:"DELETE_FROM_CART" , payload:food})

        }else{
            dispatch({type:'ADD_TO_CART' , payload : cartItem})
        }
    }
    

    const cartItems = getState().cartReducer.cartItems

    localStorage.setItem('cartItems' , JSON.stringify(cartItems) )

}
export const deleteFromCart=(food)=>(dispatch , getState)=>{

    dispatch({type:"DELETE_FROM_CART" , payload:food})

    const cartItems = getState().cartReducer.cartItems

    localStorage.setItem('cartItems' , JSON.stringify(cartItems) )

}