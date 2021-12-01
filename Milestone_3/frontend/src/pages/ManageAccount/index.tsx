import { Container, AccountSettings, AccountSettingsList } from "./styles"
import UserMenu from "../../components/UserMenu"

export default function ManageAccount() {
    return (
        <Container>
            <AccountSettings>
                <UserMenu />

                <AccountSettingsList>
                    <h1>Account Settings</h1>
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