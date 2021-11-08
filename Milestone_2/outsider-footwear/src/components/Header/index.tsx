import { Link } from 'react-router-dom';

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


export default function Header() {
  return (
    <Container>
      <IconHeader>
        <LeftHeader>
          <Link to='/'>
            <img src={logoImg} alt="Outsider Footwear" />
          </Link>
        </LeftHeader>

        <RightHeader>
          <Link to='/signin'>
            <img src={signInImg} alt="Outsider Footwear" />

            <p>
              Sign In
            </p>
          </Link>

          <Link to='/cart'>
            <img src={cartImg} alt="Outsider Footwear" />

            <p>
              0
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