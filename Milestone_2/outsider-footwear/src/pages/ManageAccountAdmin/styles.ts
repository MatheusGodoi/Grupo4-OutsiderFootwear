import styled from 'styled-components'

export const Container = styled.div`
    color: red;
    font-weight: 600;
`;

export const AccountSettings = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    margin: 50px 0 50px 500px;    

`;

export const AccountSettingsList = styled.div`
    display: flex;
    justify-content: top;
    flex-direction: column;
    text-align: left;

    margin: 0 0 50px 50px;

    width: 500px;
    height: 600px;
    color: #494848;

    h1, td {
        padding-top: 70px;
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