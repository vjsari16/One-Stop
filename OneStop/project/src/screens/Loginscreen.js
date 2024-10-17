import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './Login.css'

const Loginscreen = () => {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginState = useSelector(state => state.loginUserReducer)
  const { loading, error } = loginState
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }

  }, [])

  function login() {
    const user = { email, password }
    dispatch(loginUser(user))
  }
  return (
    <div>
      <div className='bg-img'>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded ml-4 '>
            <h2 className='text-center m-4' style={{ fontSize: '35px' }}>Login</h2>

            {loading && (<Loading />)}
            {error && (<Error error='Invalid Credentials' />)}

            <div>

              <input required type='text' placeholder='email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
              <input required type='text' placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />

              <button onClick={login} className='btn mt-4 mb-3'>Login</button><br />
              <a style={{ color: 'black' }} href='/register' className='m-2'>Register here</a>


            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Loginscreen