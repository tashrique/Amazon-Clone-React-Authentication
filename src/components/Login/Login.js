import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { logIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            })
    }










    return (
        <div className='flex flex-col justify-center items-center w-[500px] h-[600px] border-2 mx-auto min-h-fit mt-[100px] rounded-lg'>
            <h1 className='font-bold text-3xl'>Login</h1>
            <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit}>

                <div className=''>
                    <label className='block font-bold' htmlFor="email">Email</label>
                    <input className="w-[415px] h-[55px] rounded-md p-4 bg-white text-black" type="email" id="email" name="email" required></input>
                </div>

                <div>
                    <label className='block font-bold' htmlFor="password">Password</label>
                    <input className="w-[415px] h-[55px] rounded-md p-4 bg-white text-black" type="password" id="password" name="password" required></input>
                </div>

                <input className='btn bg-yellow-300 text-black font-bold' type="submit" value="Login"></input>
                <button className='btn bg-blue-300 text-black'>Sign in with Google</button>
                <p>New to Ema-John? <Link to="/signup" className='text-yellow-300'>Register Now!</Link></p>
            </form>
            <p className='text-red-300'>{error}</p>



        </div>
    );
};

export default Login;