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

            <div className='flex flex-col md:flex-row gap-6 md:gap-12 pb-12'>

                {/* image gallery */}
                <ProductImages product={product} />

                {/* product details */}
                <div className='space-y-3 font-semibold'>
                    <div className='flex items-center gap-2 text-base'>
                        <span>All</span>
                        <span className='opacity-80 text-xl'><RiArrowRightSLine /></span>
                        <span>{product?.title}</span>
                    </div>
                    {
                        product?.stock > 20 ?
                        <p className='bg-green-600 text-white text-xs px-3 py-1 inline-block'>In Stock</p>
                        :
                        <p className='bg-red-600 text-white text-xs px-3 py-1 inline-block'>Low Stock</p>
                    }
                    <h2 className='text-2xl md:text-3xl font-semibold'>{product?.title}</h2>
                    <ProductRating rating={'4.3'} />
                    <p>Price: ${product?.price}</p>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <span>Sizes:</span>
                        {
                            product?.sizes.map(size =>
                                <p key={size} className={`${size?.length < 1 ? "hidden" : ""} px-3 py-1 bg-secondary text-white`}>{size}</p>
                            )
                        }
                    </div>
                    <p>Category: <span className='bg-secondary text-white px-2 py-1'>{product?.category}</span></p>
                </div>

            </div>

        </section>
    );
};

export default ProductPage;