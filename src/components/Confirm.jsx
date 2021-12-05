import { t } from 'i18next';
import React from 'react'
import styled from 'styled-components';
import {BiEditAlt} from 'react-icons/bi';
import {AiOutlineCheck} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import { useNavigate} from "react-router-dom"; 
import {useRef} from 'react';


const ConfirmContent = styled.article`
display:flex;
flex-direction:row;
padding-bottom: 100px;
background: ${(props) => props.theme.searchLocationBg};
`
const BigRow = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`
const ConfirmTitle = styled.h4`
font-family: DM Sans;
font-weight: 700;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color:${(props) => props.theme.hotelCardTitle};

`
const Tour = styled.div`
display:flex;
flex-direction:column;
`
const TourTitle = styled.strong`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 40px;
color:${(props) => props.theme.tourTitle} ;

`
const TourSpan = styled.span`
Width:470px;
Height:64px;
background: ${(props) => props.theme.TourSpanBg};
border-radius: ${(props) => props.theme.TourSpanBorder};
color:#777E90;
padding: 7px 20px;
margin-top:20px;
display:flex;
justify-content:space-between;
`

///// Creadit  Cards
const CreaditCards = styled.div`
margin-top:40px;
`
const CreaditCardsRow = styled.div`
display:flex;
flex-direction:row;
align-items:center;
border-bottom:5px solid #F4F5F6;
//  #222529
Width:524px;
padding:30px 0;
`
const CreaditBtn = styled.button`
Width:96px;
Height:47px;
border:none;
outline:none;
background: ${(props)=> props.theme.CreaditBtn};
border: 0.5px solid #E6E6E6;
box-sizing: border-box;
margin-left:9px;
border-radius: 6px;
&:hover {
background: rgba(47, 128, 237, 0.05);
border: 0.5px solid #145CE6;
filter: drop-shadow(0px 3px 24px rgba(0, 0, 0, 0.1));
opacity: 0.67;
box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.1);
}`
const Row = styled.div`
display:flex;
flex-direction:column
`
///////////

const VisaCards = styled.div`
display:flex;
margin-top:40px;
`
const VisaCard = styled.div`
Width :335px;
Height:162px;
background: #CED9FD;
border-radius: 20px;
margin-bottom:40px;
padding:28px 26px 18px 29px;
`
const VisaCardContent = styled.div`
`
const VisaCard2 = styled.div`
Width :335px;
Height:162px;
border-radius: 20px;
margin: 0 20px 0 20px;
margin-bottom:40px;
padding:28px 26px 18px 29px;
background: #BDDBA6;
`
///// Form 
const CardForm = styled.form`
Width:471px;
Height:236px;
margin-bottom:120px;
`
const FormInput = styled.input`
Width:471px;
Height:50px;
background:${(props)=> props.theme.formInputBg};
border:${(props) => props.theme.formInputBorder};
box-sizing: border-box;
border-radius: 10px;
margin-top:12px;
`
const InputDiv = styled.div`
position:relative;
`
const InputIcon = styled.span`
position:absolute;
top:20px;
right:30px;
`
const Div = styled.div`
Width :214px;
Height:86px;
margin-top:12px;
`
const Label = styled.label`
font-family: Roboto;
font-weight: 400;
font-size: 15px;
line-height: 27px;
color: ${(props)=> props.theme.BookedItemscolor};

`
const FormRow = styled.div`
display:flex;
justify-content:space-between;
`
const DateInput = styled.input`
background:${(props)=> props.theme.formInputBg};
border:${(props) => props.theme.formInputBorder};
box-sizing: border-box;
border-radius: 10px;
padding:13px 20px;
outline:none;
margin-top:12px;
`

const VisaRow = styled.div`
display:flex;
justify-content:space-between;
`
const CardNumber = styled.p`
margin: 16px 0 0 0;
`
const SaveDiv = styled.div`
margin-top:18px;
` 
const ConfirmBtn = styled.button`
background: #3B71FE;
border-radius: 36px;
padding:11px 20px;
font-family: Roboto;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
border:none;
outline:none;
margin-top:20px; 
`
///////
const BookedDetalist = styled.div`
background:${(props) => props.theme.bookDetalistbg};
border:${(props) => props.theme.bookDetalistborder};
Width:445.02px;
Height:774px;
padding:40px 35px;  
box-sizing: border-box;
border-radius: 20px;
margin-top:100px;

