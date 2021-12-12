import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import { t } from 'i18next';
import {TravelCom,TravelCard,Title,TitleP,TravelImg,TextDiv,TextTitle,TextSpan,Row} from './styled';


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
