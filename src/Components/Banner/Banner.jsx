import React from 'react';
import book from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-around items-center p-6 gap-4'>
            <div className='flex flex-col  gap-3'>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, soluta ratione.</h1>
                <button className='btn btn-neutral'>Test</button>
            </div>
            <div>
                <img className='w-3xl' src={book} alt="" />
            </div>
        </div>
    );
};

export default Banner;