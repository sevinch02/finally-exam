import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Button , ButtonLight} from '../styled';
import {useTranslation} from 'react-i18next';
import Subscribe from './Subscribe';
import {MdLightMode} from 'react-icons/md';
import {BsMoon} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FooterPage = styled.div`
// margin-top:100px;
position:relative;
background: ${(props) => props.theme.footerBg};
padding-bottom:40px
`
const Row = styled.div`
display:flex;
justify-content: space-between;
`
const FooterLogo = styled.div`
Width: 254px;
Height:192px;
margin: 250px 0 0 0;
`
const FooterLogoText = styled.p`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${(props)=> props.theme.footerLogo};
`
const FooterItem = styled.ul`
list-style-type:none;
margin: 250px 0 0 0;
`
const FooterItemSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props)=> props.theme.footerLogo};
`
const FooterItemLinks = styled.li`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 34px;
color: #84878B;`

const FooterLogoSpan = styled.span`
font-family: Open Sans;
font-weight: bold;
font-size: 20px;
line-height: 27px;
color: ${(props) => props.theme.footerLogo}
margin-left: 10px;
margin-bottom:25px;
text-decoration:none;
`
const FooterLogoImg = styled.div`
margin-bottom:25px;
color:${(props)=> props.theme.footerLogo}
`
const Footer = () => {
    const { t } = useTranslation();
    const {theme, toggleTheme} = useContext(ThemeContext);
 
    return (
        <FooterPage>
            <div className="container">
            {/* {t ("header__money") */}
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
            
              <Button onClick={() => toggleTheme(theme === 'light' && 'dark'  )}>
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
