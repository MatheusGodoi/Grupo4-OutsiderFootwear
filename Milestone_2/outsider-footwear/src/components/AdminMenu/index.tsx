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
                {/* These three should appear only when the user is a system admin */}
                <hr></hr>
                <a>Manage Products</a>
                <a>Manage Users</a>
            </AccountSettingsContainer>
        </Container>
    )
}