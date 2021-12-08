import { useState } from 'react'
import { useCart } from '../../hooks/useCart';

import { Container, ProductDetails, Button } from './styles'
import addToCart from '../../assets/addToCart.svg'
import { Product } from '../../../type';

interface ProductWithPriceFormatted extends Product {
    priceFormatted: string;
}

interface CartItemsAmount {
    [key: string]: number;
}

export function ProductInfo() {
    const [productInfo, setProductInfo] = useState<ProductWithPriceFormatted>(() => {
        const storageProductInfo = localStorage.getItem('@Group4:productInfo');

        if (storageProductInfo) {
            return JSON.parse(storageProductInfo);
        }
    });

    const { addProduct, cart } = useCart();

    const cartItemsAmount = cart.reduce((sumAmount, product) => {
        const newSumAmount = { ...sumAmount };
        newSumAmount[product._id] = product.amount;

        return newSumAmount;
    }, {} as CartItemsAmount)

    function handleAddProduct(id: string) {
        addProduct(id);
    }


    return (
        <Container>
            <ProductDetails>
                <p>{productInfo.title}</p>
                <img src={productInfo.image} alt={productInfo.title} />
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro optio quibusdam provident recusandae at vero beatae
                    pariatur voluptate voluptates mollitia quos cumque, atque,
                    veniam quam aut quis magnam, minima tenetur?
                </p>
                <p className="amount">{productInfo.amount} in Stock</p>
                <Button
                    type="button"
                    onClick={() => handleAddProduct(productInfo._id)}
                >
                    <p>{productInfo.priceFormatted}</p>
                    <img src={addToCart} alt="add-to-cart" />
                    <p>{cartItemsAmount[productInfo._id] || 0}</p>
                </Button>
            </ProductDetails>
        </Container>
    )
}