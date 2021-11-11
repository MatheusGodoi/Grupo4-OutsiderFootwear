import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { Container, PurchaseHistorySettings, PurchaseHistoryList, ContainerProducts, ProductTable } from "./styles"

import AdminMenu from '../../components/AdminMenu';


export default function PurchaseHistoryAdmin() {
    const { historyList } = useCart();

    const historyListUpdated = historyList.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
    }))

    return (
        <Container>
            <AdminMenu />

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
                            {historyListUpdated.map(product => (
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