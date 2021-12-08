import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { Container, PurchaseHistorySettings, PurchaseHistoryList, ContainerProducts, ProductTable } from "./styles"

import AdminMenu from '../../components/AdminMenu';
import { useEffect, useState } from 'react';
import { Order } from '../../../type';
import { api } from '../../services/api';


export default function PurchaseHistoryAdmin() {
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
                        {/* <tbody>
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
                        </tbody> */}
                    </ProductTable>

                </ContainerProducts>
            </PurchaseHistorySettings>
        </Container>
    )
}