// Coffee: price_1M1WUUHP3GonjMT78Ttx2td6
// Sunglasses: price_1M1WVZHP3GonjMT7XeMSTYh0
// Camera: price_1M1WWAHP3GonjMT7WlVvGE0n

export const productsArray = [
    {
        id: "price_1M1WUUHP3GonjMT78Ttx2td6",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1M1WVZHP3GonjMT7XeMSTYh0",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1M1WWAHP3GonjMT7WlVvGE0n",
        title: "Camera",
        price: 39.99
    }
];

export function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

