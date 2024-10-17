import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Food.css'
import { addToCart } from '../actions/cartActions'

export default function Food({ food }) {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState("small")

    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCart(food, quantity, varient))

    }

    return (
        <div>
           
            <div style={{ margin: '40px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
                <div>

                    <div >
                        <h1 className='fs-4'>{food.name}</h1>
                        <img src={food.image} className='img-fluid' style={{ height: '200px', width: '250px' }} />
                    </div>

                    <div className='flex-container'>
                        <div className='m-1 w-100'>
                            <h1 className='fs-5'>Varients</h1>
                            <select className='form-control fs-6' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                                {food.varients.map((varient, index) => {
                                    return <option value={varient}>{varient}</option>
                                })}
                            </select>
                        </div>
                        <div className='m-1 w-100'>
                            <h1 className='fs-5 inputsm'>Quantity</h1>
                            <select className='form-control fs-6' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                {[...Array(10).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>

                        </div>
                    </div>
                    <div>
                        <div className='flex-container '>
                            <h1 className='fs-5'>Price : {food.prices[0][varient] * quantity} Rs/-</h1>
                            <button className='btn' onClick={addtocart}> Add to Cart</button>


                        </div>

                    </div>
                </div>

            </div>
        </div>





    )
}
