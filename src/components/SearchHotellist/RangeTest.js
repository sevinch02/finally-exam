import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';

const NumberInput = styled.input`
border: 2px solid #316BFF;
box-sizing: border-box;
border-radius: 9px;
Width :60px;
Height:32px;
font-family: Roboto;
font-weight: 400;
font-size: 18px;
line-height: 18px;
color: #0A2541;
padding:7px 4px;
margin-left:10px;
`
const Badge = styled.span`
Width:40px;
Height:33px;
position:absolute;
top:-40px;
left:50px;
background: #0B2541;
box-shadow: 0px 8px 17px rgba(15, 15, 15, 0.2);
border-radius: 7px;
font-family: Roboto;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: #F9F9F9;
padding:6px 10px;

`
const RangeDiv  = styled.div`
position:relative;
width:200px;
margin-top:50px;
`
const Range = () => {
    const [price, setPrise] = useState(50)
      return (
        <RangeDiv>  
           <input type="range"  value={price} onChange={e => setPrise(e.target.value)} />
           <NumberInput type="number" value={price} onChange={e => setPrise(e.target.value)} />
           <Badge> {price}</Badge>
        </RangeDiv>
      );
  }
  export default Range;