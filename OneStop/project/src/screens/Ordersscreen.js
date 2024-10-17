import React, { useState, useEffect } from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function Orderscreen() {

  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getUserOrderReducer)
  const { orders, error, loading } = orderstate || {}

  useEffect(() => {

    dispatch(getUserOrders())

  }, [dispatch])
  return (
    <div>
      <h2 >My Orders</h2>
      <div className='row justify-content-center'>
        {loading && (<Loading />)}
        {error && (<Error error='Something Went Wrong' />)}
        {orders && orders.length > 0 ? (
          orders.map(order => (
            <div className='col-md-8' key={order._id}>
              <div className='flex-container'>
                <div>
                  {order.orderItems.map(item => (
                    <div key={item._id}>
                      <h1>{item.name} [{item.varient}]*{item.quantity} = {item.price}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No orders found</div>
        )}
      </div>
    </div>
  )
}