`
const DetalistTitle = styled.div`

`

const DetalistTitleText = styled.h4`
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color:${(props) => props.theme.aboutTravelItem};
`
const CardSpan = styled.span`
`
const CardSpanItem = styled.span`
Width:60px;
Height:30px;
color: ${(props) => props.theme.LogoColor}
`
const ImgDiv = styled.div`
margin-top:26px;
`
const Img = styled.img`
`
const Booked = styled.div`
Width:374px;
Height:287px;
margin-top:40px;
` 
const BookedTitle = styled.strong`
font-family: Roboto;
font-weight: 500;
font-size: 26px;
line-height: 27px;
color: #333333;
`
const AboutRoom = styled.div`
Width:312px;
Height:176px;
color:#fff;
margin-top:24px;
`

const AboutRoomTime = styled.div`
display:flex;
flex-direction:column;
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
margin-top:20px;
color:${(props)=> props.theme.checkIn};

`
const AboutRoomBed = styled.h4`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props)=> props.theme.Datalabel};
padding-bottom: 15px;
border-bottom:${(props) => props.theme.RoomBedBorder};
`
const AboutRoomTimeSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;

color:${(props)=> props.theme.AboutRoomTimeSpan};
margin-bottom:20px;
`
const Line = styled.span`
Width:2px;
Height:48px;
border-left: 2px solid #F4F5F6

`
const BookedItems = styled.span`
display:flex;
justify-content: space-between;
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: ${(props) => props.theme.BookedItemscolor};
margin-bottom:14px;
&:nth-child(4){
 background:${(props) => props.theme.priceRowbg};
 border-radius: 6px;
 padding:8px 12px;
}
&:nth-child(5){
    color: #B1B5C4;
    margin: 0 100px;
}
`
const BookedItemsStrong = styled.strong`
color:${(props) => props.theme.PriceColor};
`


