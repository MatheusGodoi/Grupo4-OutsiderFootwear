import { Container, AccountSettings, AccountSettingsList } from "./styles"
import editButton from '../../assets/editButton.svg'
import AdminMenu from "../../components/AdminMenu"

export default function ManageAccountAdmin() {
    return (
        <Container>
            <AccountSettings>
                <AdminMenu />
                <AccountSettingsList>
                    <h1>Account Settings
                        <a href="">
                            <img src={editButton} alt="Edit Profile" />
                        </a>
                    </h1>
                    <table>
                        <tr><td>Username</td><td><span>Username</span></td></tr>
                        <tr><td>Email</td><td><span>email@email.com</span></td></tr>
                        <tr><td>Gender</td><td><span>Gênero</span></td></tr>
                        <tr><td>Birthday</td><td><span>01/01/1991</span></td></tr>
                        <tr><td>Address</td><td><span>Rua Lorem Ipsum dolor, siat male</span></td></tr>
                        <tr><td>Phone</td><td><span>(99) 99999-9999)</span></td></tr>
                    </table>
                </AccountSettingsList>
            </AccountSettings>
        </Container>
    )
}