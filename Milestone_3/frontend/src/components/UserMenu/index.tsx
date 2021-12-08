// Componente com as opções no menu do perfil do usuário sem permissão de admin
import { Link } from "react-router-dom"
import { Container, AccountSettingsContainer } from "./styles"

export default function UserMenu() {
    return (
        <Container>
            <AccountSettingsContainer>
                <Link to="/purchasehistory">Purchase History</Link >
                <hr></hr>
                <Link to="/manageaccount"><strong>Account</strong></Link >
                <p>Notifications</p>
                <p>Help</p>
            </AccountSettingsContainer>
        </Container>
    )
}