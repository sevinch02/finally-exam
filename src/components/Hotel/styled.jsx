import styled from 'styled-components';

export const HotelCard = styled.div`
Width :970px;
Height :465px;
border: ${(props)=> props.theme.Hotelborder};
box-sizing: border-box;
border-top-left-radius: 25px;
display:flex;
margin-bottom:50px;
padding-right:26px
`
export const HotelImg = styled.img`
border-radius:25px;
Width:420px;
Height:465px;
`
export const HotelTitleDiv = styled.div`
padding:10px 0 0 20px;
`
export const HotelTitle = styled.h4`
font-family: DM Sans;
font-weight: 700;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color: ${(props)=> props.theme.hotelCardTitle};
`
export const HotelreviewDiv = styled.div`
display:flex;
`
export const ReviewReating = styled.span`
`
export const ReviewReatingSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;;
`
export const Location = styled.span``
export const AboutTravel = styled.div`
display:flex;
flex-wrap:wrap;
margin-top:10px;
`
export const AboutTravelItem = styled.span`
font-family: DM Sans;
font-size: 16px;
line-height: 24px;
text-align: center;
color: ${(props) => props.theme.aboutTravelItem}; 
margin-left:22px;
margin-top:15px;
`
export const AboutHotel = styled.ul`
list-style-type:none;
`
export const AboutHotelItem  = styled.li`
margin-bottom:5px;
`
export const AboutHotelItemSpan = styled.span`
font-family: DM Sans;
font-size: 14px;
font-weight:400;
line-height: 21px;
margin-left:16px;
color: ${(props)=> props.theme.aboutHotelItem};
`
export const Price = styled.span `
background: ${(props) => props.theme.formInputBg};
border-radius: 37px;
padding:4px 19px;
margin-bottom:20px;
color: #84878B;

`
export const BookBtn = styled.button`
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
export const Row = styled.div`
display:flex;
flex-direction:column;
`
export const DivEl = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
margin-top:40px
`
export const PriceStrong = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 28px;
line-height: 41px;
text-align: center;
color: ${(props)=> props.theme.hotelCardTitle};

`