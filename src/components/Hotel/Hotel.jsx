import React  from 'react';
import { useNavigate } from "react-router-dom"; 
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
import {HotelCard,HotelImg,HotelTitleDiv,HotelTitle,HotelreviewDiv,ReviewReating} from './styled';
import {ReviewReatingSpan,Location,AboutTravel,AboutTravelItem,AboutHotel,AboutHotelItem} from './styled';
import {AboutHotelItemSpan,Price,BookBtn,Row,DivEl,PriceStrong} from './styled';


const Hotel = ({hotelObj}) => {
    const navigate = useNavigate();
  
    return (
        <div>       
        <HotelCard>
         <HotelImg src={hotelObj.photo} alt="Switzerland"/>
         <Row>
            <HotelTitleDiv>
                 <HotelTitle> {hotelObj.name} </HotelTitle>
                    <HotelreviewDiv>
                       <ReviewReating>
                           <AiFillStar style={{color: "yellow"}} />
                           <ReviewReatingSpan> {hotelObj.rating} {hotelObj.reviews}  </ReviewReatingSpan>
                       </ReviewReating>
                       <Location>
                            <CgFlagAlt style={{color: "gray"}}/>
                               <ReviewReatingSpan>{hotelObj.location} </ReviewReatingSpan>
                      </Location>
                    </HotelreviewDiv>
                   
            </HotelTitleDiv>
                    <AboutTravel>
                        <AboutTravelItem><GrLocation style={{color: "gray"}}/> {hotelObj.location} </AboutTravelItem>
                        <AboutTravelItem> <RiCalendarTodoFill style={{color: "gray"}}/>15.05.2021-16.05.2021</AboutTravelItem>
                        <AboutTravelItem> <MdFlight style={{color: "gray"}}/> Depature from zuich</AboutTravelItem>
                    </AboutTravel>
                     <DivEl> 
                        <AboutHotel>
                            <AboutHotelItem> <MdWifi/> <AboutHotelItemSpan>Free Wifi</AboutHotelItemSpan> </AboutHotelItem>
                            <AboutHotelItem> <RiParkingBoxLine/> <AboutHotelItemSpan>Free parking</AboutHotelItemSpan></AboutHotelItem>
                            <AboutHotelItem> <FaWallet/> <AboutHotelItemSpan>Special offer</AboutHotelItemSpan> </AboutHotelItem>
                            <AboutHotelItem> <GrLanguage/> <AboutHotelItemSpan>Visit hotel website </AboutHotelItemSpan> </AboutHotelItem>
                            <AboutHotelItem> <BiCoinStack/> <AboutHotelItemSpan>Taking safety measures</AboutHotelItemSpan></AboutHotelItem>
                        </AboutHotel>
                        <Row>
                            <Price><PriceStrong style={{fontWeight: 700, fontSize:28,}}> {'$'+hotelObj.price}</PriceStrong> For Two </Price>
                        <BookBtn onClick={() => navigate(`/hotel/${hotelObj.id}`)}> Book Now </BookBtn>
                        </Row>
                    
                      </DivEl>
                 </Row>
                
           </HotelCard> 
           
          
                 </div>
    );
};

export default Hotel;
