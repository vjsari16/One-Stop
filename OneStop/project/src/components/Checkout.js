import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions';
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'

export default function Checkout(subtotal) {

  const orderstate = useSelector((state) => state.placeOrderReducer)
  const {loading , error , success} = orderstate

    const dispatch = useDispatch()
    function tokenHander(token){

        console.log(token);
        dispatch(placeOrder(token , subtotal))



    }
  return (
    <div>

        {loading && (<loading/>)}
        {error && (<Error error='something went wrong'/>)}
        {success && (<Success success='Your Order Placed Successfully'/>)}

        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51OtOq2SDp6Y3xvjAs6bnRNPMitcDtb6h9UcC9XDktWdjybWPTq0y9DnXXF94AtWtLxbz8gvBkyyd9WVLxl9lIi8n00NOYst9iR'
        currency='INR'
        
        
        
        
        >


            <button className='btn'>PAY NOW</button>



        </StripeCheckout>

    </div>
  )
}
