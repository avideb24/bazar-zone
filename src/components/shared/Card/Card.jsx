import React from 'react';
import teapotImg from '../../../../public/images/products/teapot.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart } from "react-icons/ci";

const Card = () => {
    return (
        <div className='max-w-72 group'>
            <div className='max-h-80 relative'>
                <Image src={teapotImg} className='w-full h-full object-cover ' alt='product image' />
                {/* favourite btn */}
                <button className='absolute right-3 top-3 text-xl bg-white px-2 py-2 rounded-full hover:bg-secondary hover:text-white duration-200'>
                    <CiHeart />
                </button>
                {/* add to cart btn */}
                <button className='absolute left-0 -bottom-5 bg-secondary text-white text-center font-semibold py-3 w-full uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-0 hover:bg-primary duration-200'>+ add to cart</button>
            </div>
            {/* title & price */}
            <div className='flex flex-col items-center py-5'>
                <Link href={'/'}>
                    <h2 className='text-base font-semibold mb-1 hover:text-primary duration-150'>Teapot</h2>
                </Link>
                <p>$26.65</p>
            </div>
        </div>
    );
};

export default Card;