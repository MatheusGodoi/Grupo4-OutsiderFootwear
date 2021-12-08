import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { CartProvider } from "./hooks/useCart";

import CustomRoutes from "./routes"
import Header from "./components/Header"

import { GlobalStyle } from "./styles/global"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>

          <Header />
          <GlobalStyle />
          <CustomRoutes />

          <ToastContainer autoClose={3000} />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
