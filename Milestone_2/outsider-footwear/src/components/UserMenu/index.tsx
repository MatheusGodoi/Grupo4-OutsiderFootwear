import { Link } from "react-router-dom"
import { Container, AccountSettingsContainer } from "./styles"

export default function UserMenu() {
    return (
        <Container>
            <AccountSettingsContainer>
                <Link to="/purchasehistory">Purchase History</Link >
                <hr></hr>
                <Link to="/manageaccount"><strong>Account</strong></Link >
                <a href="">Notifications</a>
                <a href="">Help</a>
            </AccountSettingsContainer>
        </Container>
    )
}