
import React from 'react'
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {SubscribeContent,Get,GetTitle,GetText,SubscribeEl,SubscribeElInput} from './styled';
import {SubscribeElBtn,Row} from './styled';


const Subscribe = () => {

 const emailRef = useRef(null);
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value)
}
const { t } = useTranslation(); 
    return (
        <SubscribeContent>
            <Row>
           <Get>
               <GetTitle>{t("Get_our_pro_offers")} </GetTitle>
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
