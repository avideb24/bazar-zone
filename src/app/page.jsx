import React from 'react';
import Categories from '@/components/pages/Home/Categories/Categories';
import Hero from '@/components/pages/Home/Hero/Hero';
import NewsLetter from '@/components/pages/Home/NewsLetter/NewsLetter';
import Products from '@/components/pages/Home/Products/Products';


const Homepage = () => {

    return (
        <main className=''>

            <Categories />
            <Products />
            <Hero />
            <NewsLetter />

        </main>
    );
};

export default Homepage;