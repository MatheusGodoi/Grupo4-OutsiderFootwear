import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import logoImg from '../../assets/logo.svg'
import signInImg from '../../assets/signIn.svg'
import cartImg from '../../assets/cart.svg'
import logoutImg from '../../assets/logoutImg.svg'

import {
  Container,
  IconHeader,
  LeftHeader,
  RightHeader,
  CategoryHeader
} from "./style";
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { Customer } from '../../../type';

export default function Header() {
  const { cart } = useCart();
  const cartSize = cart.length;
  const user = localStorage.getItem('@Grupo4:customer');
  if (user) {
    var parsedUser = JSON.parse(user);
  }


  async function viewProfile() {
    if (parsedUser) {
      const userInformation = await api.get<Customer>(`/customers/${parsedUser.email}`);

      if (userInformation.data.admin) {
        window.location.replace('http://' + window.location.host + '/manageAccountAdmin');
      } else {
        window.location.replace('http://' + window.location.host + '/manageAccount');
      }
    } else {
      window.location.replace('http://' + window.location.host + '/signIn');
    }

    return;
  }

  function logout() {
    const data = localStorage.getItem('@Grupo4:customer');
    if (data) {
      toast.success('You have logged out')
      localStorage.removeItem('@Grupo4:customer');

      setTimeout(() => { window.location.replace('http://localhost:3000/manageusers') }, 2000);
    } else {
      toast.error('There is no active user to Logout');
    }

  }

  return (
    <Container>
      <IconHeader>
        <LeftHeader>
          <Link to='/'>
            <img src={logoImg} alt="Outsider Footwear" />
          </Link>
        </LeftHeader>

        <RightHeader>
          <Link to='/signIn' onClick={() => viewProfile()}>
            <img src={signInImg} alt="Outsider Footwear" />

            <p>
              {parsedUser ? parsedUser.name : "Sign In"}
            </p>
          </Link>

          <Link to='/cart' >
            <img src={cartImg} alt="Outsider Footwear" />

            <p>
              {cartSize}
            </p>
          </Link>
          <Link to='/' onClick={() => logout()}>
            <img src={logoutImg} alt="logout" />

            <p>
              Logout
            </p>
          </Link>
        </RightHeader>
      </IconHeader>

      <CategoryHeader>
        <button type="button">Casual</button>
        <button type="button">Sports</button>
        <button type="button">Trending</button>
        <button type="button">Top Brands</button>
        <button type="button">Accessories</button>
      </CategoryHeader>

      <hr />
    </Container>
  )
}