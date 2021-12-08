// Tela de Sign Up do sistema
import { Link } from 'react-router-dom';
import { Container, UserFieldsContainer } from "./styles"

import signUpImg from '../../assets/login_1.svg'
import { api } from '../../services/api';

import { Customer } from '../../../type'
import { toast } from 'react-toastify';

// Registra o usuário no banco de dados
async function registerUser() {
  try {
    const user = {
      name: (document.getElementById("input-name") as HTMLInputElement).value,
      email: (document.getElementById("input-email") as HTMLInputElement).value,
      password: (document.getElementById("input-password") as HTMLInputElement).value,
      address: (document.getElementById("input-address") as HTMLInputElement).value,
      phone: (document.getElementById("input-phone") as HTMLInputElement).value
    }

    await api.post<Customer>('/customers', user);

    toast.success('Success, account created')
  } catch {
    toast.error('Failed trying to create account');
  }
}

export default function SignUp() {
  return (
    <Container>

      <img src={signUpImg} alt="Outsider Footwear" />

      <UserFieldsContainer>
        <p style={{ gridArea: "sign_in_label", fontSize: "28px" }}>
          Sign Up
        </p>

        <p style={{ gridArea: "name_label", alignSelf: "center" }}>
          Name
        </p>
        <input id="input-name" style={{ gridArea: "name_input" }} />

        <p style={{ gridArea: "email_label", alignSelf: "center" }}>
          Email
        </p>
        <input id="input-email" style={{ gridArea: "email_input" }} />

        <p style={{ gridArea: "password_label", alignSelf: "center" }}>
          Password
        </p>
        <input id="input-password" style={{ gridArea: "password_input" }} />

        <p style={{ gridArea: "address_label", alignSelf: "center" }}>
          Address
        </p>
        <input id="input-address" style={{ gridArea: "address_input" }} />

        <p style={{ gridArea: "phone_label", alignSelf: "center" }}>
          Phone
        </p>
        <input id="input-phone" style={{ gridArea: "phone_input" }} />

        <p style={{ gridArea: "login_button", alignSelf: "center" }}>
          <Link to='/'>
            <button onClick={() => { registerUser() }}>
              Create Account
            </button>
          </Link>
        </p>

        <p style={{ gridArea: "sign_in_link", alignSelf: "center", justifySelf: "center" }}>
          Already have an account? <Link to='/signin'>Sign in</Link>
        </p>
      </UserFieldsContainer>
    </Container>
  )
}
