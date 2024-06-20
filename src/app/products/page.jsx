'use client';

import React, { useEffect, useState } from 'react';
import Card from '@/components/shared/Card/Card';
import getProducts from '@/libs/getProducts';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";
import SearchBox from '@/components/shared/SearchBox/SearchBox';


const ProductsPage = () => {

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    
    useEffect(() => {

        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
            setDisplayProducts(products);
        };

        fetchProducts();
            
    }, []);
    

    return (
        <section>
            <div className='flex items-center gap-2 mt-5'>
                <Link href={'/'} className='opacity-70'>Home</Link>
                <span><RiArrowRightSLine /></span>
                <span>Products</span>
            </div>

            {/* search form */}
            <div className='max-w-sm mx-auto'>
               <SearchBox products={products} setDisplayProducts={setDisplayProducts} />
            </div>

            {/* products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 pb-14'>
                {
                    displayProducts.map(product =>
                        <Card key={product?._id} product={product} />
                    )
                }
            </div>
        </section>
    );
};

export default ProductsPage;