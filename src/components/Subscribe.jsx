import { t } from 'i18next';
import React from 'react'
import styled from 'styled-components';
import { useRef } from 'react';

const SubscribeContent = styled.div`
position:absolute;
top:-100px;
left:80px;
bottom:0;
background-image: url(/img/bg.jpg);
background-repeat:no-repeat;
background-size: 100%;
width:1170px;
height:248px;
border-radius:25px;
`
const Get = styled.div`
Width:371px;
Height:124px;
margin:62px 80px;

`
const GetTitle = styled.h4`
font-family: Gilroy;
font-weight: 800;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.5px;
color: #FFFFFF;
`
const GetText = styled.p`
font-family: Roboto;
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
opacity: 0.88;
`
const SubscribeEl = styled.form`
Width :488px;
Height :71px;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`
const SubscribeElInput = styled.input`
border:none;
outline:none;
color: #B1B5C4;
margin-left:22px;
`
const SubscribeElBtn = styled.button`
background: #353945;
box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
border-radius: 4px;
width:130px;
height:55px;
color:#fff;
outline:none;
border:none;
margin-right: 8px;
`
const Row = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`
const Subscribe = () => {
 const emailRef = useRef(null);


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value)
}
    return (
        <SubscribeContent>
            <Row>
           <Get>
               <GetTitle>{t("Get_offers")} </GetTitle>
               <GetText>{t("Get_offers_text")}</GetText>
           </Get>
           <SubscribeEl onSubmit={handleSubmit}>
               <SubscribeElInput ref={emailRef} type="email" placeholder="Type your email here" />
              <SubscribeElBtn type="submit"> Subscribe </SubscribeElBtn>
           </SubscribeEl>
           </Row>
        </SubscribeContent>
    )
}

export default Subscribe;
