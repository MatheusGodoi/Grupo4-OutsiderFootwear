import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "./routes"
import Header from "./components/Header"

import { GlobalStyle } from "./styles/global"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <CustomRoutes />
      </BrowserRouter>
    </>
  );
}
