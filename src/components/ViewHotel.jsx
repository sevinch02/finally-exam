import React from 'react';
import {useTranslation} from 'react-i18next';
// import {useState} from "react";
import styled from 'styled-components';
import {MdWifi} from 'react-icons/md';
import {BiBath} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import {CgFlagAlt} from 'react-icons/cg';
import {ImSpoonKnife} from 'react-icons/im';
import {IoMdBed} from 'react-icons/io';
import {BsArrowsFullscreen} from 'react-icons/bs';
import {MdOutlineKeyboardAlt} from 'react-icons/md';
import {MdOutlineTv} from 'react-icons/md';
import {FiTv} from 'react-icons/fi';
import {FaPizzaSlice} from 'react-icons/fa';
import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import {MdStar} from 'react-icons/md';
import {MdStarHalf} from 'react-icons/md'
import ForOneNight from './ForOneNight';


const ViewCard = styled.div `
background: ${(props) => props.theme.searchLocationBg};
padding-top:25px;
padding-bottom:100px;

`
const Title = styled.h4`
font-family: Roboto;
font-weight: 500;
font-size: 48px;
line-height: 63px;
color:${(props) => props.theme.detalistTitle} ;

`

const HotelreviewDiv = styled.div`
display:flex;
margin-bottom:25px;
`
const ReviewReating = styled.span`
`
const ReviewReatingSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`
const Location = styled.span``
const HotelImg = styled.div`
display:flex;
`
const Img1 = styled.img`
Width:742.4px;
Height:632px;
margin-right:12px;
`
const Img2 = styled.img`
Width:482px;
Height:200px;
margin-bottom:15px
`
const HotelsSpecials = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.HotelsSpecialsColor1};
Width:21px;
Height:21px;
padding:2.5px 5.5px;
background:${(props) => props.theme.HotelsSpecialsBg1 } ;
border-radius: 5px;
margin-right:12px;
`
const HotelsSpecials2 = styled.span`
background:${(props) => props.theme.HotelsSpecialsBg2} ;
border-radius: 5px;
Width :64px;
Height:26px;
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.HotelsSpecialsColor2};
padding:2.5px 3px;
margin-right:15px;

`
const HotelsSpecials3 = styled.span`
Width:72px;
Height:26px;
background: ${(props) => props.theme.HotelsSpecialsBg3};
border-radius: 5px;
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.HotelsSpecialsColor3} ;
padding:2.5px 15px;
margin-right:15px;
`
const HotelsSpecials4 = styled.span`
Width:90px;
Height:26px;
background:${(props) => props.theme.HotelsSpecialsBg4} ;
border-radius: 5px;
padding:2.5px 19px;
color:${(props) => props.theme.HotelsSpecialsColor4} ;
margin-right:15px;
`
const HotelsSpecials5 = styled.span`
background:${(props) => props.theme.HotelsSpecialsBg5};
border-radius: 7px;
Width:96px;
Height:26px;
padding: 2.5px 17px;
color:${(props) => props.theme.HotelsSpecialsColor5}; 
margin-right:15px;
`
const HotelsSpecials6 = styled.span`
color:yellow;
`
const RoomTitle = styled.h3`
color : ${(props) => props.theme.bestcolor};
font-family: DM Sans;
font-weight: 700;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
`
const RoomText = styled.p`
color: ${(props) => props.theme.RoomText} 
`
//// Tab
const Body = styled.article`
  display: flex;
  align-items: center;
  Width:700px;  
`
const TabsContent = styled.div`
max-width: 1147px;
width: 100%;
`
const TabsUl = styled.ul`
list-style: none;
margin: 0;
padding:0;
display: flex;  
margin-bottom:20px;
`
const WrapperTabsContent = styled.div`
position: relative;
`
const Item1 = styled.div`
text-decoration:none;

`
const Item2 = styled.div`
margin-left:20px;
`
const Item3 = styled.div`
margin-left:20px;
`
const ALink = styled.a`
text-decoration:none;
color:${(props) => props.theme.myProfileTitle};
`
const Features = styled.div`
padding-bottom:62px;
border-bottom: 2px solid #E6E8EC;

`
const DesContent = styled.span`
color:${(props) => props.theme.DescontentColor};
`
const FeaturesSpan = styled.span`
Width:104px;
Height:24px;
margin-right:40px;
color: ${(props) => props.theme.DescontentColor};
`
const FeaturesTitle = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.myProfileTitle};
padding-bottom:25px;
`
const AmenitiesUl = styled.ul`
padding:0;
list-style-type:none;
width:27%;
`
const AmenitiesLinks = styled.li`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
// color: #353945;
color:${(props) => props.theme.DescontentColor};
margin-bottom:26px;
`
const Row = styled.div`
display:flex;
flex-direction:row;
` 
const Aminities = styled.div`
margin-top:60px;
`
const AmenitiesTitle = styled.h4`
color:${(props) => props.theme.myProfileTitle};
font-family: DM Sans;
font-weight: 700;
font-size: 24px;
line-height: 31px;
margin-bottom: 30px;

`
const RightContent = styled.div`
width:743px;
`
const ViewHotel = () => {
  // const [hotelInfo,setHotelInfo] = useState({});
  const { t } = useTranslation();
  return (
    <ViewCard>
    <div className="container-viewHotel">
    
      <Title>{t("Switzerland_Hotels")}</Title>
      <HotelreviewDiv>
                       <ReviewReating>
                           <AiFillStar style={{color: "yellow"}} />
                           <ReviewReatingSpan>4.8 (122 reviews)</ReviewReatingSpan>
                       </ReviewReating>
                       <Location>
                            <CgFlagAlt style={{color: "gray"}}/>
                               <ReviewReatingSpan>Zuich town, Switzerland </ReviewReatingSpan>
                      </Location>
                    </HotelreviewDiv>
            <HotelImg>
                <Img1 src="/img/hotelDetalist1.jpg" alt="hotel-img" />
                <div>
                    <Img2 src="/img/hotelDetalist2.jpg" alt="hotel-img" />
                    <Img2 src="/img/hotelDetalist3.jpg" alt="hotel-img" />
                    <Img2 src="/img/hotelDetalist4.jpg" alt="hotel-img" />
                </div>
            </HotelImg>

<Row> 
<RightContent> 
      <div>
        <HotelsSpecials>5.0</HotelsSpecials>
        <HotelsSpecials2>Perfect</HotelsSpecials2>
        <HotelsSpecials3>Hotels</HotelsSpecials3>
        <HotelsSpecials4>Building</HotelsSpecials4>
        <HotelsSpecials5>Top value</HotelsSpecials5>
        <HotelsSpecials6> <MdStar/> <MdStar/> <MdStar/> <MdStar/> <MdStarHalf/> </HotelsSpecials6>
      </div>
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
         </Aminities>
         </RightContent>
         <ForOneNight/>
         </Row>
       </div>
     
    </ViewCard>
    
  )
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