import React, {useContext} from 'react';
import  {ThemeContext} from 'styled-components';
import {Button , ButtonLight} from '../../styled';
import {useTranslation} from 'react-i18next';
import Subscribe from '../Subscribe/Subscribe';
import {MdLightMode} from 'react-icons/md';
import {BsMoon} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {FooterPage,Row,FooterLogo,FooterLogoText,FooterItem} from './styled';
import {FooterItemSpan,FooterItemLinks,FooterLogoSpan,FooterLogoImg} from './styled';



const Footer = () => {
    const { t } = useTranslation();
    const {theme, toggleTheme} = useContext(ThemeContext);
 
    return (
        <FooterPage>
            <div className="container">
            
            <Subscribe/>
          <Row>
              
             <FooterLogo>
              <div>
              <Link to="/" className="link">
                <FooterLogoImg>
                        <img src="/img/logo.svg" alt="logo" />
                        <FooterLogoSpan> TripGuide  </FooterLogoSpan>
                    </FooterLogoImg>
              </Link>
             
              </div>
               
             
               <FooterLogoText>{t("team")}</FooterLogoText>
            
              <Button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark'  )}>
              <MdLightMode/>  
              </Button> {console.log(Button)}
              <ButtonLight onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light'  )}>
              <BsMoon/> </ButtonLight> 
              
                 
            </FooterLogo>
             
            <FooterItem>
                <FooterItemSpan>{t("FooterItemSpan")}</FooterItemSpan>
                <FooterItemLinks>{t("Travel_Booking")}</FooterItemLinks>
                <FooterItemLinks>{t("Flight_Booking")}</FooterItemLinks>
                <FooterItemLinks>{t("Car_Booking")}</FooterItemLinks>
                <FooterItemLinks>{t("Fivestar_Hotel")}</FooterItemLinks>
                <FooterItemLinks>{t("Traveling")}</FooterItemLinks>
            </FooterItem>
            <FooterItem>
                <FooterItemSpan>{t("FooterSupport")}</FooterItemSpan>
                <FooterItemLinks>{t("Account")}</FooterItemLinks>
                <FooterItemLinks>{t("Legal")}</FooterItemLinks>
                <FooterItemLinks>{t("Contact")}</FooterItemLinks>
                <FooterItemLinks>{t("Condition")}</FooterItemLinks>
                <FooterItemLinks>{t("Privacy_Policy")}</FooterItemLinks>
            </FooterItem>
            <FooterItem>
                <FooterItemSpan>{t("Business")}</FooterItemSpan>
                <FooterItemLinks>{t("Success")}</FooterItemLinks>
                <FooterItemLinks>{t("About_Locato")}</FooterItemLinks>
                <FooterItemLinks>{t("Blog")}</FooterItemLinks>
                <FooterItemLinks>{t("Information")}</FooterItemLinks>
                <FooterItemLinks>{t("Travel_Guide")}</FooterItemLinks>
            </FooterItem>
              </Row>
              </div>
        </FooterPage>
    )
}

export default Footer;
