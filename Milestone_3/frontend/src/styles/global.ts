import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    }

    :root {
        --background: #ffffff;
        --gray-line: #BDBDBD;
        --text-gray: #494848;
        --light-gray: #B1B1B1;
        --text-black: #141414;
        --green: #90D911;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 300 1rem "Comfortaa", sans-serif;
    }

    button {
        cursor: pointer;
    }
`;