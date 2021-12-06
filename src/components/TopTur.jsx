import { t } from 'i18next';
import React , {useState , useEffect} from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io';
import apiCalls from '../config/api';
import { useParams } from "react-router-dom";
import SwiperCore, { Navigation} from 'swiper';


const TopTurPage = styled.section `
color: ${(props) => props.theme.bestPlacesColor};
padding-bottom:23px
`
const Card = styled.div`
position:relative;
`
const CardImg = styled.img`
border-radius:18px;
`
const CardText  = styled.div`

`
const CardTitle = styled.h4`
position:absolute;
top:390px;
left:40px;
color:#fff;
`
const CardSpan = styled.span`
position: absolute;
top:30px;
left:20px;
border-radius: 50px;
background: rgba(20, 20, 22, 0.2);
backdrop-filter: blur(4px);
Width :113px;
Height :50px;
padding: 12px 32px;
color: #E9EBF3
`
const SpanEl = styled.span`
position:absolute;
top:420px;
left:40px;
color: #FCFCFD;
opacity: 0.9;
`
const Icons = styled.div`
text-align:right;
margin-top: -66px;
margin-bottom: 47px;
`
const Title = styled.h5`
padding-top:50px;
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
color: ${(props) => props.theme.aboutTravelItem}
`
const TitleP = styled.p`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props) => props.theme.titleP}
`
const TopTur = () => {

  // const {id} = useParams();
  const [error, setError] = useState('');
  const [tour, setTour] = useState([]);

  useEffect(() => {
    const getTours = async () => {
      try {
        const data = await apiCalls.getTours();
        setTour(data);
        console.log(data)
      } catch (error) {
          setError(error.message);
      };
    };  
    getTours();  
}, []);
const mappedTour = 
<Swiper  spaceBetween={30}slidesPerView={3}loop  modules={[Navigation]}
navigation={{
  nextEl:'.my-swiper-button-next',
  prevEl: '.my-swiper-button-prev'
}}
> 
{tour.map( el => (
    <SwiperSlide>
    <Card>
         <CardImg src={el.photo} alt={el.name} />
             <CardText>
               <CardSpan>{el.name}</CardSpan>
               <CardTitle>{el.country}</CardTitle>
                <SpanEl>{el.place_count } Popular Places</SpanEl>
             </CardText>       
        </Card> 
        </SwiperSlide>
  ))}
</Swiper>


  return (
    <TopTurPage>
      <div className="container">
          <Title>{t("Top_tour")}</Title> 
          <TitleP>{t("Camp_calm")}</TitleP>
           <Icons>
              <IoIosArrowDropleft className="my-swiper-button-prev" style={{color: "#84878B",width: 38, height:38,}} />
              <IoIosArrowDropright className="my-swiper-button-next" style={{color: "#84878B",width: 38, height:38,}} /> 
           </Icons>  
           {mappedTour}
      </div>
    </TopTurPage>
  );
}
export default TopTur