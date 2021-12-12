import React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';

const Img = styled.img`
width: 100%;
height:100vh;
object-fit:contain;
position:relative;
filter:saturate(350%);
`
const Button = styled.button`
position:absolute;
top:45%;
left:38%;
filter:brightness(95%);
Width:130px;
Height:55px;
border:none;
outline:none;
border-radius:9px;
background:transparent;
border:3px solid #222;
box-shadow: 5px 5px 5px rgba(0,0,0,0.7);

` 
const NotFound = () => (
  <div>
    <Img src="/img/404.jpg" alt="" />
    <Link to="/">
     <Button> Go Home</Button>
    </Link>
  </div>
);

export default NotFound;