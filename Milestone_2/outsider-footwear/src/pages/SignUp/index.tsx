import { Link } from 'react-router-dom';
import { Container, Button, UserInput, UserFieldsContainer, PasswordInput } from "./styles"

import signUpImg from '../../assets/login_1.svg'

export default function SignIn() {
  return (
    <Container>
      
      <img src={signUpImg} alt="Outsider Footwear" />
      
      <UserFieldsContainer>
        <p style={{gridArea: "sign_in_label", fontSize: "28px"}}>
          Sign Up
        </p>

        <p style={{gridArea: "name_label", alignSelf: "center"}}>
          Name
        </p>
        <input style={{gridArea: "name_input"}} />

        <p style={{gridArea: "email_label", alignSelf: "center"}}>
          Email 
        </p>
        <input style={{gridArea: "email_input"}} />

        <p style={{gridArea: "password_label", alignSelf: "center"}}>
          Password 
        </p>
        <input style={{gridArea: "password_input"}} />

        <p style={{gridArea: "address_label", alignSelf: "center"}}>
          Address 
        </p>
        <input style={{gridArea: "address_input"}} />

        <p style={{gridArea: "phone_label", alignSelf: "center"}}>
          Phone
        </p>
        <input style={{gridArea: "phone_input"}} />

        <p style={{gridArea: "login_button", alignSelf: "center"}}>
          <Link to='/'>
            <button>
              Create Account
            </button>
          </Link>
        </p>

        <p style={{gridArea: "sign_in_link", alignSelf: "center", justifySelf: "center"}}>
          Already have an account? <Link to='/signin'>Sign in</Link>
        </p>
      </UserFieldsContainer>
    </Container>
  )
}
