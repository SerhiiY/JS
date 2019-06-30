const products = [
    {
        name: "TV",
        price: 200,
    },
    {
        name: "PS4",
        price: 100,
    },
    {
        name: "Phone",
        price: 50,
    },
];

export const getProductByName = name => 
    products.find(product => product.name === name);