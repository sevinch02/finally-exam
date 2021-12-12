import { t } from 'i18next';
import React , {useState , useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {RiArrowDropRightLine} from 'react-icons/ri';
import {RiArrowDropLeftLine}from 'react-icons/ri';
import apiCalls from '../../config/api';
import SwiperCore, { Navigation} from 'swiper';
import {IconNext, IconPrev} from '../Explore/Explore'
import {TopTurPage,Card,CardImg,CardText,CardTitle,CardSpan,SpanEl,Icons,Title,TitleP} from './styled';



export  const Loader = () => {
  return (
    <div>
       <h1>Loading</h1>
     isLoading
    </div>
  );
};

const TopTur = () => {

  SwiperCore.use([Navigation]);

  const [isLoading , setIsLoading] = useState(true);
  const [error,setError] = useState('');
  const [tour, setTour] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    const getTours = async () => {
      try {
        const data = await apiCalls.getTours();
        setTour(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
          setError(error.message + 'xatolik');
          console.log(setError.message);
           };
    };  
    getTours();  
  },5000);
}, []);

  return (
    <TopTurPage>
      <div className="container">
          <Title>{t("Top_tour")}</Title> 
          <TitleP>{t("Camp_calm")}</TitleP>
           <Icons>
              <IconPrev className="my-swiper-button-prev">
                <RiArrowDropLeftLine   style={{color: "#84878B",width: 38, height:38,}} />
              </IconPrev> 
              <IconNext className="my-swiper-button-next">
                <RiArrowDropRightLine  style={{color: "#84878B",width: 38, height:38,}} /> 
              </IconNext>
           </Icons>  
        
           {!isLoading  &&  <Swiper 
           spaceBetween={30} slidesPerView={3}loop 
            modules={[Navigation]}
            navigation={{
            nextEl:'.my-swiper-button-next',
            prevEl: '.my-swiper-button-prev'
          }}
          > 
          {tour.map( (el) => (
              <SwiperSlide key={el.id}>
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
          </Swiper> }
          {(isLoading && error) && <div>{<Loader/>}</div>} 
          {isLoading ? <Loader/> : <Swiper/>}
      </div>
    </TopTurPage>
  );
}
export default TopTur;