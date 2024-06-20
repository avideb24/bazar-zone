export default async function getSingleProduct (id) {

    const response = await fetch(`http://localhost:4000/products/${id}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return response.json();

}