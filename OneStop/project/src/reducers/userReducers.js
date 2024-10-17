export const registerUserReducer = (state={user:[]} , action)=>{


    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST' : return{
            loading:true
        }
        case 'USER_REGISTER_SUCCESS' : return{
            loading : false,
            success : true,
            
        }
        case 'USER_REGISTER_FAILED' : return{
            loading : false,
            error : action.payload
        }
        default:
            return state
    }
}

const initialState = {
    loading: false,
    success: false,
    error: '',
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {}
};

export const loginUserReducer = (state= initialState , action)=>{
    

    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST' : return{
            loading:true
        }
        case 'USER_LOGIN_SUCCESS' : return{
            loading : false,
            success : true,
            currentUser : action.payload
            
        }
        case 'USER_LOGIN_FAILED' : return{
            loading : false,
            error : action.payload
        }
        default:
            return state
    }
}