import axios from 'axios';

export const getAllFoods = async(dispatch) => {

    dispatch({ type: 'GET_FOODS_REQUEST'})

    try {
        const response = await axios.get('/api/items/getallitems/getallitems')
        console.log(response, "from getfood")
        dispatch({ type: 'GET_FOODS_SUCCESS' , payload : response.data })
    } catch (error) {
        dispatch({ type: 'GET_FOODS_FAILED' , payload : error })

    }
}