import { Link } from "react-router-dom"
import { Container, AccountSettingsContainer } from "./styles"

export default function AdminMenu() {
    return (
        <Container>
            <AccountSettingsContainer>
                <Link to="/purchasehistoryadmin">Purchase History</Link>
                <hr></hr>
                <Link to="/manageaccountadmin"><strong>Account</strong></Link>
                <a href="">Notifications</a>
                <a>Help</a>
                {/* These three should appear only when the user is a system admin */}
                <hr></hr>
                <Link to="/manageproducts">Manage Products</Link>
                <Link to="/manageusers">Manage Users</Link>
            </AccountSettingsContainer>
        </Container>
    )
}