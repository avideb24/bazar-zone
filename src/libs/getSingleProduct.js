export default async function getSingleProduct (id) {

    const response = await fetch(`http://localhost:4000/products/${id}`);

    return response.json();

}