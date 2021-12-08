import AdminMenu from "../../components/AdminMenu"
import { AccountSettings, AccountSettingsList } from "../ManageUsers/styles"
import { Container, ContainerProducts, ProductTable } from "./styles"

import trashButton from '../../assets/trash.svg';
import { useEffect, useState } from "react";
import { Customer } from "../../../type";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export default function ManageUsers() {
    const [userList, setUserList] = useState<Customer[]>([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/customers');
            const data = response.data;

            setUserList(data);
        }

        loadUsers();
    }, [])

    console.log(userList.map(user => user.name));

    async function deleteUser(user: Customer) {
        try {
            await api.delete(`/customers/${user._id}`);
            toast.success('Success deleting account');

            setTimeout(() => { window.location.replace('http://localhost:3000/manageusers') }, 3000);
        } catch {
            toast.error('Failed trying to delete account');
        }
    }

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
                                {userList.map(user => (
                                    <tr key={user._id}>
                                        <td>
                                            <p>{user.name}</p>
                                        </td>
                                        <td>
                                            <p>{user.email}</p>
                                        </td>
                                        <td>
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() => deleteUser(user)}
                                                >
                                                    <img
                                                        className="deleteImg"
                                                        src={trashButton}
                                                        alt="delete-user"
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </ProductTable>
                    </ContainerProducts>
                </AccountSettingsList>
            </AccountSettings>
        </Container>
    )
}