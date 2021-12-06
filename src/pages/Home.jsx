import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next';
import BigSearch from '../components/BigSearch';
import Featured from '../components/Featured';
import TopTur from '../components/TopTur';
import BestPlaces from '../components/BestPlaces';
import Explore from '../components/Explore';
import Travel from '../components/Travel';
import Trending from '../components/Trending'


const HomePage = styled.div`
background: ${ (props) => props.theme.bestPlacesBg};
`

const HomeIntro = styled.div`
background-image: url(/img/home-background.jpg);
background-repeat:no-repeat;
background-size: 100% ;
width:100%;
position:relative;
`
const BoxText = styled.h1 `
font-family: Poppins;
font-weight: 700;
font-size: 64px;
line-height: 80px;
letter-spacing: -0.005em;
 color: ${ (props) => props.theme.intoText};
text-shadow: 0px 8px 16px rgba(51, 51, 51, 0.08);
min-width: 487px;
max-width :640px;
max-height: 740px;
min-height:500px;
padding-top: 100px;
`
const Div = styled.div`
// background: ${ (props) => props.theme.bestPlacesBg};
position: absolute;
    top: 412px;
    left: 79px;
` 
const Home = () => {
  const {t} = useTranslation();
  // const [topTour,setToptour] = useState([]);

  
      {/* 
        const newArr = 
  <Swiper  spaceBetween={30} slidesPerView={4}loop >
 {TopTour.map((el, i) => (
    <SwiperSlide>
      <TopTur tourobj={el}
      key={i}
      id={el.id}
      name={el.name}
      place_count={ el.country}
      country = {el.country}
      photo ={el.photo}
    />
    </SwiperSlide>
  ))}
</Swiper>

      */}
  return (
    <HomePage>
    <HomeIntro>
      <div className="container">
        <BoxText>
          {t('intro_text')}
        </BoxText> </div>
        <Div>  <BigSearch/> </Div> 
        </HomeIntro>
       
      <BestPlaces/>
      <Featured/>
      <TopTur/>

      <Explore/>
      <Trending/>
      <Travel/>
    
      </HomePage>
  );
}

export default Home;
