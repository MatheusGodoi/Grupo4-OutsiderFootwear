import { useEffect, useState } from 'react'
import { formatPrice } from '../../util/format';
import { api } from '../../services/api';
import { useCart } from '../../hooks/useCart';

import { Button, OptionList, ProductList, ProductListContainer } from "./styles"
import addToCart from '../../assets/addToCart.svg'
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductWithPriceFormatted extends Product {
    priceFormatted: string;
}

interface CartItemsAmount {
    [key: number]: number;
}

export default function Home() {
    const [products, setProducts] = useState<ProductWithPriceFormatted[]>([]);
    const { addProduct, cart } = useCart();

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

    localStorage.setItem('@Group4:stock', JSON.stringify(products));

    const cartItemsAmount = cart.reduce((sumAmount, product) => {
        const newSumAmount = { ...sumAmount };
        newSumAmount[product.id] = product.amount;

        return newSumAmount;
    }, {} as CartItemsAmount)

    function handleAddProduct(id: number) {
        addProduct(id);
    }

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
                        <li key={product.id}>
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
                                onClick={() => handleAddProduct(product.id)}
                            >
                                <p>{product.priceFormatted}</p>
                                <img src={addToCart} alt="add-to-cart" />
                                <p>{cartItemsAmount[product.id] || 0}</p>
                            </Button>
                        </li>
                    ))}
                </ProductList>
            </ProductListContainer>
        </>
    )
}