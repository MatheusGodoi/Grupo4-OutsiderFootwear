import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { Container, PurchaseHistorySettings, PurchaseHistoryList, ContainerProducts, ProductTable } from "./styles"

import AdminMenu from '../../components/AdminMenu';
import { useEffect, useState } from 'react';
import { Order } from '../../../type';
import { api } from '../../services/api';


export default function PurchaseHistoryAdmin() {
    const [order, setOrder] = useState<Order[]>([]);

    useEffect(() => {
        async function loadProducts() {
            const allOrders = await api.get<Order[]>('/orders');
            const customerFromStorage = localStorage.getItem('@Grupo4:customer');

            if (customerFromStorage) {
                const customer = JSON.parse(customerFromStorage);
                const orderList: Order[] = [];

                allOrders.data.map(order => {
                    if (customer._id == order.customer) {
                        orderList.push(order);
                    }
                });

                setOrder(orderList);
            } else {
                alert('Erro')
            }
        }

        loadProducts();
    }, []);
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
                            {order.map(product => (
                                product.items.map(item => {
                                    <tr key={product._id}>
                                        <td>
                                            <img className="productImg" src={item.image} alt={item.title} />
                                        </td>
                                        <td>
                                            <p>{item.title}</p>
                                        </td>
                                        <td>
                                            <div>
                                                <p>{item.amount}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>{item.priceFormatted}</strong>
                                        </td>
                                    </tr>
                                })))}
                        </tbody>
                    </ProductTable>

                </ContainerProducts>
            </PurchaseHistorySettings>
        </Container>
    )
}