import { Link } from 'react-router-dom';
import { Container, Button, UserInput, UserFieldsContainer, PasswordInput } from "./styles"

import signInImg from '../../assets/undraw_enter_uhqk_1.svg'

export default function SignIn() {
  return (
    <Container>
      
      <img src={signInImg} alt="Outsider Footwear" />
      
      <UserFieldsContainer>
        <p style={{gridArea: "sign_in_label", fontSize: "28px"}}>
          Sign In
        </p>

        <p style={{gridArea: "email_label", alignSelf: "center"
}}>
          Email 
        </p>
        <UserInput />

        <p style={{gridArea: "password_label", alignSelf: "center"}}>
          Password 
        </p>
        <PasswordInput />
        
        <p style={{gridArea: "login_button", alignSelf: "center"}}>
          <Link to='/' onClick={() => {localStorage.setItem("@Group4:loginType", "2"); window.location.reload();}}>
            <button>
              Login
            </button>
          </Link>
        </p>

        <p style={{gridArea: "forgot_password_link", alignSelf: "center", justifySelf: "left"}}>
          <Link to='/'>
            Forgot Password?
          </Link>
        </p>

        <p style={{gridArea: "sign_up_link", alignSelf: "center", justifySelf: "center"}}>
          New here? <Link to='/signup'>Sign up</Link>
        </p>
      </UserFieldsContainer>
    </Container>
  )
}
