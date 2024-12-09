'use client';

import React from 'react';
import Script from 'next/script';
import Categories from '@/components/pages/Home/Categories/Categories';
import Hero from '@/components/pages/Home/Hero/Hero';
import NewsLetter from '@/components/pages/Home/NewsLetter/NewsLetter';
import Products from '@/components/pages/Home/Products/Products';
import Banner from '@/components/pages/Home/Banner/Banner';

const Homepage = () => {
    return (
        <main>
            <section aria-label="Banner">
                <Banner />
            </section>
            <section aria-label="Categories">
                <Categories />
            </section>
            <section aria-label="Products">
                <Products />
            </section>
            <section aria-label="Hero">
                <Hero />
            </section>
            <section aria-label="Newsletter">
                <NewsLetter />
            </section>

            {/* Tawk.to Live Chat Script */}
            <Script
                src="https://embed.tawk.to/6756fd5caf5bfec1dbd96f19/1ielsrdbl"
                strategy="lazyOnload"
                onLoad={() => console.log('Tawk.to script loaded successfully.')}
            />
        </main>
    );
};

export default Homepage;
