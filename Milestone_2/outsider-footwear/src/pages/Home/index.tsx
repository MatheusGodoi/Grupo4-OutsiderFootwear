import { useEffect, useState } from 'react'
import { formatPrice } from '../../util/format';
import { api } from '../../services/api';

import { Button, OptionList, ProductList, ProductListContainer } from "./style"
import addToCart from '../../assets/addToCart.svg'

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductWithPriceFormatted extends Product {
    priceFormatted: string;
}

export default function Home() {
    const [products, setProducts] = useState<ProductWithPriceFormatted[]>([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Product[]>('products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }))
            setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <>
            <OptionList>
                <div>
                    <select>
                        <option value="priceLowHigh">Sort By: Price Low-High</option>
                        <option value="priceHighLow">Sort By: Price High-Low</option>
                        <option value="mostPopular">Sort By: Most Popular</option>
                    </select>

                    <p>6 results</p>
                </div>
            </OptionList>

            <ProductListContainer>
                <ProductList>
                    {products.map(product => (
                        <li>
                            <a href="">
                                <img src={product.image} alt="product" />
                            </a>
                            <p>{product.title}</p>
                            <Button type="button">
                                <p>{product.priceFormatted}</p>
                                <img src={addToCart} alt="add-to-cart" />
                                <p>0</p>
                            </Button>
                        </li>
                    ))}
                </ProductList>
            </ProductListContainer>
        </>
    )
}