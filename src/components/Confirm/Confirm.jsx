import React from 'react';
import {BiEditAlt} from 'react-icons/bi';
import {AiOutlineCheck} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {useRef} from 'react';
import { useParams } from "react-router-dom"; 
import apiCalls from '../../config/api';
import {useTranslation} from 'react-i18next';
import {useState , useEffect} from "react";
import {Link} from 'react-router-dom';
import {Loader} from '../TopTurs/TopTur';
import {ConfirmContent,BigRow,ConfirmTitle,Tour,TourTitle,TourSpan,CreaditCards} from './styled';
import {CreaditCardsRow,CreaditBtn,Row,VisaCards,VisaCard,VisaCardContent,VisaCard2} from './styled';
import {CardForm,FormInput,InputDiv,InputIcon,Div,Label,FormRow,DateInput,VisaRow} from './styled';
import {CardNumber,SaveDiv,ConfirmBtn,BookedDetalist,DetalistTitleText,CardSpanItem} from './styled'
import {ImgDiv,Img,Booked,BookedTitle,AboutRoom,AboutRoomTime,AboutRoomBed,AboutRoomTimeSpan} from './styled'
import {Line,BookedItems,BookedItemsStrong} from './styled'


const Confirm = () => {
    
    const CardNumberRef = useRef(null);
    const ExpiryDateRef = useRef(null);
    const CVCRef = useRef(null);

    const HandleSubmit = (e) =>{
        e.preventDefault();
        console.log(CardNumberRef.current.value);
        console.log(ExpiryDateRef.current.value);
        console.log(CVCRef.current.value); 
      };
      const { t } = useTranslation();
      const [error,setError] = useState('');
      const [isLoading, setIsLoading] = useState(true);

      const [confirm,setConfirm] = useState({});
      const {id} = useParams();

      useEffect(() => {
          setTimeout(() => {
         const getHotelsDetailes = async () => {
          try {
            const data = await apiCalls.getHotelsDetailes(id);
            setConfirm(data);
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
            setError(error.message);
          };
        };  
        getHotelsDetailes();
    },100)
    }, [id]);
    
    return (
        <ConfirmContent>  
            {error ? error : isLoading } 
            {isLoading ? <Loader/> : <ConfirmContent/> }    

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
                                    <DateInput type="password" placeholder='****'  ref={CVCRef}/>
                                </Div>
                            </FormRow>
                        <SaveDiv>
                                <input type="checkbox" 
                                defaultChecked={true}
                                />
                                <Label htmlFor=""> Save Card </Label>
                        </SaveDiv>
                        <Link to={`/paymetsuccess/${confirm.id}`}> 
                        <ConfirmBtn> Confirm and reserve </ConfirmBtn>
                        </Link>

                        </CardForm>   
                    </div>
                </CreaditCards>
                </Row>
            <BookedDetalist>
                
                    <DetalistTitleText> {confirm.name} </DetalistTitleText>
                   
                        <AiFillStar style={{color:"#FFD166"}} />
                        <CardSpanItem> <strong>4.8 </strong> (122 reviews)</CardSpanItem> 
                  
                <ImgDiv>
                    <Img src={confirm.photo} alt="hotel" />
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
          
        </ConfirmContent>
    );
}
export default Confirm;