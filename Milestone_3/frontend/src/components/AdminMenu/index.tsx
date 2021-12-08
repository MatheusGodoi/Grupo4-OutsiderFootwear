// Componente com as opções no menu do perfil do admin
import { Link } from "react-router-dom"
import { Container, AccountSettingsContainer } from "./styles"

export default function AdminMenu() {
    return (
        <Container>
            <AccountSettingsContainer>
                <Link to="/purchasehistoryadmin">Purchase History</Link>
                <hr></hr>
                <Link to="/manageaccountadmin"><strong>Account</strong></Link>
                <p>Notifications</p>
                <p>Help</p>
                {/* These three should appear only when the user is a system admin */}
                <hr></hr>
                <Link to="/manageproducts">Manage Products</Link>
                <Link to="/manageusers">Manage Users</Link>
            </AccountSettingsContainer>
        </Container>
    )
}