import {getProductByName} from "../products";

describe('products', () => {
    it('should find product object by name', () => {
        const product = getProductByName("PS4");
        expect(product).toEqual({name: "PS4", price: 100});
        expect(product).toHaveProperty('name', 'PS4');
    });
    it('Is there product by name', () => {
        const product = getProductByName("Mango");
        expect(product).toBeUndefined();
    })
})