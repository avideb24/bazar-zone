import Hero from '@/components/pages/Home/Hero/Hero';
import Button from '@/components/shared/Button/Button';
import Card from '@/components/shared/Card/Card';
import React from 'react';

const Homepage = () => {
    return (
        <main className=''>
            <Hero />
            <Card />
            <Button btnText={'Shop Now'} />
        </main>
    );
};

export default Homepage;