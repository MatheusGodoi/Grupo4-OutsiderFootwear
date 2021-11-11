import styled from 'styled-components'

export const Container = styled.div`
    font-weight: 600;
    display: flex;
    justify-content: center;
`;

export const PurchaseHistorySettings = styled.div`
    display: block;
    margin: 50px 0 0 50px;    
`;

export const PurchaseHistoryList = styled.div`
    display: flex;
    justify-content: top;
    flex-direction: column;
    text-align: left;

    margin: 0 0 50px 50px;
    color: #494848;

    h1, td {
        padding-top: 10px;
    }
`;

export const ContainerProducts = styled.div`
  width: 1320px;
  margin: 50px 0 50px 0;
  padding: 30px;
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

    strong {
      font-size: 22px;
      color: #494848;
    }
  }
  
  .productImg {
    height: 150px;
  }
`;
