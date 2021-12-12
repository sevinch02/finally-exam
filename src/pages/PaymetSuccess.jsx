// import { t } from 'i18next';
import {useTranslation} from 'react-i18next';
import React from 'react';
import styled from 'styled-components';
import Bron from '../components/Bron/Bron';
import {IoIosArrowForward} from 'react-icons/io';
import { Small , ActiveSpan, LinkSpan  } from './HotelList';
import {Link} from 'react-router-dom';



const Paymet = styled.div`
padding-bottom:150px;
background: ${(props) => props.theme.searchLocationBg}
`
const PaymetTitleDiv = styled.div`
`
const FirstTitle = styled.h4`
font-family: DM Sans;
font-weight: 700;
font-size: 25px;
line-height: 21px;
color: #3B3E44;
`
const SecondTitle = styled.h2`
font-family: DM Sans;
font-weight: 500;
font-size: 48px;
line-height: 60px;
color: ${(props) => props.theme.color};
`

const PaymetSuccess = () => {

    const { t } = useTranslation(); 
   
    return (
        <Paymet>
        
            <div className="container">
                <Small>
                    <Link className='link' to='/'><LinkSpan>  Home <IoIosArrowForward/></LinkSpan> </Link> 
                    <Link className='link' to='/hotellist' ><LinkSpan>  Hotel list <IoIosArrowForward/></LinkSpan> </Link> 
                    <Link className='link' to='/hotel/:id'> <LinkSpan> Hotel details <IoIosArrowForward/> </LinkSpan> </Link> 
                    <Link className='link' to='/payment/:id'> <LinkSpan>  Confirm and pay <IoIosArrowForward/></LinkSpan></Link> 
                <ActiveSpan>Congratulations</ActiveSpan>
                </Small>
               
          <PaymetTitleDiv>
              <FirstTitle>{t("Paymet_First_Title")}</FirstTitle>
              <SecondTitle>{t("Paymet_Second_Title")} </SecondTitle>
          </PaymetTitleDiv>

          <Bron/>
            </div>
       </Paymet>
    );
}
export default PaymetSuccess;
