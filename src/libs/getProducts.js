export default async function getProducts () {

    const response = await fetch('http://localhost:4000/products');

    return response.json();

}