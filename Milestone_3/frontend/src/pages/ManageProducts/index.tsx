import { formatPrice } from '../../util/format';

import {
    Container,
    ManageProductsSettings,
    ManageProductsList,
    ContainerProducts,
    ProductTable
} from "./styles"

import trash from '../../assets/trash.svg';
import AdminMenu from '../../components/AdminMenu';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Product } from '../../../type';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


interface ProductWithPriceFormatted extends Product {
    priceFormatted: string;
}

export default function ManageProducts() {
    const [products, setProducts] = useState<ProductWithPriceFormatted[]>([]);

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

    async function updateProduct(product: Product) {
        try {
            const title_id = "input[id=title" + product._id + "]";
            const amount_id = "input[id=amount" + product._id + "]";
            const price_id = "input[id=price" + product._id + "]";
            const updatedProduct = {
                title: document.querySelector<HTMLInputElement>(title_id)?.value,
                amount: Number(document.querySelector<HTMLInputElement>(amount_id)?.value),
                price: Number(document.querySelector<HTMLInputElement>(price_id)?.value),
            }

            await api.put<Product>(`/products/${product._id}`, updatedProduct);

            toast.success('Success updating product informations')
        } catch {
            toast.error('Failed trying to product informations');
        }

        const updatedProducts = await api.get(`/products`);
        setProducts(updatedProducts.data);
    }

    async function removeProduct(product: Product) {
        try {
            await api.delete(`/products/${product._id}`);
            toast.success('Success deleting product')

        } catch {
            toast.error('Failed trying to delete product');
        }

        const updateProducts = await api.get('/products');
        setProducts(updateProducts.data);
    }

    return (
        <Container>
            <AdminMenu />

            <ManageProductsSettings>
                <ManageProductsList>
                    <h1>Manage Products</h1>
                </ManageProductsList>
                <ContainerProducts>
                    <ProductTable>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Description</th>
                                <th>Inventory Qnt.</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td>
                                        <img className="productImg" src={product.image} alt={product.title} />
                                    </td>
                                    <td>
                                        <input
                                            id={"title" + product._id}
                                            className="description"
                                            defaultValue={product.title}
                                        />
                                    </td>
                                    <td>
                                        <div>
                                            <input
                                                id={"amount" + product._id}
                                                type="text"
                                                defaultValue={product.amount}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            id={"price" + product._id}
                                            className="price"
                                            defaultValue={product.price}
                                        >
                                        </input>
                                        <button id="update-button" onClick={() => updateProduct(product)}> Update </button>
                                        <button
                                            type="button"
                                            data-testid="remove-product"
                                            onClick={() => removeProduct(product)}
                                        >
                                            <img className="crementImg" src={trash} alt="trash" />
                                        </button>
                                    </td>

                                </tr>

                            ))}
                        </tbody>
                    </ProductTable>

                    <footer>

                        <Link to="/createnewproduct"><button>Create Product</button></Link>
                    </footer>
                </ContainerProducts>
            </ManageProductsSettings>
        </Container>
    )
}