import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import UserMenu from '../../components/UserMenu';

import {
    Container,
    PurchaseHistorySettings,
    PurchaseHistoryList,
    ContainerProducts,
    ProductTable
} from "./styles"

export default function PurchaseHistory() {
    const { historyList } = useCart();

    const historyListFormatted = historyList.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
    }))

    return (
        <Container>
            <UserMenu />

            <PurchaseHistorySettings>

                <PurchaseHistoryList>
                    <h1>Purchase History</h1>
                </PurchaseHistoryList>

                <ContainerProducts>
                    <ProductTable>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th aria-label="title" />
                                <th>Qnt</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyListFormatted.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <img className="productImg" src={product.image} alt={product.title} />
                                    </td>
                                    <td>
                                        <p>{product.title}</p>
                                    </td>
                                    <td>
                                        <div>
                                            <p>{product.amount}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>{product.priceFormatted}</strong>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ProductTable>

                </ContainerProducts>
            </PurchaseHistorySettings>
        </Container>
    )
}