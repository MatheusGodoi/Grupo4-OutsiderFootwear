// Importação de todas as páginas do site
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home'
import ManageAccount from './pages/ManageAccount';
import ManageAccountAdmin from './pages/ManageAccountAdmin';
import ManageProducts from './pages/ManageProducts';
import ManageUsers from './pages/ManageUsers';
import { CreateNewProduct } from './pages/NewProductModal';
import { ProductInfo } from './pages/ProductsInfo';
import PurchaseHistory from './pages/PurchaseHistory';
import PurchaseHistoryAdmin from './pages/PurchaseHistoryAdmin';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/manageaccount" element={<ManageAccount />} />
            <Route path="/manageaccountadmin" element={<ManageAccountAdmin />} />
            <Route path="/manageproducts" element={<ManageProducts />} />
            <Route path="/manageusers" element={<ManageUsers />} />
            <Route path="/purchasehistory" element={<PurchaseHistory />} />
            <Route path="/purchasehistoryadmin" element={<PurchaseHistoryAdmin />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/createnewproduct" element={<CreateNewProduct />} />
        </Routes>
    );
};