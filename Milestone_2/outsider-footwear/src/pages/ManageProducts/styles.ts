import styled from 'styled-components'

export const Container = styled.div`
    font-weight: 600;
    display: flex;
    justify-content: center;
`;

export const ManageProductsSettings = styled.div`
    display: block;
    margin: 10px 0 0 50px;    

`;

export const ManageProductsList = styled.div`
    display: flex;
    justify-content: top;
    flex-direction: column;
    text-align: left;

    margin: 0 0 50px 50px;

    color: #494848;

    h1, td {
        padding-top: 50px;
    }

    h1, p {
        color: #494848;
        float: left;
    }

    a {
        padding-left: 190px;
    }

    span {
        color: #B1B1B1;
        margin-left: 10px;
    }
`;

export const BackgroundPosition = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerProducts = styled.div`
  width: 1320px;
  margin: 50px 0 50px 0;
  padding: 30px;

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

    .description {
      text-align: center;
      padding: 6px;
      width: 500px;
      height: 75px;
      
      border: 1px solid #CBCBCB;
      border-radius: 4px;

      background-color: #f0f0f0;
      color: var(--text-gray);
      font-weight: 500;
    }

    .price {
      text-align: center;
      padding: 6px;
      width: 100px;
      height: 50px;
      
      border: 1px solid #CBCBCB;
      border-radius: 4px;

      background-color: #f0f0f0;
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