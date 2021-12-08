import React, { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Product } from '../../type';
import { api } from '../services/api';

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: string;
    amount: number;
}

interface CartContextData {
    cart: Product[];
    addProduct: (productId: string) => Promise<void>;
    removeProduct: (productId: string) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem('@Group4:cart');

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (productId: string) => {
        try {
            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => productId === product._id);

            const stock = await api.get(`/products/${productId}`);


            const stockAmount = stock.data.amount;
            const currentAmount = productExists ? productExists.amount : 0;
            const amount = currentAmount + 1;

            if (amount > stockAmount) {
                toast.error('Quantity out of stock.');
                return;
            }

            if (productExists) {
                productExists.amount = amount;
            } else {
                const product = await api.get(`/products/${productId}`);

                const newProduct = {
                    ...product.data,
                    amount: 1
                }
                updatedCart.push(newProduct);
            }

            setCart(updatedCart);
            localStorage.setItem('@Group4:cart', JSON.stringify(updatedCart));
        } catch {
            toast.error('Error adding the product.');
        }
    };

    const removeProduct = (productId: string) => {
        try {
            const indexFinder = cart.findIndex(product => productId === product._id);

            if (indexFinder >= 0) {
                const newCart = (cart.slice(0, indexFinder)).concat(cart.slice(indexFinder + 1, cart.length));

                setCart(newCart);
                localStorage.setItem('@Group4:cart', JSON.stringify(newCart));
            } else {
                throw Error();
            }
        } catch {
            toast.error('Error removing the product.');
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount <= 0) {
                return;
            }

            const stock = await api.get(`/products/${productId}`);
            const stockAmount = stock.data.amount;

            if (amount > stockAmount) {
                toast.error('Quantity out of stock.');
                return;
            }

            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => productId === product._id);

            if (productExists) {
                productExists.amount = amount;
                setCart(updatedCart);
                localStorage.setItem('@Group4:cart', JSON.stringify(updatedCart));
            } else {
                throw Error();
            }
        } catch {
            toast.error('Error updating the product amount.');
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                removeProduct,
                updateProductAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}