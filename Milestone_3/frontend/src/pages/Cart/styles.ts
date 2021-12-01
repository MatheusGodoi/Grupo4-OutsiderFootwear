import styled from 'styled-components';

export const BackgroundPosition = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1320px;
  margin: 50px 0 50px 0;
  padding: 30px;

  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 150px;
      height: 50px;
      text-align: center;

      background: var(--green);
      color: var(--background);

      border: 0;
      border-radius: 4px;
      font-weight: bold;

      transition: 0.2s;
    }

    button:hover {
        filter: brightness(0.8);
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    padding: 15px;
    text-align: left;
    
    color: var(--text-gray);
  }

  tbody td {
    padding: 15px;
    border-bottom: 1px solid #D1D1D1;

    p {
      color: var(--text-gray);
      font-weight: 500;
    }
  }

  span {
    display: block;
    margin-top: 25px;

    color: var(--text-gray);
    font-size: 22px;
    font-weight: bold;
  }
  
  .productImg {
    height: 150px;
  }
  .crementImg {
    size: 20;
  }

  div {
    display: flex;
    align-items: center;

    input {
      text-align: center;
      padding: 6px;
      width: 50px;
      
      border: 1px solid #CBCBCB;
      border-radius: 4px;

      background-color: #f0f0f0;
      color: var(--text-gray);
      font-weight: 500;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;

  p:first-child {
    color: var(--light-gray);
    font-weight: bold;
  }

  p:last-child {
    margin-right: 150px;
    margin-left: 25px;

    font-size: 26px;
    font-weight: 600;
    color: var(--text-gray);
  }
`;
