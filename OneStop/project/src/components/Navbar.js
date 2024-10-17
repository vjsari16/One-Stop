import React, { useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import './Navb.css';
import { logoutUser } from '../actions/userActions';

const Navbar = () => {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false);


    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div style={{ backgroundImage: `url('https://img.freepik.com/free-photo/flat-lay-vegetables-frame_23-2148516769.jpg?size=626&ext=jpg&ga=GA1.1.1677326305.1675962342&semt=ais')`, backgroundSize: `cover` }}>
            <div className='Nav-main' >
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="/"><i class="bi bi-scooter"></i>OneStop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">
                                    <i class="bi bi-house-door-fill"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/food">Menu</a>
                            </li>

                           




                            <li className="nav-item">
                                <a className="nav-link " href="/cart">
                                <i class="bi bi-cart-fill"></i>{cartstate.cartItems.length}
                                </a>
                            </li>


                            {currentUser ? (<div className="dropdown mt-2 ">
                                <a style={{color:'black'}} className=" dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-door-open"></i>
                                    {currentUser.name}
                                </a>
                                    <div  className="dropdown-menu" aria-labelledby='dropdownMenuButton'>
                                        <a className="dropdown-item" href="/orders">Orders</a>
                                        <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}} ><li> <i class="bi bi-box-arrow-right"></i>Log out</li></a>
                                        
                                    </div>
                                </div>) : (<li className="nav-ite">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>)}



                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;