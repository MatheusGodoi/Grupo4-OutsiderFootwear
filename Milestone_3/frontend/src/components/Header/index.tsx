import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import logoImg from '../../assets/logo.svg'
import signInImg from '../../assets/signIn.svg'
import cartImg from '../../assets/cart.svg'

import {
  Container,
  IconHeader,
  LeftHeader,
  RightHeader,
  CategoryHeader
} from "./style";

import { useEffect, useState } from 'react';
import { useSession } from '../../hooks/useSession';
import { Customer } from '../../../type';


export default function Header() {
  const { cart } = useCart();
  const { customerActive } = useSession();
  const cartSize = cart.length;

  return (
    <Container>
      <IconHeader>
        <LeftHeader>
          <Link to='/'>
            <img src={logoImg} alt="Outsider Footwear" />
          </Link>
        </LeftHeader>

        <RightHeader>
          <Link to='/signIn'>
            <img src={signInImg} alt="Outsider Footwear" />

            <p>
              {customerActive?.name}
            </p>
          </Link>
          {/* <Link to='/manageAccount'>
            <img src={signInImg} alt="Outsider Footwear" />

            <p>
              User
            </p>
        </Link> */}
          {/* <Link to='/manageAccountAdmin'>
            <img src={signInImg} alt="Outsider Footwear" />

            <p>
              Admin
            </p>
          </Link> */}

          <Link to='/cart'>
            <img src={cartImg} alt="Outsider Footwear" />

            <p>
              {cartSize}
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