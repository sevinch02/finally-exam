import React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';

const Img = styled.img`
width: 100%;
height:100vh;
`
const NotFound = () => (
  <div>
    <Img src="/img/404.jpg" alt="" />
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;