import styled from "styled-components";

export const OptionList = styled.div`
    div {
    margin: 50px 0 0 343px;

    display: flex;
    align-items: center;
    }

    select {
        width: 337px;
        height: 55px;

        border: 1px solid var(--light-gray);
        border-radius: 10px;

        text-align: center;

        color: var(--light-gray);
        font: 500 14px "Comfortaa", sans-serif;
    }

     p {
        margin: 0 0 0 40px;

        color: var(--light-gray);
        font-weight: 600;
    }
`;

export const ProductListContainer = styled.div`
    display: flex;
    justify-content: center;

    margin: 50px 0 50px 0;
`;

export const ProductList = styled.div`
    width: 1250px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    list-style: none;
    
    li {
        margin: 0 0 0 10px;

        width: 335px;
        height: 330px;

        display: flex;
        flex-direction: column;
        text-align: center;

        box-shadow: 0px 4px 4px 0px #00000040;
        border-radius: 8px;
    }

    img {
        width: 200px;
        height: 200px;
    }

    p {
        font-weight: 500;
    }
`;

export const Button = styled.button`
    margin: 260px 0 0 12.5px;

    width: 308px;
    height: 53px;

    display: flex;
    flex-direction: row;
    align-items: center;

    border: none;
    border-radius: 10px;

    background: var(--green);

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