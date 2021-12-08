import { useEffect, useState } from 'react'
import { formatPrice } from '../../util/format';
import { api } from '../../services/api';
import { useCart } from '../../hooks/useCart';

import { Button, ProductList, ProductListContainer } from "./styles"
import addToCart from '../../assets/addToCart.svg'
import { Link } from 'react-router-dom';
import { Product } from '../../../type';

interface ProductWithPriceFormatted extends Product {
    priceFormatted: string;
}

interface CartItemsAmount {
    [key: string]: number;
}

export default function Home() {
    const [products, setProducts] = useState<ProductWithPriceFormatted[]>([]);
    const { addProduct, cart } = useCart();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Product[]>('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }))
            setProducts(data);
        }

        loadProducts();
    }, []);

    const cartItemsAmount = cart.reduce((sumAmount, product) => {
        const newSumAmount = { ...sumAmount };
        newSumAmount[product._id] = product.amount;

        return newSumAmount;
    }, {} as CartItemsAmount)

    function handleAddProduct(id: string) {
        addProduct(id);
    }

    return (
        <>
            <ProductListContainer>
                <ProductList>
                    {products.map(product => (
                        <li key={product._id}>
                            <Link
                                to="/productinfo"
                                onClick={() => {
                                    localStorage.setItem("@Group4:productInfo",
                                        JSON.stringify(product))
                                }}
                            >
                                <img src={product.image} alt="product" />
                            </Link>
                            <p>{product.title}</p>
                            <Button
                                type="button"
                                onClick={() => handleAddProduct(product._id)}
                            >
                                <p>{product.priceFormatted}</p>
                                <img src={addToCart} alt="add-to-cart" />
                                <p>{cartItemsAmount[product._id] || 0}</p>
                            </Button>
                        </li>
                    ))}
                </ProductList>
            </ProductListContainer>
        </>
    )
}