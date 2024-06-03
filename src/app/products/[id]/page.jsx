import getSingleProduct from '@/libs/getSingleProduct';
import Image from 'next/image';
import React from 'react';

const ProductPage = async({params}) => {

    const {id} = params;

    const product = await getSingleProduct(id);

    console.log(product);

    return (
        <section>

            <div>
            <h2>{product?.title}</h2>
            <Image src={product?.img1} width={500} height={500} alt={product?.title}></Image>
            </div>

        </section>
    );
};

export default ProductPage;