import { formatPrice } from '../../util/format';
import UserMenu from '../../components/UserMenu';
import { Order } from '../../../type';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import {
    Container,
    PurchaseHistorySettings,
    PurchaseHistoryList,
    ContainerProducts,
    ProductTable
} from "./styles"

export default function PurchaseHistory() {
    const [order, setOrder] = useState<Order[]>([]);

    useEffect(() => {
        async function loadProducts() {
            console.log("teste 1");
            const allOrders = await api.get<Order[]>('/orders');
            const customerFromStorage = localStorage.getItem('@Grupo4:customer');

            console.log("teste" + allOrders);

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
                            {order.map(product => (product.items.map(items => {
                                <tr key={product._id}>
                                    <td>
                                        {/* <img className="productImg" src={items.image} alt={items.title} /> */}
                                    </td>
                                    <td>
                                        {/* <p>{items.title}</p> */}
                                    </td>
                                    <td>
                                        <div>
                                            {/* <p>{items.amount}</p> */}
                                        </div>
                                    </td>
                                    <td>
                                        {/* <strong>{items.priceFormatted}</strong> */}
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