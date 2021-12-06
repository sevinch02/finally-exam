import React  , {useState , useEffect} from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import { t } from 'i18next';
import {GrLocation} from 'react-icons/gr';
import {HiOutlineOfficeBuilding} from "react-icons/hi"
import {Swiper, SwiperSlide} from 'swiper/react';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io'
import apiCalls from '../config/api';
import { useParams } from "react-router-dom";
import SwiperCore ,{Navigation} from 'swiper'

const ExploreContent = styled.article`
padding-top:61px;

`
const Title = styled.h4`
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.exTitle}
` 
const Card = styled.div`
Width: 270px;
Height:362px;
border: ${(props)=> props.theme.CardBorder}
box-sizing: border-box;
border-radius: 20px;
padding: 14px;
margin-bottom:71px;
margin-top:50px;
background: ${(props) => props.theme.bgCard};
box-shadow: ${(props) => props.theme.CardBoxShadow}


`
const CardImg = styled.img`
`
const CardSpan = styled.span`
`
const CardSpanItem = styled.span`
Width:60px;
Height:30px;
`
const CardDiv = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:12px;
`
const CardDivTitle = styled.h5`
`
const CardDivSpan = styled.span`
background: rgba(49, 107, 255, 0.2);
border-radius: 6px;
padding:3px 10px;
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #316BFF;
`
const Location = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
` 
const Info = styled.div`
display:flex;
flex-direction:row;
margin-top:15px
`
const Row = styled.div`
display:flex;
justify-content:space-between;
`
const Icons = styled.div`
text-align:right;
margin-top: -66px;
margin-bottom: 47px;
`
const Explore = () => {
SwiperCore.use([Navigation]);

    const [error, setError] = useState('');
    const [world, setWorld] = useState([]);

    useEffect(() => {
        const getExplore = async () => {
          try {
            const data = await apiCalls.getExplore();
            setWorld(data);
            console.log(data)
          } catch (error) {
              setError(error.message);
          };
        };  
        getExplore();  
    }, []);
    const mappedWorld = 
<Swiper  spaceBetween={30} slidesPerView={4}loop 
 modules ={[Navigation]}
 navigation={{
    nextEl: '.my-swiper-button-next',
    prevEl: '.my-swiper-botton-prev',
 }}
 > 
{world.map( el => (
    <SwiperSlide>
       <Card>
              <CardImg src={el.image} alt="explore" />
              <CardSpan>
                  <AiFillStar style={{color:"#FFD166"}} />
                  <CardSpanItem> <strong>4.91 </strong> (147)</CardSpanItem> 
              </CardSpan>
              <CardDiv>
                  <CardDivTitle>{t("Comfort_Space")}</CardDivTitle>
                  <CardDivSpan>$210</CardDivSpan>
              </CardDiv>
              <Location>{t("ToTown_Center")}</Location>
               <Info>
                  <GrLocation/>
                  <Location>Turkey, Mamaris</Location>
                </Info>
                <></>
                <HiOutlineOfficeBuilding/> 
                 <Location>{t("Rooms")}</Location>
            
              </Card>
        </SwiperSlide>
  ))};
</Swiper>
    return (
        <ExploreContent>
          <div className="container">
            <Title>{t("Explore_Title")}</Title>
            <Location>{t("Explore_text")}</Location>
            <Icons>
              <IoIosArrowDropleft className="my-swiper-button-prev"  style={{color: "#84878B",width: 38, height:38,}} />
              <IoIosArrowDropright className="my-swiper-button-next" style={{color: "#84878B",width: 38, height:38,}} /> 
           </Icons> 
             {mappedWorld}
          </div>   
        </ExploreContent>
       
    )
}

export default Explore;
