import { Container, AccountSettingsContainer } from "./styles"

export default function AdminMenu() {
    return (
        <Container>
            <AccountSettingsContainer>
                <a>Purchase History</a>
                <hr></hr>
                <a><strong>Account</strong></a>
                <a href="">Notifications</a>
                <a>Help</a>
            </AccountSettingsContainer>
        </Container>
    )
}