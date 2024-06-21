export default async function getProducts () {

    const response = await fetch('https://bazar-zone-server.vercel.app/products');

    return response.json();

}