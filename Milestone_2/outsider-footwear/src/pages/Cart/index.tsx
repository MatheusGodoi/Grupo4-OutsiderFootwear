import React from 'react';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import addButton from '../../assets/addButton.svg';
import removeButton from '../../assets/removeButton.svg';
import trash from '../../assets/trash.svg';
import { BackgroundPosition, Container, ProductTable, Total } from './styles';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export default function Cart() {
    const { cart, removeProduct, updateProductAmount, historyList, updatePurchaseHistory } = useCart();


    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subTotal: formatPrice(product.price * product.amount)
    }))
    const total =
        formatPrice(
            cart.reduce((sumTotal, product) => {
                return sumTotal + (product.amount * product.price);
            }, 0)
        )

    function handleProductIncrement(product: Product) {
        updateProductAmount({
            productId: product.id,
            amount: product.amount + 1
        })
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({
            productId: product.id,
            amount: product.amount - 1
        })
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId);
    }

    return (
        <BackgroundPosition>
            <Container>
                <ProductTable>
                    <thead>
                        <tr>
                            <th aria-label="product" />
                            <th>Product</th>
                            <th>Qnt</th>
                            <th>Subtotal</th>
                            <th aria-label="delete" />
                        </tr>
                    </thead>
                    <tbody>
                        {cartFormatted.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img className="productImg" src={product.image} alt={product.title} />
                                </td>
                                <td>
                                    <p>{product.title}</p>
                                    <span>{product.priceFormatted}</span>
                                </td>
                                <td>
                                    <div>
                                        <button
                                            type="button"
                                            disabled={product.amount <= 1}
                                            onClick={() => handleProductDecrement(product)}
                                        >
                                            <img className="crementImg" src={removeButton} alt="remove-button" />
                                        </button>
                                        <input
                                            type="text"
                                            readOnly
                                            value={product.amount}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleProductIncrement(product)}
                                        >
                                            <img className="crementImg" src={addButton} alt="add-button" />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{product.subTotal}</strong>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        data-testid="remove-product"
                                        onClick={() => handleRemoveProduct(product.id)}
                                    >
                                        <img className="crementImg" src={trash} alt="trash" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ProductTable>

                <footer>
                    <button
                        type="button"
                        onClick={() => {
                            if (historyList) {
                                updatePurchaseHistory();
                                console.log('está no historylist')
                            } else {
                                localStorage.setItem('@Group4:purchaseHistory', JSON.stringify(cart))
                                console.log('está FORA DO historylist')
                            }
                        }
                        }
                    >
                        CHECKOUT
                    </button>

                    <Total>
                        <p>TOTAL</p>
                        <p>{total}</p>
                    </Total>
                </footer>
            </Container>
        </ BackgroundPosition>
    );
};
