import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import {CgFlagAlt} from 'react-icons/cg';
import {GrLocation} from 'react-icons/gr';
import {RiCalendarTodoFill} from 'react-icons/ri';
import {MdFlight} from 'react-icons/md';
import {MdWifi} from 'react-icons/md';
import {RiParkingBoxLine} from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import {BiCoinStack} from 'react-icons/bi';
import {GrLanguage } from 'react-icons/gr';
import { useNavigate } from "react-router-dom"; 

const HotelCard = styled.div`
Width :970px;
Height :465px;
border: ${(props)=> props.theme.Hotelborder};
box-sizing: border-box;
border-top-left-radius: 25px;
display:flex;
margin-bottom:50px;
padding-right:26px
`
const HotelImg = styled.img`
border-radius:25px;
`
const HotelTitleDiv = styled.div`
padding:10px 0 0 20px;
`
const HotelTitle = styled.h4`
font-family: DM Sans;
font-weight: 700;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color: ${(props)=> props.theme.hotelCardTitle};
`
const HotelreviewDiv = styled.div`
display:flex;
`
const ReviewReating = styled.span`
`
const ReviewReatingSpan = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;;
`
const Location = styled.span``
const AboutTravel = styled.div`
display:flex;
flex-wrap:wrap;
margin-top:10px;
`
const AboutTravelItem = styled.span`
font-family: DM Sans;
font-size: 16px;
line-height: 24px;
text-align: center;
color: ${(props) => props.theme.aboutTravelItem}; 
margin-left:22px;
margin-top:15px;
`
const AboutHotel = styled.ul`
list-style-type:none;
`
const AboutHotelItem  = styled.li`
font-family: DM Sans;
font-size: 14px;
line-height: 21px;
color: ${(props)=> props.theme.aboutHotelItem};
margin-bottom:5px
`
const Price = styled.span `
background: #F4F5F6;
border-radius: 37px;
padding:4px 19px;
margin-bottom:20px
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;

`
const BookBtn = styled.button`
background: #3B71FE;
box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
border-radius: 23px;
Width :176px;
Height:46px;
border:none;
outline:none;
color:#fff;
font-family: DM Sans;
font-weight: 700;
font-size: 20px;
line-height: 26px;
text-align: center;
margin-top:30px;
` 
const Row = styled.div`
display:flex;
flex-direction:column;
`
const DivEl = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
margin-top:40px
`
const Hotel = () => {
    const navigate = useNavigate();
    return (
        <HotelCard>
         <HotelImg src="/img/zuich.jpg" alt="Switzerland"/>
         <Row>
            <HotelTitleDiv>
                 <HotelTitle> Zuich, Switzerland </HotelTitle>
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
                   
            </HotelTitleDiv>
                    <AboutTravel>
                        <AboutTravelItem><GrLocation style={{color: "gray"}}/>  Zuich Hotel, Switzerland</AboutTravelItem>
                        <AboutTravelItem> <RiCalendarTodoFill style={{color: "gray"}}/>15.05.2021-16.05.2021</AboutTravelItem>
                        <AboutTravelItem> <MdFlight style={{color: "gray"}}/> Depature from zuich</AboutTravelItem>
                    </AboutTravel>
                     <DivEl> 
                        <AboutHotel>
                            <AboutHotelItem> <MdWifi/> Free Wifi</AboutHotelItem>
                            <AboutHotelItem> <RiParkingBoxLine/> Free parking</AboutHotelItem>
                            <AboutHotelItem> <FaWallet/> Special offer</AboutHotelItem>
                            <AboutHotelItem> <GrLanguage/>Visit hotel website  </AboutHotelItem>
                            <AboutHotelItem> </AboutHotelItem>
                            <AboutHotelItem> <BiCoinStack/> Taking safety measures</AboutHotelItem>
                        </AboutHotel>
                        <Row>
                            <Price><strong style={{fontWeight: 700, fontSize:28,}}>$320</strong> For Two </Price>
                        <BookBtn 
                        // onClick={() => navigate(`/hotellist/:id`)}
                        >Book Now </BookBtn>
                        </Row>
                    
                      </DivEl>
                 </Row>
                    
           </HotelCard>
        
    );
};

export default Hotel;
