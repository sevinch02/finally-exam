import styled from 'styled-components';


export const ViewCard = styled.div `
background: ${(props) => props.theme.searchLocationBg};
padding-bottom:80px;
`
export const Title = styled.h4`
font-family: Roboto;
font-weight: 500;
font-size: 48px;
line-height: 63px;
color:${(props) => props.theme.detalistTitle} ;
`
export const HotelreviewDiv = styled.div`
display:flex;
margin-bottom:34px;
`
export const ReviewReating = styled.span`
display:flex;
align-items:center;
`
export const ReviewReatingSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
margin-left:8px;
`
export const Location = styled.span`
margin-left:24px;
`
export const HotelImg = styled.div`
display:flex;
margin-bottom:40px;
background: ${(props) => props.theme.searchLocationBg};
`
export const Img1 = styled.img`
Width:742px;
Height:632px;
margin-right:12px;
border-top-left-radius: 58px;
border-bottom-left-radius: 58px;

`
export const Img2 = styled.img`
Width:482px;
Height:200px;
margin-bottom:15px;
&:nth-child(1){
  border-top-right-radius: 58px;  
}
&:nth-child(3){
  border-bottom-right-radius: 58px;  
}
`
export const HotelsSpecials = styled.div`
margin-bottom:20px;
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
`
export const HotelsSpecial = styled.span`
color:${(props) => props.theme.HotelsSpecialsColor1};
Width:21px;
Height:21px;
padding:2.5px 5.5px;
background:${(props) => props.theme.HotelsSpecialsBg1 } ;
border-radius: 5px;
margin-right:12px;

`
export const HotelsSpecial2 = styled.span`
background:${(props) => props.theme.HotelsSpecialsBg2} ;
border-radius: 5px;
Width :64px;
Height:26px;
color: ${(props) => props.theme.HotelsSpecialsColor2};
padding:2.5px 3px;
margin-right:15px;

`
export const HotelsSpecial3 = styled.span`
Width:72px;
Height:26px;
background: ${(props) => props.theme.HotelsSpecialsBg3};
border-radius: 5px;
color:${(props) => props.theme.HotelsSpecialsColor3} ;
padding:2.5px 15px;
margin-right:15px;
`
export const HotelsSpecial4 = styled.span`
Width:90px;
Height:26px;
background:${(props) => props.theme.HotelsSpecialsBg4} ;
border-radius: 5px;
padding:2.5px 19px;
color:${(props) => props.theme.HotelsSpecialsColor4} ;
margin-right:15px;
`
export const HotelsSpecial5 = styled.span`
background:${(props) => props.theme.HotelsSpecialsBg5};
border-radius: 7px;
Width:96px;
Height:26px;
padding: 2.5px 17px;
color:${(props) => props.theme.HotelsSpecialsColor5}; 
margin-right:15px;
`
export const HotelsSpecial6 = styled.span`
color:yellow;
`
export const RoomTitle = styled.h3`
color : ${(props) => props.theme.bestcolor};
font-family: DM Sans;
font-weight: 700;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
`
export const RoomText = styled.p`
color: ${(props) => props.theme.RoomText} 
`
//// Tab
export const Body = styled.article`
  display: flex;
  align-items: center;
  Width:700px;  
`
export const TabsContent = styled.div`
max-width: 1147px;
width: 100%;
`
export const TabsUl = styled.ul`
list-style: none;
margin: 0;
padding:0;
display: flex;  
margin-bottom:20px;
`
export const WrapperTabsContent = styled.div`
position: relative;
`
export const Item1 = styled.div`
text-decoration:none;
`
export const Item2 = styled.div`
margin-left:20px;
`
export const Item3 = styled.div`
margin-left:20px;
`
export const ALink = styled.a`
text-decoration:none;
color:${(props) => props.theme.myProfileTitle};
`

////
export const Features = styled.div`
padding-bottom:62px;
border-bottom: 2px solid #E6E8EC;
`
export const DesContent = styled.span`
color:${(props) => props.theme.DescontentColor};
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
&:active {
color: #145CE6;
}
`
export const FeaturesSpan = styled.span`
Width:104px;
Height:24px;
margin-right:40px;
color: ${(props) => props.theme.DescontentColor};
`
export const FeaturesTitle = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${(props) => props.theme.myProfileTitle};
padding-bottom:25px;
`
export const Row = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
////////////
export const Aminities = styled.div`
margin-top:60px;
Width:500px;
Height:348px;
padding-right:65px;
`
export const AmenitiesUl = styled.ul`
padding:0;
list-style-type:none;
width:27%;
`
export const AmenitiesLinks = styled.li`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.DescontentColor};
margin-bottom:26px;
min-width:180px;
`
export const AmenitiesTitle = styled.h4`
color:${(props) => props.theme.myProfileTitle};
font-family: DM Sans;
font-weight: 700;
font-size: 24px;
line-height: 31px;
margin-bottom: 30px;
`
export const BtnMore = styled.button`
Width:152px;
Height:40px;
padding:10px 21px;
border:none;
outline:none;
background: #3B71FE;
border-radius: 47px;
font-family: Roboto;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`
export const RightContent = styled.div`
width:743px;
`
 