
import Categories from '@/components/pages/Home/Categories/Categories';
import Hero from '@/components/pages/Home/Hero/Hero';
import NewsLetter from '@/components/pages/Home/NewsLetter/NewsLetter';
import Button from '@/components/shared/Button/Button';
import Card from '@/components/shared/Card/Card';
import getProducts from '@/libs/getProducts';
import Link from 'next/link';


const Homepage = async () => {

    const products = await getProducts();

    return (
        <main className=''>

            <Categories />

            <div>
                {
                    products.length == 0 ?
                        <h2>loading</h2>
                        :
                        <div>
                            <div className='flex justify-between gap-4 flex-wrap'>
                                {
                                    products.map(product =>
                                        <Card key={product._id} product={product} />
                                    )
                                }
                            </div>
                            <Link href={'/'} className='flex justify-center my-6'>
                                <Button btnText={'See All Products'} />
                            </Link>
                        </div>
                }
            </div>

            <Hero />

            <NewsLetter />

        </main>
    );
};

export default Homepage;