import React from 'react';
import styled  from 'styled-components';
import {BsBell} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';
import Languages  from './Languages';
import { Link } from 'react-router-dom';
import Testrop from './Testrop'

/// TO DO List IN Header Components

// Dropdown valuta uchun

const MainHeader = styled.div `
padding:15px 20px;
background-color:${(props) => props.theme.MainHeaderBg};
`
const Row = styled.div`
display: flex;
justify-content:space-between;
align-items : center;
`
const Money = styled.span`
font-family: Roboto;
font-weight: bold;
font-size: 14px;
line-height: 20px;
color: #84878B;
margin-right:14px;
position:relative;
`
const Badge = styled.span`
Width :9px;
Height:9px;
position:absolute;
top:0;
left:165px;
background-color:red;
border-radius:50%;
color:#fff;
`
const LogoText = styled.strong`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;
color:${(props) => props.theme.LogoColor}; 
text-decoration:none;
`
const LogoImg = styled.img`
border-radius:50%;
`
const HeaderLeftContent = styled.div`
color: #222529;
margin-right : 20px;
padding : 10px 10px;
border-right: 2px solid #E7ECF3;
display: flex;
align-items: center;

`
const HeaderLeft = styled.div`
display:flex;
flex-direction: row;
align-items:center;
`
const Profile = styled.div`
position:relative;
margin-right:40px;
display:flex;
align-items:center;
`
const ProfileText = styled.span`
margin-left: 10px;
color:${(props) => props.theme.cardBg};
`
const ProfileImg = styled.img`
border-radius:16px;
`
const Header = () => {

  const { t } = useTranslation();
  return (
    <MainHeader> 
    <Row>    
        <Link to="/" style={{textDecoration: "none"}} > 
          <LogoImg src="/img/logo.svg" alt="logo"/>
          <LogoText>TripGuide</LogoText>
        </Link>
    <HeaderLeft>
        <HeaderLeftContent >
            <Money>{t ("header__money")}  <Badge  /> </Money>
            <Languages/>
            <BsBell style={{ color: 'gray', marginRight:17, marginLeft:17 }} />
        </HeaderLeftContent>
       
           <Profile>
              <ProfileImg src="/img/avatar.jpg" alt="" />
              <ProfileText>Delowar</ProfileText>
              <Testrop/>
            </Profile>  
     </HeaderLeft>
      </Row>
    </MainHeader>
  );
}

export default Header;
