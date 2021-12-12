import React from 'react';
import {useTranslation} from 'react-i18next';
import Languages  from './Languages';
import { Link } from 'react-router-dom';
import Testrop from './Testrop';
import {BsBell} from 'react-icons/bs';
import {MainHeader,Row,Money,Badge,LogoText,LogoImg} from './styled';
import {HeaderLeftContent,HeaderLeft,Profile,ProfileText,ProfileImg} from './styled';

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
              <Testrop />
            </Profile>  
     </HeaderLeft>
      </Row>
    </MainHeader>
  );
}

export default Header;
