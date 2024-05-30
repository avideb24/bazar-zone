'use client';

import React, { useEffect } from 'react';
import bannerImg from '../../../../../public/images/banner/banner.png';
import Image from 'next/image';
import Button2 from '@/components/shared/Button2/Button2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <section className='flex flex-col items-center gap-3 py-10'>
            <h2 className='text-2xl md:text-6xl font-bold' data-aos="fade-right">RITAS</h2>
            <p className='flex items-center gap-2'>
                <span className='opacity-80'>From:</span>
                <span className='text-lg md:text-xl font-semibold'>$650.00</span>
            </p>
            <Button2 btnText={'Shop Now'} />
            <Image src={bannerImg} className='mr-4' placeholder='blur' alt='Ritas - Banner Image' />
        </section>
    );
};

export default Banner;