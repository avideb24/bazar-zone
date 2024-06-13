'use client';

import Button2 from '@/components/shared/Button2/Button2';
import React, { useState } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";

const CartForm = ({ product }) => {

    const [quantity, setQuantity] = useState(0);

    const handleIncreaseQantity = () => {
        setQuantity((prev) => prev + 1)
    }

    const handleDecreaseQantity = () => {
        setQuantity((prev) => prev - 1)
    }

    return (
        <div className='flex items-center gap-4'>
            <div className='flex items-center border-2 border-slate-300'>
                <button onClick={handleDecreaseQantity} className='bg-slate-200 text-2xl p-3'><FiMinus /></button>
                <span className='px-4'>{quantity}</span>
                <button onClick={handleIncreaseQantity} className='bg-slate-200 text-2xl p-3'><FiPlus /></button>
            </div>
            <Button2 btnText={'Add To Cart'} />
        </div>
    );
};

export default CartForm;