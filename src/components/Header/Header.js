import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import './Header.css';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <p className='select-none'>{user?.email}</p>
            <div className='flex gap-4 justify-center items-center'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <button className="btn ml-8" onClick={logOut}>Logout</button> :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>

                }

            </div>
        </nav>
    );
};

export default Header;