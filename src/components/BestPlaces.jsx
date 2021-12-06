import React from 'react'
import styled  from 'styled-components';
import { t } from 'i18next';

const BestPlacesContent = styled.section `
  padding-top:150px;
  color: ${ (props) => props.theme.bestPlacesColor};
  padding-bottom:40px;
`
const BestTitle = styled.h2 `
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
text-align:center;
color: ${(props) => props.theme.bestcolor}
`
const BestText = styled.p`
font-family: Roboto;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #84878B;
Height:48px;
margin:0 143px;
`
const CardImg = styled.div`
border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 10px;
Width :270px;
Height :205px;
padding-top: 31px;
padding-left:30px;
margin-top:40px;
color: ${(props) => props.theme.cardImgColor}
background-color:${(props)=> props.theme.bestPlacesBg}
&:hover{
  border:none;
  background: #FFFFFF;
box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
border-radius: 10px;
}
`
const CardImgImg =styled.img`
border-radius:10px;
Width:70px;
Height:70px;


`
const CardTitle = styled.h5`
font-family: DM Sans;
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #3B3E44;
margin-top:15px;
`
const CardSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`
const Row = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
`
const BestPlaces = () => {
  return (
    <BestPlacesContent>
      <div className="container">
            <BestTitle>{t("Search_best_place")} </BestTitle>
            <BestText>{t("Search_best_places_text")}</BestText>
            <Row>
                <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 <CardImg>
                        <CardImgImg  src="/img/best-search.jpg" alt="best-search"/>  
                        <CardTitle>Batu, East Java</CardTitle>               
                        <CardSpan>86 Destinations </CardSpan>
                 </CardImg>
                 </Row>
      </div>
    </BestPlacesContent>

  )
}

export default BestPlaces
