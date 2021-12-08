import styled from "styled-components";

export const Container = styled.header`
    display: block;

    a, button {
        text-decoration: none;
        border: none;
        background: none;
    }

    p {
        color: var(--light-gray);
        font-weight: 500;
    }

    hr {
        margin-top: 3px; 
        width: 100%; 
        color: #BDBDBD; 
        filter: drop-shadow(0px 1px 1px #BDBDBD);
    }
`;

export const IconHeader = styled.div`
    display: flex;
`;

export const LeftHeader = styled.div`
    a {
        margin-left: 10rem;
    }
    img {
        width: 10rem;
        height: 9rem;
    }
`
export const RightHeader = styled.div`
    display: flex;
    justify-content: flex-end;

    height: 50px;
    width: 100%;

    margin: 3.5rem 10rem 0 0;

    a, button {
        display: flex;
        align-items: center;

        transition: filter 0.4s;

        img {
            margin-right: 5px;
        }

        p {
            margin-right: 55px;
            font-weight: 500;
        }

    }

    a:hover, button:hover {
        filter: brightness(0.8);
    }
`

export const CategoryHeader = styled.div`
    display: flex;
    justify-content: center;

    #category-button {
        width: 153px;
        height: 40px;
        
        font-weight: 500;
        
        transition: filter 0.4s;
    }

    #category-button:hover {
        filter: brightness(0.8);
    }
`