import React from 'react';
import Card from '@/components/shared/Card/Card';
import getProducts from '@/libs/getProducts';
import SearchProducts from '@/components/pages/Products/SearchProducts/SearchProducts';
import Link from 'next/link';


const ProductsPage = async () => {

    const products = await getProducts();

    console.log(products);

    return (
        <section>
            <div className='flex gap-2 mt-5'>
                <Link href={'/'} className='opacity-70'>Home</Link>
                <span>/</span>
                <Link href={'/products'}>Products</Link>
            </div>
            {/* search form */}
            <div className='max-w-sm mx-auto'>
               <SearchProducts />
            </div>
            {/* products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 pb-14'>
                {
                    products.map(product =>
                        <Card key={product?._id} product={product} />
                    )
                }
            </div>
        </section>
    );
};

export default ProductsPage;