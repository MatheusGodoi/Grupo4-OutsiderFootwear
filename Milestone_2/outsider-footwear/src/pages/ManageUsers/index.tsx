import AdminMenu from "../../components/AdminMenu"
import { AccountSettings, AccountSettingsList } from "../ManageUsers/styles"
import { Container, ContainerProducts, ProductTable } from "./styles"

import trashButton from '../../assets/trash.svg';

export default function ManageUsers() {
    return (
        <Container>
            <AccountSettings>
                <AdminMenu />

                <AccountSettingsList>
                    <ContainerProducts>
                        <ProductTable>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>E-Mail</th>
                                    <th>Delete account</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr key="1">
                                        <td>
                                            <p>Username_1</p>
                                        </td>
                                        <td>
                                            <p>username_1@email.com</p>
                                        </td>
                                        <td>
                                            <div>
                                            <button type="button">
                                                <img className="deleteImg" src={trashButton} alt="delete-user" />
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr key="2">
                                        <td>
                                            <p>Username_2</p>
                                        </td>
                                        <td>
                                            <p>username_2@email.com</p>
                                        </td>
                                        <td>
                                            <div>
                                            <button type="button">
                                                <img className="deleteImg" src={trashButton} alt="delete-user" />
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr key="3">
                                        <td>
                                            <p>Username_3</p>
                                        </td>
                                        <td>
                                            <p>username_3@email.com</p>
                                        </td>
                                        <td>
                                            <div>
                                            <button type="button">
                                                <img className="deleteImg" src={trashButton} alt="delete-user" />
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                            </tbody>
                        </ProductTable>
                    </ContainerProducts>
                </AccountSettingsList>
            </AccountSettings>
        </Container>
    )
}