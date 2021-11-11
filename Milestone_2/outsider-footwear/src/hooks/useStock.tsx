import React, { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

interface StockProviderProps {
    children: ReactNode;
}

interface UpdateProductAmountToStock {
    productId: number;
    amount: number;
}

interface StockContextData {
    stock: Product[];
    addProductToStock: (productId: number) => Promise<void>;
    updateProductAmountToStock: ({ productId, amount }: UpdateProductAmountToStock) => void;
}

const StockContext = createContext<StockContextData>({} as StockContextData);

export function StockProvider({ children }: StockProviderProps): JSX.Element {
    const [stock, setStock] = useState<Product[]>(() => {
        const storagedStock = localStorage.getItem('@Group4:stock');

        if (storagedStock) {
            return JSON.parse(storagedStock);
        }

        return [];
    });

    const addProductToStock = async (productId: number) => {
        try {
            const updatedStock = [...stock];
            const productExists = updatedStock.find(product => productId === product.id);

            const productData = await api.get(`/products/${productId}`);

            const stockAmount = productData.data.amount;
            const currentAmount = productExists ? productExists.amount : 0;
            const amount = currentAmount + 1;

            if (productExists) {
                productExists.amount = amount;
            } else {
                const product = await api.get(`/products/${productId}`);

                const newProduct = {
                    ...product.data,
                    amount: 1
                }
                updatedStock.push(newProduct);
            }

            setStock(updatedStock);
            localStorage.setItem('@Group4:stock', JSON.stringify(updatedStock));
        } catch {
            toast.error('Error adding the product to stock.');
        }
    };

    const updateProductAmountToStock = async ({
        productId,
        amount,
    }: UpdateProductAmountToStock) => {
        try {
            if (amount <= 0) {
                return;
            }

            const updatedStock = [...stock];
            const productExists = updatedStock.find(product => productId === product.id);

            if (productExists) {
                productExists.amount = amount;
                setStock(updatedStock);
                localStorage.setItem('@Group4:stock', JSON.stringify(updatedStock));
            } else {
                throw Error();
            }
        } catch {
            toast.error('Error updating the product amount.');
        }
    };

    return (
        <StockContext.Provider
            value={{ stock, addProductToStock, updateProductAmountToStock }}
        >
            {children}
        </StockContext.Provider>
    );
}

export function useStock(): StockContextData {
    const context = useContext(StockContext);

    return context;
}