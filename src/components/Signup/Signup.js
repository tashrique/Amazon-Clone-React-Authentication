import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {




    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


    }




    return (
        <div className='flex flex-col justify-center items-center w-[500px] h-[600px] border-2 mx-auto min-h-fit mt-[100px] rounded-lg'>
            <h1 className='font-bold text-3xl'>Signup</h1>
            <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit}>

                <div className=''>
                    <label className='block font-bold' htmlFor="name">Name</label>
                    <input className="w-[415px] h-[55px] rounded-md p-4 bg-white text-black" type="name" id="name" name="name" required></input>
                </div>
                <div className=''>
                    <label className='block font-bold' htmlFor="email">Email</label>
                    <input className="w-[415px] h-[55px] rounded-md p-4 bg-white text-black" type="email" id="email" name="email" required></input>
                </div>

                <div>
                    <label className='block font-bold' htmlFor="password">Password</label>
                    <input className="w-[415px] h-[55px] rounded-md p-4 bg-white text-black" type="password" id="password" name="password" required></input>
                </div>
                <div>
                    <label className='block font-bold' htmlFor="password">Confirm Password</label>
                    <input className="w-[415px] h-[55px] rounded-md p-4 bg-white text-black" type="password" id="confirm" name="confirm" required></input>
                </div>

                <input className='btn bg-yellow-300 text-black font-bold' type="submit" value="Signup"></input>
                <button className='btn bg-blue-300 text-black'>  Sign up with Google</button>
                <p>already have an account? <Link to="/login" className='text-yellow-300'>Login Here</Link></p>
            </form>
        </div>
    );
};

export default Signup;