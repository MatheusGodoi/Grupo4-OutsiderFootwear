import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductDetails = styled.div`
  width: 1350px;
  height: 650px;
  margin-top: 50px;

  text-align: center;

  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 12px;

  p:first-child {
    margin: 30px 0 0 0;
    font-weight: 500;
    font-size: 22px;
  }

  img {
    margin: 20px 0 0 0;
  }

  .description {
    margin: 20px 0 30px 280px;
    width: 800px;
  }

  .amount {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  margin: 50px 0 0 525px;

  width: 308px;
  height: 53px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: none;
  border-radius: 10px;

  background-color: var(--green);

  position: absolute;

  p:first-of-type {
      margin: 0 0 0 90px;
      font-size: 22px;
      font-weight: 500;

      color: black;

      position: relative;
  }

  p:last-of-type {
      margin: 4px 0 0 270px;

      font-size: 16px;
      color: var(--text-gray);
      font-weight: 600;

      position: absolute;
  }

  img {
      margin: 0 4px 0 240px;

      width: 24px;
      height: 24px;  

      position: absolute;
  }
`;