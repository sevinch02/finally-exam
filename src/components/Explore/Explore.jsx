import React  , {useState , useEffect} from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import { t } from 'i18next';
import {GrLocation} from 'react-icons/gr';
import {Swiper, SwiperSlide} from 'swiper/react';
import {RiArrowDropRightLine} from 'react-icons/ri';
import {RiArrowDropLeftLine}from 'react-icons/ri';
import {HiOfficeBuilding} from 'react-icons/hi'
import apiCalls from '../../config/api';
import SwiperCore ,{Navigation} from 'swiper'
import { Loader } from '../TopTurs/TopTur';
import {ExploreContent,Title,Card,CardImg,CardSpanItem,CardDiv,CardDivTitle} from './styled';
import {CardDivSpan,Location,Info,Icons} from './styled';

export const IconPrev = styled.span`
background: #F4F5F6;
border-radius:50%;
Width:36px;
Height:36px;
padding:5px 2px 10px 2px;
`
export const IconNext = styled.span`
background: #E6E8EC;
border-radius:50%;
Width:36px;
Height:36px;
padding:5px 2px 10px 2px;
`
const Explore = () => {

SwiperCore.use([Navigation]);

    const [isLoading , setIsLoading] = useState(true);
    const [error,setError] = useState('');
    const [world, setWorld] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        const getExplore = async () => {
          try {
            const data = await apiCalls.getExplore();
            setWorld(data);
            setIsLoading(false);
          } catch (error) {
              setIsLoading(false);
              setError(error.message);
          };
        };  
        getExplore();  
      },5000);
    }, []);  

    return (
        <ExploreContent>
          <div className="container">
            <Title>{t("Explore_Title")}</Title>
            <Location>{t("Explore_text")}</Location>
            <Icons>
              <IconPrev className="my-swiper-prev">
                <RiArrowDropLeftLine   style={{color: "#84878B",width: 38, height:38,}} />
              </IconPrev> 
              <IconNext className="my-swiper-next">
                <RiArrowDropRightLine  style={{color: "#84878B",width: 38, height:38,}} /> 
              </IconNext>
           </Icons> 
           {(!isLoading && !error) && <Swiper 
            spaceBetween={30} slidesPerView={4}loop 
           modules ={[Navigation]}
           navigation={{
            nextEl: '.my-swiper-next',
            prevEl: '.my-swiper-prev',
          }}> 
   {world.map( el => (
     <SwiperSlide key={el.id}>
        <Card>
              <CardImg src={el.image} alt="explore" />
                  <AiFillStar style={{color:"#FFD166"}} />
                  <CardSpanItem> <strong>4.91 </strong> (147)</CardSpanItem> 
              <CardDiv>
                  <CardDivTitle>{t("Comfort_Space")}</CardDivTitle>
                  <CardDivSpan>$210</CardDivSpan>
              </CardDiv>
              <Location>{t("ToTown_Center")}</Location>
               <Info>
                  <GrLocation/>
                  <Location>Turkey, Mamaris</Location>
                </Info>
                
                <HiOfficeBuilding style={{color:'#171717'}} />
                 <Location> {t("Rooms")}</Location>
              </Card>
        </SwiperSlide>
  ))}
</Swiper> }
             {isLoading ? <Loader/> : <Swiper/>}
          </div>   
        </ExploreContent>
       
    );
}
export default Explore;