import React from 'react';
import getSingleProduct from '@/libs/getSingleProduct';
import ProductImages from '@/components/pages/ProductDetails/ProductImages/ProductImages';
import { RiArrowRightSLine } from "react-icons/ri";
import ProductRating from '@/components/pages/ProductDetails/ProductRating/ProductRating';

const ProductPage = async ({ params }) => {

    const { id } = params;

    const product = await getSingleProduct(id);

    // console.log(product);

    return (
        <section>

            <div className='flex gap-6 md:gap-12'>

                {/* image gallery */}
                <ProductImages product={product} />

                {/* product details */}
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 text-base'>
                        <span>All</span>
                        <span className='opacity-80 text-xl'><RiArrowRightSLine /></span>
                        <span>{product?.title}</span>
                    </div>
                    <h2 className='text-2xl md:text-3xl font-semibold'>{product?.title}</h2>
                    <ProductRating rating={'4.3'} />
                </div>

            </div>

        </section>
    );
};

export default ProductPage;