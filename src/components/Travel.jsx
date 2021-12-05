import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import { t } from 'i18next';
const TravelCom = styled.div`
background: ${(props) => props.theme.featuredbg};
padding-bottom:120px;
`
const TravelCard = styled.div`
Width :270px;
Height:323px;
position:relative;
margin-bottom:40px;
`
const Title = styled.h5`
padding-top:50px;
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
color: ${(props) => props.theme.aboutTravelItem}
`
const TitleP = styled.p`
`
const TravelImg = styled.img`
border-radius:20px;
filter:brightness(75%)
`
const TextDiv =  styled.div`
position:absolute;
top: 218px;
left: 30px;
color:#fff;
`
const TextTitle = styled.h5`
`
const TextSpan = styled.span`
`
const Row = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`
const Travel = () => {
    return (
        
        <TravelCom>
            <div className="container">
                <div>
                <Title>{t("Travel_Title")}</Title>
                <TitleP>{t("Travel_text")}</TitleP>
                    </div>
            <Row>
                <TravelCard>
                    <TravelImg src="/img/travel.jpg" alt="travel2"/>
                    <TextDiv>
                        <TextTitle>Beach Hobby</TextTitle>
                        <TextSpan> 
                            <AiFillStar style={{color: "yellow"}} />
                        4.8 (122 reviews)
                        </TextSpan>
                    </TextDiv>
                </TravelCard>
                <TravelCard>
                    <TravelImg src="/img/travel3.jpg" alt="travel2"/>
                    <TextDiv>
                        <TextTitle>City Tours</TextTitle>
                        <TextSpan> 
                            <AiFillStar style={{color: "yellow"}} />
                        4.8 (122 reviews)
                        </TextSpan>
                    </TextDiv>
                </TravelCard>
                <TravelCard>
                    <TravelImg src="/img/travel4.jpg" alt="travel2"/>
                    <TextDiv>
                        <TextTitle>Hiking Trips</TextTitle>
                        <TextSpan> 
                            <AiFillStar style={{color: "yellow"}} />
                        4.8 (122 reviews)
                        </TextSpan>
                    </TextDiv>
                </TravelCard>
                <TravelCard>
                    <TravelImg src="/img/travel5.jpg" alt="travel2"/>
                    <TextDiv>
                        <TextTitle>Sports Trips</TextTitle>
                        <TextSpan> 
                            <AiFillStar style={{color: "yellow"}} />
                        4.8 (122 reviews)
                        </TextSpan>
                    </TextDiv>
                </TravelCard>
                </Row>
         </div>
     </TravelCom>
    );
};

export default Travel;
