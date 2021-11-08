import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home'
import SignIn from './pages/SignIn'

export default function BATATA() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
};