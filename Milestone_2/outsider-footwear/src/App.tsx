import { BrowserRouter } from "react-router-dom";

import Routes from "./routes"
import Header from "./components/Header"

import { GlobalStyle } from "./styles/global"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <Routes />
      </BrowserRouter>
    </>
  );
}
