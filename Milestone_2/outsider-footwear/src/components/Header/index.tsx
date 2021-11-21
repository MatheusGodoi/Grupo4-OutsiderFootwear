import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import logoImg from '../../assets/logo.svg'
import signInImg from '../../assets/signIn.svg'
import cartImg from '../../assets/cart.svg'
import endSessionImg from '../../assets/endSession.svg'

import { useState, useEffect, useReducer } from 'react';

import {
  Container,
  IconHeader,
  LeftHeader,
  RightHeader,
  CategoryHeader
} from "./style";


export default function Header() {
  const { cart } = useCart();
  const cartSize = cart.length;

  //const loginTypeFromLocalStorage = localStorage.getItem("@Group4:loginType");
  //const loginType = loginTypeFromLocalStorage !== null ? loginTypeFromLocalStorage : "0";

  const [loginType, setLoginType] = useState<string>("0");

  useEffect(() => {
    async function loadLogin() {
      const loginTypeFromLocalStorage = await localStorage.getItem("@Group4:loginType");
      const loginTypeString = loginTypeFromLocalStorage !== null ? loginTypeFromLocalStorage : "0";
      setLoginType(loginTypeString);
    }

    loadLogin();
  }, []);

  return (
    <Container>
      <IconHeader>
        <LeftHeader>
          <Link to='/'>
            <img src={logoImg} alt="Outsider Footwear" />
          </Link>
        </LeftHeader>

        <RightHeader>
          {
            loginType == "0" &&
              (<Link to='/signin'>
                          <img src={signInImg} alt="Outsider Footwear" />
              
                          <p>
                            Sign In
                          </p>
                        </Link>)
          }
          {
            loginType == "1" &&
              (<Link to='/manageaccount'>
                          <img src={signInImg} alt="Outsider Footwear" />
              
                          <p>
                            User
                          </p>
                        </Link>)
          }
          {
            loginType == "2" &&
              (<Link to='/manageaccountadmin'>
                          <img src={signInImg} alt="Outsider Footwear" />
              
                          <p>
                            Admin
                          </p>
                        </Link>)
          }

          <Link to='/cart'>
            <img src={cartImg} alt="Outsider Footwear" />

            <p>
              {cartSize}
            </p>
          </Link>

          {
            loginType != "0" &&
              (<Link to='#'>
                <img src={endSessionImg} onClick={() => {localStorage.setItem("@Group4:loginType", "0"); window.location.reload();}} />

                <p>
                  Log Out
                </p>
              </Link>)
          }

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