import { useStock } from '../../hooks/useStock';
import { formatPrice } from '../../util/format';

import {
    Container,
    ManageProductsSettings,
    ManageProductsList,
    ContainerProducts,
    ProductTable
} from "./styles"

import addButton from '../../assets/addButton.svg';
import removeButton from '../../assets/removeButton.svg';
import AdminMenu from '../../components/AdminMenu';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export default function ManageAccountAdmin() {
    const { stock, updateProductAmountToStock } = useStock();

    const stockFormatted = stock.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
    }));

    function handleStockIncrement(product: Product) {
        updateProductAmountToStock({
            productId: product.id,
            amount: product.amount + 1
        })
    }

    function handleStockDecrement(product: Product) {
        updateProductAmountToStock({
            productId: product.id,
            amount: product.amount - 1
        })
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
                            {stockFormatted.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <img className="productImg" src={product.image} alt={product.title} />
                                    </td>
                                    <td>
                                        <input
                                            className="description"
                                            value={product.title}
                                        />
                                    </td>
                                    <td>
                                        <div>
                                            <button
                                                type="button"
                                                disabled={product.amount <= 1}
                                                onClick={() => handleStockDecrement(product)}
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
                                                onClick={() => handleStockIncrement(product)}
                                            >
                                                <img className="crementImg" src={addButton} alt="add-button" />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            className="price"
                                            value={"$" + product.price}>
                                        </input>
                                    </td>
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