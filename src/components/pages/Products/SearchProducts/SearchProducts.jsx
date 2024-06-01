'use client';

import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchProducts = () => {


    const handleSearchProducts = e => {
        e.preventDefault();

        console.log(e.target.searchText.value);
    }

    return (
        <form onSubmit={handleSearchProducts} className='flex justify-center mt-6'>
        <input type="text" name='searchText' className='bg-transparent w-10/12 px-4 py-2 border outline-none' placeholder='Search Products...' />
        <button type='submit' className='w-[50px] flex justify-center items-center text-2xl bg-secondary text-white hover:bg-primary duration-200'><CiSearch /></button>
    </form>
    );
};

export default SearchProducts;