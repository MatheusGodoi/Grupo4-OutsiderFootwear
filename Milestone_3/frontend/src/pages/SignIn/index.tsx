import { Link } from 'react-router-dom';
import { Container, Button, UserInput, UserFieldsContainer, PasswordInput } from "./styles"

import signInImg from '../../assets/undraw_enter_uhqk_1.svg'
import { Customer } from '../../../type';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useSession } from '../../hooks/useSession';

export default function SignIn() {
  const { updateSession } = useSession();

  function handleUpdateSession() {
    updateSession();
  }

  async function loginUser() {
    try {
      const userLogin = {
        email: (document.getElementById("input-email") as HTMLInputElement).value,
        password: (document.getElementById("input-password") as HTMLInputElement).value,
      }
      const user = await api.get<Customer>(`/customers/${userLogin.email}`);

      if (user && userLogin.password == user.data.password) {

        localStorage.setItem('@Grupo4:customer', JSON.stringify(user.data));

        window.location.replace('http://' + window.location.host + '/');
      } else {
        toast.error('Failed to login.');
      }
    } catch {
      toast.error('Failed to login.');
    }
  }

  return (
    <Container>

      <img src={signInImg} alt="Outsider Footwear" />

      <UserFieldsContainer>
        <p style={{ gridArea: "sign_in_label", fontSize: "28px" }}>
          Sign In
        </p>

        <p style={{
          gridArea: "email_label", alignSelf: "center"
        }}>
          Email
        </p>
        <UserInput id="input-email" />

        <p style={{ gridArea: "password_label", alignSelf: "center" }}>
          Password
        </p>
        <PasswordInput id="input-password" />

        <p style={{ gridArea: "login_button", alignSelf: "center" }}>
          {/* <Link to='/'> */}
          <button onClick={() => { loginUser() }}>
            Login
          </button>
          {/* </Link> */}
        </p>

        <p style={{ gridArea: "forgot_password_link", alignSelf: "center", justifySelf: "left" }}>
          <Link to='/'>
            Forgot Password?
          </Link>
        </p>

        <p style={{ gridArea: "sign_up_link", alignSelf: "center", justifySelf: "center" }}>
          New here? <Link to='/signup'>Sign up</Link>
        </p>
      </UserFieldsContainer>
    </Container>
  )
}
