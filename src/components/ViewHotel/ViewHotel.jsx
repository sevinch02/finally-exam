import React from 'react';
import {useTranslation} from 'react-i18next';
import {useState , useEffect} from "react";
import ForOneNight from './OneNight/ForOneNight';
import {useParams } from "react-router-dom"; 
import apiCalls from '../../config/api';
import { Loader } from '../TopTurs/TopTur';
import {MdWifi} from 'react-icons/md';
import {BiBath} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import {GrLocation} from 'react-icons/gr';
import {ImSpoonKnife} from 'react-icons/im';
import {IoMdBed} from 'react-icons/io';
import {BsArrowsFullscreen} from 'react-icons/bs';
import {MdOutlineKeyboardAlt} from 'react-icons/md';
import {MdOutlineTv} from 'react-icons/md';
import {FiTv} from 'react-icons/fi';
import {FaPizzaSlice} from 'react-icons/fa';
import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import {MdStar} from 'react-icons/md';
import {MdStarHalf} from 'react-icons/md';
import {ViewCard,Title,HotelreviewDiv,ReviewReating,ReviewReatingSpan,Location} from './styled';
import {HotelImg,Img1,Img2,HotelsSpecials,HotelsSpecial,HotelsSpecial2,HotelsSpecial3} from './styled';
import {HotelsSpecial4,HotelsSpecial5,HotelsSpecial6,RoomTitle,RoomText,Body,TabsContent} from './styled';
import {TabsUl,WrapperTabsContent,Item1,Item2,Item3,ALink,Features} from './styled';
import {DesContent,FeaturesSpan,FeaturesTitle,Row,Aminities,AmenitiesUl,AmenitiesLinks} from './styled';
import {AmenitiesTitle,BtnMore,RightContent} from './styled';

   
    const ViewHotel = () => {
      const { t } = useTranslation();
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState('');

      const [hotelInfo,setHotelInfo] = useState({});
      const {id} = useParams();

      useEffect(() => {
        setTimeout(() => {
        const getHotelsDetailes = async () => {
          try {
            const data = await apiCalls.getHotelsDetailes(id);
            setHotelInfo(data);
            setIsLoading(false);
          } catch (error) {
              setIsLoading(false);
              setError(error.message);
          };
        };  
        getHotelsDetailes();
      },800)
    }, [id]);


   return (
<>   {isLoading ? <Loader/> : <ViewCard/>} 
   <ViewCard>
      <Title>  {hotelInfo.name}  </Title>
       <HotelreviewDiv>
         <ReviewReating>
             <AiFillStar style={{color: "yellow"}} />
             <ReviewReatingSpan>{hotelInfo.rating} {hotelInfo.reviews}</ReviewReatingSpan>
         </ReviewReating>
            <Location>
               <GrLocation/>
               <ReviewReatingSpan>{hotelInfo.location} </ReviewReatingSpan>
            </Location>
      </HotelreviewDiv>
      <HotelImg>
        <Img1>
        <img src="/img/hotelDetalist1.jpg" alt="hotel-img" /></Img1>
          <div>
             <Img2 src="/img/hotelDetalist2.jpg" alt="hotel-img" />
             <Img2 src="/img/hotelDetalist3.jpg" alt="hotel-img" />
             <Img2 src="/img/hotelDetalist4.jpg" alt="hotel-img" />
         </div>
      </HotelImg>

  <Row> 
    <RightContent> 
      <HotelsSpecials>
        <HotelsSpecial>5.0</HotelsSpecial>
        <HotelsSpecial2>Perfect</HotelsSpecial2>
        <HotelsSpecial3>Hotels</HotelsSpecial3>
        <HotelsSpecial4>Building</HotelsSpecial4>
        <HotelsSpecial5>Top value</HotelsSpecial5>
        <HotelsSpecial6> <MdStar/> <MdStar/> <MdStar/> <MdStar/> <MdStarHalf/> </HotelsSpecial6>
      </HotelsSpecials>
      <RoomTitle>{t("Exclusive_room")}</RoomTitle>
        <RoomText>Zuich, Switzerland</RoomText>

       <Body>
         <TabsContent>
          <TabsUl> 
            <Item1 className="tab-item"><ALink href="#item1" className="active" >{t("Description")}</ALink></Item1>
            <Item2  className="tab-item"><ALink href="#item2"> {t("Features")} </ALink>  </Item2>
            <Item3 className="tab-item"><ALink href="#item3">{t("Room_Price")}</ALink> </Item3>
            <Item3 className="tab-item"><ALink href="#item3">{t("Review")}</ALink> </Item3>
          </TabsUl>
         <WrapperTabsContent>
          <div id="item1"  className="tab-content content-visible"> 
              <DesContent>{t("Des_content")}</DesContent> 
            </div>
            <div className="tab-content" id="item2">Features</div>
            <div className="tab-content"  id="item3">Room & Price </div>
            <div className="tab-content"  id="item3">Review </div>
         </WrapperTabsContent>
         </TabsContent>  
       </Body>
  
         <FeaturesTitle>{t("Hotel_features")}</FeaturesTitle>
              <Features>
                  <FeaturesSpan> <MdWifi/> <span> Wifi </span> </FeaturesSpan>
                  <FeaturesSpan> <BiBath/> <span>Bathup</span> </FeaturesSpan>
                  <FeaturesSpan><ImSpoonKnife/><span>Breakfast</span></FeaturesSpan>
                  <FeaturesSpan><IoMdBed/>  <span>Kins bed</span> </FeaturesSpan>
                  <FeaturesSpan><BsArrowsFullscreen/><span>4m * 6m</span></FeaturesSpan>
              </Features>
             <Aminities>
                 <AmenitiesTitle>Amenities</AmenitiesTitle>
              <Row> 
                <AmenitiesUl>
                      <AmenitiesLinks><MdWifi/>  Free wifi 24/7</AmenitiesLinks>
                      <AmenitiesLinks><MdOutlineKeyboardAlt/>  Free computer</AmenitiesLinks>
                      <AmenitiesLinks><MdOutlineTv/>  Free wifi 24/7</AmenitiesLinks>
                      <AmenitiesLinks><FiTv/>  Free wifi 24/7</AmenitiesLinks> 
                </AmenitiesUl> 
                  <AmenitiesUl>
                      <AmenitiesLinks><BiBath/>  Free clean bathroom</AmenitiesLinks>
                      <AmenitiesLinks><FaPizzaSlice/>  Breakfast included</AmenitiesLinks>
                      <AmenitiesLinks><MdOutlineKeyboardAlt/>  ATM</AmenitiesLinks>
                      <AmenitiesLinks><HiOutlineOfficeBuilding/>  Nearby city</AmenitiesLinks>
                  </AmenitiesUl>
              </Row>

              <BtnMore>More details </BtnMore>
            </Aminities>
    </RightContent>

         <ForOneNight hotelId={hotelInfo.id}/>
   </Row>   
</ViewCard>

{error ? error : <ViewCard/>}
</> 
    
  );
}



const selectTab = element => {
  const active = document.querySelector('.active');   
  const visible = document.querySelector('.content-visible');
  const tabContent = document.getElementById(element.href.split('#')[1]);
  if (active) {
    active.classList.remove('active');
  }
  element.classList.add('active');

  if (visible) {
    visible.classList.remove('content-visible');
  }
  tabContent.classList.add('content-visible');
}
document.addEventListener('click', event => {
  if (event.target.matches('.tab-item a')) {
    selectTab(event.target);
    // console.log(event.target);
  }
}, false);
export default ViewHotel;