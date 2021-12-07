import React from 'react';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import addButton from '../../assets/addButton.svg';
import removeButton from '../../assets/removeButton.svg';
import trash from '../../assets/trash.svg';
import { BackgroundPosition, Container, ProductTable, Total } from './styles';
import { Order, Product } from '../../../type';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export default function Cart() {
    const { cart, removeProduct, updateProductAmount } = useCart();


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
            productId: product._id,
            amount: product.amount + 1
        })
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({
            productId: product._id,
            amount: product.amount - 1
        })
    }

    function handleRemoveProduct(productId: string) {
        removeProduct(productId);
    }

    async function productCheckout(cart: Product[]) {
        const data = localStorage.getItem('@Grupo4:customer');

        try {
            if (data && cart.length >= 1) {
                const activeCustomer = JSON.parse(data);

                const checkoutList = {
                    customer: activeCustomer._id,
                    items: [{}]
                }

                cart.map(product => {
                    checkoutList.items.push({
                        quantity: product.amount,
                        product_id: product._id
                    })
                });

                await api.post<Order>('/orders', checkoutList);


                // Diminuir amount do produto
                cart.map(product => {
                    async function updateProductAmount() {
                        const productObj = await api.get(`/products/${product._id}`);
                        productObj.data.amount -= product.amount;

                        console.log(productObj.data.amount);

                        await api.put<Product>(`products/${product._id}`, productObj.data)
                    }
                    updateProductAmount();
                })

                localStorage.removeItem('@Group4:cart');

                toast.success('Successful purchase');

                setTimeout(() => { window.location.replace('http://' + window.location.host + '/') }, 3000);
            } else {
                if (!data) {
                    toast.error('Failed trying to purchase, please try to log in');
                } else {
                    toast.error('Failed trying to purchase, please add some item');
                }
            }
        } catch {
            toast.error('Failed trying to purchase');
        }
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
                            <tr key={product._id}>
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
                                        onClick={() => handleRemoveProduct(product._id)}
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
                            // if (historyList) {
                            //     updatePurchaseHistory();
                            // } else {
                            //     localStorage.setItem('@Group4:purchaseHistory', JSON.stringify(cart))
                            // }


                            productCheckout(cart);
                        }}
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
