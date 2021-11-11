import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { api } from '../../services/api';
import AdminMenuContainer from "../../components/AdminMenu"
import { Container, ManageProductsSettings, ManageProductsList, ContainerProducts, BackgroundPosition, ProductTable, Total } from "./styles"

import addButton from '../../assets/addButton.svg';
import removeButton from '../../assets/removeButton.svg';
import trash from '../../assets/trash.svg';
import editButton from '../../assets/editButton.svg'


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

interface ProductWithPriceFormatted extends Product {
    priceFormatted: string;
}

interface CartItemsAmount {
    [key: number]: number;
}

interface Stock {
    id: number;
    amount: number;
}

export default function ManageAccountAdmin() {
    const [products, setProducts] = useState<ProductWithPriceFormatted[]>([]);
    const [stock, setStock] = useState<Stock[]>([]);
    const [fullProduct, setFullProduct] = useState<ProductWithPriceFormatted[]>([]);
    const { cart, removeProduct, updateStockAmount } = useCart();
    // const { addProduct, cart } = useCart();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Product[]>('products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }))

            setProducts(data);
        }

        async function loadStock() {
            const response = await api.get<Stock[]>('stock');

            const data = response.data;

            setStock(data);
        }

        loadProducts();
        loadStock();

        
        // console.log(fullProduct)
        // setFullProduct(products.map(product => ({...product, ...stock.find(stock => stock.id === product.id)})))

    }, []);


    function handleProductIncrement(product: Product) {
        updateStockAmount({
            productId: product.id,
            amount: product.amount + 1
        })
    }

    function handleProductDecrement(product: Product) {
        updateStockAmount({
            productId: product.id,
            amount: product.amount - 1
        })
    }

    return (
        <Container>
            <AdminMenuContainer/>
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
                                <tr key={product.id}>
                                    <td>
                                        <img className="productImg" src={product.image} alt={product.title} />
                                    </td>
                                    <td>
                                        <input value={product.title}/>
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
                                            <input id="stock"
                                                type="text"
                                                readOnly
                                                value="5"
                                            />
                                            <button
                                                type="button"
                                                // onClick={() => handleStockIncrement(product, 5)}
                                            >
                                                <img className="crementImg" src={addButton} alt="add-button" />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>{product.priceFormatted}</strong>
                                    </td>
                                    {/* <td>
                                        <button
                                            type="button"
                                            data-testid="remove-product"
                                            onClick={() => handleRemoveProduct(product.id)}
                                        >
                                            <img className="crementImg" src={trash} alt="trash" />
                                        </button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </ProductTable>

                    <footer>
                        <button type="button">New product</button>
                    </footer>
                </ContainerProducts>
            </ManageProductsSettings>
        </Container>
    )
}