import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductDetails = styled.div`
  display: block;
  align-items: center;
  width: 1350px;
  height: 650px;
  margin-top: 50px;

  text-align: center;

  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 12px;

  p {
    margin: 5px 0 0 0;
    font-weight: 500;
    font-size: 22px;
  }

  img {
    margin: 0 0 0 0;
    width: 50px;
    height: 50px;
  }

  input {
    background-color: #F0F0F0;
    border: 1px solid #CBCBCB;
    margin: 20px 0px;
    height: 40px;
    grid-area: email_input;
    align-self: center; 
  }

  .button-create {
    width: 150px;
    height: 53px;

    border: none;
    border-radius: 10px;

    background-color: var(--green);
  }

  .button-exit {
    width: 150px;
    height: 53px;

    margin-left:15px;

    border: none;
    border-radius: 10px;

    background-color: #FF403A;
  }
`;