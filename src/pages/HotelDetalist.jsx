import React from 'react';
import ViewHotel from '../components/ViewHotel/ViewHotel';
import {IoIosArrowForward} from 'react-icons/io';
import {Link} from 'react-router-dom'; 
import {ActiveSpan, Small, LinkSpan} from './HotelList';
import { Loader } from '../components/TopTurs/TopTur';
import styled from "styled-components";

const Card = styled.div`
background: ${(props) => props.theme.searchLocationBg};
`


const HotelDetalist = () => {
  
    return (
        <Card>
        <div className='container-viewHotel' >
           
         <Small>
            <Link className='link' to='/'><LinkSpan>Home <IoIosArrowForward/> </LinkSpan></Link> 
            <Link className='link' to='/hotellist' > <LinkSpan> Hotel list <IoIosArrowForward/> </LinkSpan></Link> 
            <ActiveSpan>Hotel details</ActiveSpan>
         </Small>
             {'' ? <Loader/> : <ViewHotel/>}
        </div>
        </Card>
    );
}
export default HotelDetalist;