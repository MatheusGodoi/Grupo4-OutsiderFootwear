// Tela para alteração de informações do perfil do usuário
import { Container, AccountSettings, AccountSettingsList } from "./styles"
import AdminMenu from "../../components/AdminMenu"
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Customer } from "../../../type";

export default function ManageAccountAdmin() {
    // Leitura de todos os campos do perfil e atualização no banco de dados 
    async function updateCustomer() {
        try {
            const user = localStorage.getItem('@Grupo4:customer');
            const updatedUser = {
                name: document.querySelector<HTMLInputElement>('input[id="input-name"]')?.value,
                email: document.querySelector<HTMLInputElement>('input[id="input-email"]')?.value,
                address: document.querySelector<HTMLInputElement>('input[id="input-address"]')?.value,
                phone: document.querySelector<HTMLInputElement>('input[id="input-phone"]')?.value,
                gender: document.querySelector<HTMLInputElement>('select[id="input-gender"]')?.value,
                birthday: document.querySelector<HTMLInputElement>('input[id="input-birthday"]')?.value,
            }
            if (user) {
                const parsedUser = JSON.parse(user);
                const userFromDb = await api.get<Customer>(`/customers/${parsedUser.email}`)

                await api.put(`/customers/${userFromDb.data._id}`, updatedUser);
                localStorage.setItem('@Grupo4:customer', JSON.stringify(updatedUser));
            }

            toast.success('Success updating account informations')
        } catch {
            toast.error('Failed trying to update account informations');
        }

    }

    // Carregamento das informações do usuário nos inputs do perfil
    window.onload = () => {
        const data = localStorage.getItem('@Grupo4:customer');

        if (data) {
            const userInformation = JSON.parse(data)
            document.getElementById("input-name")?.setAttribute("value", userInformation.name);
            document.getElementById("input-email")?.setAttribute("value", userInformation.email);
            document.getElementById("input-address")?.setAttribute("value", userInformation.address);
            document.getElementById("input-phone")?.setAttribute("value", userInformation.phone);
        }
    }

    return (
        <Container>
            <AccountSettings>
                <AdminMenu />
                <AccountSettingsList>
                    <h1>Account Settings</h1>
                    <form>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr><td>Username</td><td><input id="input-name" type="text"  ></input></td></tr>
                                <tr><td>Email</td><td><input id="input-email" type="email" ></input></td></tr>
                                <tr><td>Gender</td><td><select id="input-gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select></td></tr>
                                <tr><td>Birthday</td><td><input id="input-birthday" type="date" ></input></td></tr>
                                <tr><td>Address</td><td><input id="input-address" type="text" ></input></td></tr>
                                <tr><td>Phone</td><td><input id="input-phone" type="text"></input></td></tr>
                            </tbody>
                        </table>

                        <button
                            type="button"
                            onClick={() => { updateCustomer() }}
                        >
                            Save
                        </button>
                    </form>
                </AccountSettingsList>
            </AccountSettings>
        </Container>
    )
}