const Confirm = () => {
    const navigate = useNavigate();
    const CardNumberRef = useRef(null);
    const ExpiryDateRef = useRef(null);
    const CVCRef = useRef(null);

    const HandleSubmit = (e) =>{
        e.preventDefault();
        console.log(CardNumberRef.current.value);
        console.log(ExpiryDateRef.current.value);
        console.log(CVCRef.current.value); 
      };
    
    return (
        <ConfirmContent>
            <div className="container" >
            <BigRow>
                
            <Row>  
                <ConfirmTitle>Confirm your book</ConfirmTitle>
            <Tour>
                <TourTitle>Your Tour</TourTitle>
              <TourSpan>
                <div>
                 <h6>Date</h6> 
                 <span>June 27-30,2020</span>
                </div> 
            <div><BiEditAlt/></div> 
             </TourSpan>
             <TourSpan>
            <div>
                <h6>Traveller</h6> 
                <span>1 Passenger </span> 
              </div> 
              <div><BiEditAlt/></div> 
             </TourSpan>
            </Tour>
            <CreaditCards>
                <strong>{t("Creadit Cards")}</strong>
                <CreaditCardsRow>
                    <CreaditBtn><img src="/img/mastercard.svg" alt="mastercard" /></CreaditBtn>
                    <CreaditBtn><img src="/img/paypal.svg" alt="paypal" /></CreaditBtn>
                    <CreaditBtn><img src="/img/visa.svg" alt="visa" /></CreaditBtn>
                    <CreaditBtn ><img src="/img/american-express.svg" alt="american-express" /></CreaditBtn>
                </CreaditCardsRow>
                 <VisaCards>
                    <VisaCard>
                        <VisaCardContent>
                            <VisaRow> 
                            <img src="/img/visa-icon.svg" alt="visa" />
                            <img src="/img/3tochka.svg" alt="3tochka" />
                            </VisaRow>
                           
                           <div>
                                 <CardNumber> 8948   xxxx  xxxx  7894</CardNumber> 
                               <VisaRow> 
                                    <span>Holder Name</span>   
                                    <img src="/img/mastercard-icon.svg" alt="" />
                                </VisaRow>
                           </div>
                        </VisaCardContent>    
                    </VisaCard>
                        <VisaCard2>
                        <VisaCardContent>
                            <VisaRow> 
                            <img src="/img/visa-icon.svg" alt="visa" />
                            <img src="/img/3tochka.svg" alt="3tochka" />
                            </VisaRow>
                           
                           <div>
                                 <CardNumber> 8948   xxxx  xxxx  7894</CardNumber> 
                               <VisaRow> 
                                    <span>Holder Name</span>   
                                    <img src="/img/visa.svg" alt="" />
                                </VisaRow>
                           </div>
                        </VisaCardContent>        
                        </VisaCard2>
                </VisaCards>
                <div>
                    <CardForm action="" onClick={HandleSubmit}>
                        <Label    htmlFor="">Card Number</Label> <br />
                         <InputDiv>
                            <FormInput type="text" placeholder="5884 6241 4444 3333" ref={CardNumberRef} /> <br />
                            <InputIcon> <AiOutlineCheck/></InputIcon> 
                         </InputDiv>
                        <FormRow>
                            <Div>
                                <Label htmlFor="">Expiry Date</Label> 
                                <DateInput type="date"  ref={ExpiryDateRef} /> 
                            </Div>
                        
                            <Div>
                                <Label htmlFor="">CVC/CVV</Label> 
                                <DateInput type="date"  ref={CVCRef}/>
                            </Div>
                        </FormRow>
                       <SaveDiv>
                            <input type="checkbox"  />
                            <Label htmlFor="">Save Card</Label>
                       </SaveDiv>
                        <ConfirmBtn type="button" onClick={() => navigate(`/paymetsuccess`)} >Confirm and reserve</ConfirmBtn>

                    </CardForm>   
                </div>
              </CreaditCards>
            </Row>
            <BookedDetalist>
                <DetalistTitle>
                    <DetalistTitleText>Switzerland Hotels and Places to Stay </DetalistTitleText>
                    <CardSpan>
                        <AiFillStar style={{color:"#FFD166"}} />
                        <CardSpanItem> <strong>4.8 </strong> (122 reviews)</CardSpanItem> 
                    </CardSpan>
                </DetalistTitle>
                <ImgDiv>
                    <Img src="/img/explore-img.png" alt="" />
                </ImgDiv>
                <AboutRoom>
                    <AboutRoomBed>1 bedroom  +  1 private room</AboutRoomBed>
                    <BigRow>
                        <AboutRoomTime>
                            Check in
                           <AboutRoomTimeSpan>June 27, 2020</AboutRoomTimeSpan>   
                        </AboutRoomTime>
                        <Line/>
                        <AboutRoomTime>
                            Check out 
                            <AboutRoomTimeSpan> June 30, 2020 </AboutRoomTimeSpan>   
                        </AboutRoomTime>
                    </BigRow>
                   
                    
                    <AboutRoomTime>
                    Guest
                            <AboutRoomTimeSpan> 2 guests </AboutRoomTimeSpan>   
                        </AboutRoomTime>
                </AboutRoom>
                <Booked>
                    <BookedTitle>Booked details</BookedTitle>
                    <div>
                        <BookedItems>$119  +  5nights <BookedItemsStrong>$833</BookedItemsStrong></BookedItems>
                        <BookedItems>Ocupancy text and fee <BookedItemsStrong>-$125</BookedItemsStrong> </BookedItems> 
                        <BookedItems>Service free <BookedItemsStrong>$103</BookedItemsStrong></BookedItems> 
                        <BookedItems> <BookedItemsStrong>Total</BookedItemsStrong> <BookedItemsStrong>$833</BookedItemsStrong> </BookedItems> 
                        <BookedItems>Report this property</BookedItems>
                    </div>

                </Booked>
            </BookedDetalist>
            </BigRow>
            </div>
        </ConfirmContent>
    );
}
export default Confirm;