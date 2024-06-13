export default async function getCategoryProducts (category) {

    const response = await fetch(`http://localhost:4000/products/category/${category}`);

    return response.json();

}