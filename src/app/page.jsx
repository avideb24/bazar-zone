import React from 'react';
import Categories from '@/components/pages/Home/Categories/Categories';
import Hero from '@/components/pages/Home/Hero/Hero';
import NewsLetter from '@/components/pages/Home/NewsLetter/NewsLetter';
import Products from '@/components/pages/Home/Products/Products';
import Banner from '@/components/pages/Home/Banner/Banner';


const Homepage = () => {

    return (
        <main>

            <Banner />
            <Categories />
            <Products />
            <Hero />
            <NewsLetter />

        </main>
    );
};

export default Homepage;