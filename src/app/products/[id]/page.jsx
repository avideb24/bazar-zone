import React from 'react';
import getSingleProduct from '@/libs/getSingleProduct';
import ProductImages from '@/components/pages/ProductDetails/ProductImages/ProductImages';
import { RiArrowRightSLine } from "react-icons/ri";
import ProductRating from '@/components/pages/ProductDetails/ProductRating/ProductRating';
import Button2 from '@/components/shared/Button2/Button2';

const ProductPage = async ({ params }) => {

    const { id } = params;

    const product = await getSingleProduct(id);

    // console.log(product);

    return (
        <section>

            <div className='flex items-center gap-2 pt-4 pb-10'>
                <span className='opacity-75'>All</span>
                <span><RiArrowRightSLine /></span>
                <span className='opacity-75'>Products</span>
                <span><RiArrowRightSLine /></span>
                <span>{product?.title}</span>
            </div>

            <div className='flex flex-col md:flex-row gap-6 md:gap-12 pb-12'>

                {/* image gallery */}
                <ProductImages product={product} />

                {/* product details */}
                <div className='space-y-3 font-semibold'>
                    {
                        product?.stock > 20 ?
                        <p className='bg-green-600 text-white text-xs px-3 py-1 inline-block'>In Stock</p>
                        :
                        <p className='bg-red-600 text-white text-xs px-3 py-1 inline-block'>Low Stock</p>
                    }
                    <h2 className='text-2xl md:text-3xl font-semibold'>{product?.title}</h2>
                    <ProductRating rating={'4.3'} />
                    <p className='flex items-center gap-2'>Price: <span className='text-xl md:text-2xl'>${product?.price}</span></p>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <span>Sizes:</span>
                        {
                            product?.sizes.map(size =>
                                <p key={size} className={`${size?.length < 1 ? "hidden" : ""} text-secondary`}>{size}</p>
                            )
                        }
                    </div>
                    <div>
                        <div>

                        </div>
                        <button><Button2 btnText={'Add To Cart'} /></button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default ProductPage;