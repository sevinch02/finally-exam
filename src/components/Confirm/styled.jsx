import styled from 'styled-components';

export const ConfirmContent = styled.article`
display:flex;
flex-direction:row;
padding-bottom: 100px;
background: ${(props) => props.theme.searchLocationBg};
`
export const BigRow = styled.div`
display:flex;
justify-content: space-between;
`
export const ConfirmTitle = styled.h4`
font-family: DM Sans;
font-weight: 700;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color:${(props) => props.theme.hotelCardTitle};

`
export const Tour = styled.div`
display:flex;
flex-direction:column;
`
export const TourTitle = styled.strong`
font-family: Roboto;
font-weight: 500;
font-size: 32px;
line-height: 40px;
color:${(props) => props.theme.tourTitle} ;

`
export const TourSpan = styled.span`
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
export const CreaditCards = styled.div`
margin-top:40px;
`
export const CreaditCardsRow = styled.div`
display:flex;
flex-direction:row;
align-items:center;
border-bottom:2px solid #F4F5F6;
Width:524px;
padding:30px 0;
`
export const CreaditBtn = styled.button`
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
export const Row = styled.div`
display:flex;
flex-direction:column;
`
///////////

export const VisaCards = styled.div`
display:flex;
margin-top:40px;
`
export const VisaCard = styled.div`
Width :335px;
Height:162px;
background: #CED9FD;
border-radius: 20px;
margin-bottom:40px;
padding:28px 26px 18px 29px;
`
export const VisaCardContent = styled.div`
`
export const VisaCard2 = styled.div`
Width :335px;
Height:162px;
border-radius: 20px;
margin: 0 20px 0 20px;
margin-bottom:40px;
padding:28px 26px 18px 29px;
background: #BDDBA6;
`
///// Form 
export const CardForm = styled.form`
Width:471px;
Height:236px;
margin-bottom:120px;
`
export const FormInput = styled.input`
Width:471px;
Height:50px;
background:${(props)=> props.theme.formInputBg};
border:${(props) => props.theme.formInputBorder};
box-sizing: border-box;
border-radius: 10px;
margin-top:12px;
`
export const InputDiv = styled.div`
position:relative;
`
export const InputIcon = styled.span`
position:absolute;
top:20px;
right:30px;
`
export const Div = styled.div`
Width :214px;
Height:86px;
margin-top:12px;
`
export const Label = styled.label`
font-family: Roboto;
font-weight: 400;
font-size: 15px;
line-height: 27px;
color: ${(props)=> props.theme.BookedItemscolor};
&:nth-child(2){
    margin-left:10px;
}
`
export const FormRow = styled.div`
display:flex;
justify-content:space-between;
`
export const DateInput = styled.input`
background:${(props) => props.theme.formInputBg};
border:${(props) => props.theme.formInputBorder};
box-sizing: border-box;
border-radius: 10px;
padding:13px 20px;
outline:none;
margin-top:12px;
`

export const VisaRow = styled.div`
display:flex;
justify-content:space-between;
`
export const CardNumber = styled.p`
margin: 16px 0 0 0;
`
export const SaveDiv = styled.div`
margin-top:18px;
` 
export const ConfirmBtn = styled.button`
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
export const BookedDetalist = styled.div`
background:${(props) => props.theme.bookDetalistbg};
border:${(props) => props.theme.bookDetalistborder};
Width:445px;
Height:784px;
padding:40px 35px;  
box-sizing: border-box;
border-radius: 20px;
margin-top:20px;
`
export const DetalistTitleText = styled.h4`
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color:${(props) => props.theme.aboutTravelItem};
`
export const CardSpanItem = styled.span`
Width:60px;
Height:30px;
color: ${(props) => props.theme.LogoColor}
`
export const ImgDiv = styled.div`
margin-top:26px;
`
export const Img = styled.img`
Width:326px;
Height:177px;
border-radius: 10px;
`
export const Booked = styled.div`
Width:374px;
Height:287px;
padding-top:40px;
` 
export const BookedTitle = styled.p`
font-family: Roboto;
font-weight: 500;
font-size: 26px;
line-height: 27px;
color: #333333;
`
export const AboutRoom = styled.div`
Width:312px;
Height:176px;
color:#fff;
margin-top:24px;
`
export const AboutRoomTime = styled.div`
display:flex;
flex-direction:column;
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
margin-top:20px;
color:${(props) => props.theme.checkIn};
`
export const AboutRoomBed = styled.h4`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props)=> props.theme.Datalabel};
padding-bottom: 15px;
border-bottom:${(props) => props.theme.RoomBedBorder};
`
export const AboutRoomTimeSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.AboutRoomTimeSpan};
margin-bottom:20px;
`

export const Line = styled.span`
Width:2px;
Height:48px;
border-left: 1px solid #F4F5F6;
`
export const BookedItems = styled.span`
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
export const BookedItemsStrong = styled.strong`
color:${(props) => props.theme.PriceColor};
`
