import styled from "styled-components";

export const Container = styled.div`
  
  margin-top: 70px;
  color: #141414;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Button = styled.button`
  background-color: #90D911;
  color: #FFFFFF;
  font-size: 18px;
  padding: 13px 45px;
  border-radius: 8px;
  margin: 10px 0px;
  cursor: pointer;
  align-self: center;
`

export const UserInput = styled.input`
  background-color: #F0F0F0;
  border: 1px solid #CBCBCB;
  margin: 20px 0px;
  height: 40px;
  grid-area: email_input;
  align-self: center; 
`

export const PasswordInput = styled.input`
  background-color: #F0F0F0;
  border: 1px solid #CBCBCB;
  margin: 20px 0px;
  height: 40px;
  grid-area: password_input; 
  align-self: center;
`

// We can setup a grid layout so things stay as designed
export const UserFieldsContainer = styled.div`
  background-color: white;

  font-weight: 200;

  padding: 35px;
  align-self: flex-start;

  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;

  display: grid;
  grid-template-columns: 100px 70px 100px 100px 130px;
  grid-template-rows: 50px 50px 50px 50px 50px 50px 75px 50px;
  grid-template-areas: 
    "sign_in_label sign_in_label . . ."
    "name_label name_input name_input name_input name_input"
    "email_label email_input email_input email_input email_input"
    "password_label password_input password_input password_input password_input"
    "address_label address_input address_input address_input address_input"
    "phone_label phone_input phone_input phone_input phone_input"
    ". login_button . . ."
    ". sign_in_link sign_in_link sign_in_link sign_in_link";

    button {
      width: 150px;
      height: 50px;
      text-align: center;

      background: var(--green);
      color: var(--background);

      border: 0;
      border-radius: 4px;
      font-weight: bold;

      align-self: center;

      transition: 0.2s;
    }

    button:hover {
        filter: brightness(0.8);
    }

    input {
      background-color: #F0F0F0;
      border: 1px solid #CBCBCB;
      margin: 20px 0px;
      height: 40px;
      align-self: center;
    }
`
