import { t } from 'i18next';
import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineLaptop} from 'react-icons/ai';
import {MdDateRange} from 'react-icons/md';
import {BiWallet}  from 'react-icons/bi';
import {BsFillBasketFill} from 'react-icons/bs'

const Card = styled.div`
`
const Row = styled.div`
display:flex;
`
const Column = styled.div`
Width:610px;
`
const ColumnTitle = styled.h3`
font-family: DM Sans;
font-weight: 700;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.bestcolor};

`
const ReviewReating = styled.span`
`
const ReviewReatingSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`
const Room = styled.span`
`
const Info = styled.div`
display:flex;
justify-content:space-between;
width:380px;
`

const Date = styled.span`
Width:184px;
Height:64px;
background:${(props) => props.theme.formInputBg};
border-radius: 12px;
padding:10px 20px;
display:flex;
flex-direction:column;
`
const DateStrong = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.dateStrong}

`
const Dates = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;
`
const Detalist = styled.div`
width:380px;
background:${(props) => props.theme.formInputBg};
border: 1px solid #F0EFEF;
box-sizing: border-box;
border-radius: 10px;
padding:25px 37px;
margin:30px 0;

`
const DetalistStrong = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 28px;
line-height: 41px;
padding-bottom: 2px;
color:${(props) => props.theme.DetalistStrong}
`
const DetalistItems = styled.p`
display:flex;
justify-content:space-between;
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
margin-top:10px;
color:${(props) => props.theme.DetalistItems} ;

`
const DetalistItemsSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: right;
color:${(props) => props.theme.DetalistItemsSpan}

` 
const Button = styled.button`
Width:205px;
Height:48px;
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 21px;
color: #FFFFFF;
padding:13px 30px;
background: #3B71FE;
border-radius: 34px;
border:none;
outline:none;
`
const Img = styled.img`
Width:511px;
Height:348px;
border-radius:50px;
margin-top:90px;
`
const Bron = () => {
    return (
        <Card>
            <Row>
            <Column>
            <ColumnTitle> {t("Switzerland_Hotels")} </ColumnTitle>
            <ReviewReating>
              <AiFillStar style={{color: "yellow"}} />
              <ReviewReatingSpan>4.8 (122 reviews)</ReviewReatingSpan>
            </ReviewReating>
            <Room>
             1 bad room  +  Private room
            </Room>
            <Info>
              <Date>    
                  <DateStrong>Dates</DateStrong>
                  <Dates>May 15 - 22, 2021 </Dates>
             </Date>
             <Date>    
                  <DateStrong>Travelers</DateStrong>
                  <Dates>1 Passenger </Dates>
             </Date>
           </Info>

           <Detalist>
                <DetalistStrong>Reserve details</DetalistStrong>
                <DetalistItems> <span><AiOutlineLaptop/> Booking code </span> <DetalistItemsSpan> FD_158456</DetalistItemsSpan> </DetalistItems> 
                <DetalistItems> <span> <MdDateRange/> Date</span> <DetalistItemsSpan> 30 Apr, 2021</DetalistItemsSpan> </DetalistItems> 
                <DetalistItems> <span> <BsFillBasketFill/> Total </span> <DetalistItemsSpan>$833</DetalistItemsSpan> </DetalistItems>
                <DetalistItems> <span> <BiWallet/> Payment method </span> <DetalistItemsSpan>Creadit card </DetalistItemsSpan></DetalistItems>
           </Detalist>
          <Button type="button">Go To Your Home</Button>  
            </Column>
               <Img src="/img/exsplore2.jpg" alt="" />
            </Row>
        </Card>
    )
}

export default Bron;
