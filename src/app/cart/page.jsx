'use client';

import useCart from '@/hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";


const CartPage = () => {

    const [cart, setCart] = useCart();
    const [mounted, setMounted] = useState(false);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setMounted(true)
        // setCart(cart)
    }, []);


    const handleIncreaseQantity = (productId) => {

        setQuantity((prev) => prev + 1)
    };

    const handleDecreaseQantity = (productId) => {

        setQuantity((prev) => prev - 1)
    };

    const handleRemoveCart = (productId) => {
        const updatedCart = cart?.filter(product => product?._id !== productId);
        setCart(updatedCart);
    };



    return (
        <div className='py-5'>

            <p className="flex items-center gap-3"><Link href={'/'} className="opacity-75">Home</Link> <RiArrowRightSLine />Cart</p>

            <div className='py-6 flex gap-14'>

                {/* cart items */}
                <div className='w-8/12'>
                    <h1 className='text-xl md:text-2xl font-semibold border-b-2 border-b-slate-200 pb-4'>Shopping Cart</h1>
                    {
                        mounted ?
                            <div>
                                {
                                    cart?.length == 0 ?
                                        <div className='text-center font-semibold py-5'>No Items Added</div>
                                        :
                                        <div>
                                            {
                                                cart?.map(product =>
                                                    <div key={product?._id} className='flex justify-between items-center gap-2 pt-6'>
                                                        <Image src={product?.img1} width={200} height={200} alt={product?.title} />
                                                        <div className='font-semibold'>
                                                            <h3>{product?.title}</h3>
                                                            <p>${product?.price}</p>
                                                        </div>
                                                        <div className='flex items-center border-2 border-slate-300'>
                                                            <button onClick={() => handleDecreaseQantity(product?._id)} className='bg-slate-200 text-2xl p-3'><FiMinus /></button>
                                                            <span className='px-4'>{quantity}</span>
                                                            <button onClick={() => handleIncreaseQantity(product?._id)} className='bg-slate-200 text-2xl p-3'><FiPlus /></button>
                                                        </div>
                                                        <button onClick={() => handleRemoveCart(product?._id)} className='text-red-600 text-3xl'><AiFillDelete /></button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                }
                            </div>
                            :
                            <div></div>
                    }
                </div>

                {/* checkout */}
                <div className='w-4/12'>
                    <div className='flex justify-between items-center gap-3'>
                        <p className='opacity-75'>2 Items</p>
                        <p className='font-semibold'>$98</p>
                    </div>
                    <div className='flex justify-between items-center gap-3'>
                        <p className='opacity-75'>Shipping</p>
                        <p className='font-semibold'>$7</p>
                    </div>
                    <div className='flex justify-between items-center gap-3 border-b-2 border-b-slate-200 py-3'>
                        <p className='opacity-75'>Total (Tax Exclu.)</p>
                        <p className='font-semibold'>$207</p>
                    </div>
                    <div className='flex justify-between items-center gap-3 pt-3 font-semibold'>
                        <p className='opacity-75'>Total(Tax Inclu.)</p>
                        <p>$207</p>
                    </div>
                    <p className='font-semibold py-3'><span className='opacity-75 mr-2'>Taxes:</span>$0</p>
                    <Link href={'/'}>
                        <button className='bg-secondary text-white w-full py-2 block my-5 font-semibold hover:bg-primary duration-200'>Proceed To Checkout</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default CartPage;