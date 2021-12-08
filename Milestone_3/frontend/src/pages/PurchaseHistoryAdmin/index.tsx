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
                    if (customer._id == order.customer._id) {
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
                                <th>Order ID</th>
                                <th aria-label="title" />
                                <th>Status</th>
                                <th>Created Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map(product =>
                            (
                                <tr key={product._id}>

                                    <td>
                                        <p>{product._id}</p>
                                    </td>
                                    <td>
                                        <p>{product.status}</p>
                                    </td>
                                    <td>
                                        <p>{product.createDate}</p>
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