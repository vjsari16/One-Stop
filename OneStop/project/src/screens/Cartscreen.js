import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { deleteFromCart } from '../actions/cartActions';
import './Cartscreen.css'
import Checkout from '../components/Checkout';

const Cartscreen = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    var subtotal = cartItems.reduce((x , item)=> x+item.price , 0)

    useEffect(() => {
        const cartItemsFromStorage = localStorage.getItem('cartItems');
        console.log('Cart Items from Local Storage:', cartItemsFromStorage);
        if (cartItemsFromStorage) {
            const parsedCartItems = JSON.parse(cartItemsFromStorage);
            console.log('Parsed Cart Items:', parsedCartItems);
            dispatch({ type: 'SET_CART_ITEMS', payload: parsedCartItems });
        }
    }, [dispatch]);

    return (
        <div className='bg-imgup'>
            <div className='page-content'>
                <div className='row justify-content-center' >
                    <div className='col-md-6'>
                        <h2 style={{fontSize:'60px'}}>My Cart</h2>
                        {cartItems.length === 0 ? (
                            <div style={{fontSize:'30px'}}>Your cart is empty</div>
                        ) : (
                            cartItems.map(item => (
                                <div className='flex-container m-5'>
                                    <div key={item.id} className='text-left m-1 w-100'>
                                    <h3>{item.name} [{item.varient}]</h3>
                                    <p>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</p>
                                    <h3 style={{display:"inline"}}>Quantity : </h3>
                                    <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item , item.quantity+1 , item.varient))}}></i>
                                    <b>{item.quantity}</b>
                                    <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item , item.quantity-1 , item.varient))}}></i>
                                    <hr/>
                                    </div>
                                    <div className='m-1 w-100'>
                                        <img src={item.image} alt={item.name} style={{ height: '100px', width: '100px' }} />
                                    </div>
                                    <div className='m-1 w-100 mt-5'>
                                        <i className='fa fa-trash' aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                                    </div>
                                
                                </div>
                            ))
                        )}
                    </div>
                    <div className='col-md-4 text-right'>
                        <div style={{marginTop:"50px", textAlign:"right"}}>
                            <h2 style={{fontSize:"45px"}}>Subtotal : {subtotal} /-</h2>
                            <Checkout subtotal={subtotal}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartscreen;