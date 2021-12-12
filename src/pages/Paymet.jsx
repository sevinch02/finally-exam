import React from 'react';
import Confirm from '../components/Confirm/Confirm';
import {IoIosArrowForward} from 'react-icons/io';
import {Link} from 'react-router-dom';
import { Small , ActiveSpan,LinkSpan } from './HotelList';
import styled from 'styled-components';

const Div = styled.div`
background: ${(props) => props.theme.searchLocationBg};
`

const Paymet = () => {
    return (
        <Div>
        <div className='container'>
            <Small>
                <Link className='link' to='/'> <LinkSpan>Home <IoIosArrowForward/></LinkSpan> </Link> 
                <Link className='link' to='/hotellist'> <LinkSpan> Hotel list <IoIosArrowForward/></LinkSpan> </Link> 
                <Link className='link' to='/hotel/:id'> <LinkSpan>Hotel details  <IoIosArrowForward/></LinkSpan> </Link> 
                <ActiveSpan>Confirm and pay</ActiveSpan>
            </Small>
            <Confirm/>
        </div>
        </Div>
    );
}

export default Paymet;
