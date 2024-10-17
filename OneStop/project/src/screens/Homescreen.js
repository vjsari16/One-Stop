import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Food from '../components/Food'
import Error from '../components/Error'

import { getAllFoods } from '../actions/foodActions'
import './Homescreen.css'
import Loading from '../components/Loading'


export default function Homescreen() {

    const dispatch = useDispatch()

    const Itemsstate = useSelector((state) => state.getAllFoodsReducer);

    const { Items, error, loading } = Itemsstate;
    console.log(Items);

    useEffect(() => {
        dispatch(getAllFoods);

    }, []);
    return (


        <div>
            <div className='row justify-content-center'>

                {loading ? (
                    <Loading/>
                ) : error ? (
                    <Error error = 'Something Went Wrong'/>
                ) : Items ? (

                    Items && Items.map((food) => {
                        return (
                            <div className='col-md-3 '  key={food._id}>
                                <div>
                                    <Food food={food} />
                                </div>
                            </div>
                        )
                    })

                ): null}

            </div>
        </div>
    )
}
