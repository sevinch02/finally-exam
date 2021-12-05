import { t } from 'i18next';
import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io'

const TopTurPage = styled.section `
background: ${(props) => props.theme.bestPlacesBg};
color: ${(props) => props.theme.bestPlacesColor};
padding-bottom:23px
`
const Card = styled.div`
position:relative;
`
const CardImg = styled.img`
border-radius:18px;
`
const CardText  = styled.div`

`
const CardTitle = styled.h4`
position:absolute;
top:390px;
left:40px;
color:#fff;
`
const CardSpan = styled.span`
position: absolute;
top:30px;
left:20px;
border-radius: 50px;
background: rgba(20, 20, 22, 0.2);
backdrop-filter: blur(4px);
Width :113px;
Height :50px;
padding: 12px 32px;
color: #E9EBF3

`
const SpanEl = styled.span`
position:absolute;
top:420px;
left:40px;
color: #FCFCFD;
opacity: 0.9;
`
const Icons = styled.div`
text-align:right;
margin-top: -66px;
margin-bottom: 47px;
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
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props) => props.theme.titleP}
`
const TopTur = () => {
  return (
    <TopTurPage >
      <div className="container">
          <Title>{t("Top_tour")}</Title> 
          <TitleP>{t("Camp_calm")}</TitleP>
           <Icons>
              <IoIosArrowDropleft style={{color: "#84878B",width: 38, height:38,}} />
              <IoIosArrowDropright style={{color: "#84878B",width: 38, height:38,}} /> 
           </Icons>  
          <Swiper spaceBetween={30} slidesPerView={3}>
      
          <SwiperSlide>
            <Card>
              <CardImg  src="/img/toptur-img.jpg" />
                <CardText>
                  <CardSpan>Japan </CardSpan>
                  <CardTitle>Japan</CardTitle>
                  <SpanEl>10 Popular Places </SpanEl>
              </CardText>
            </Card>
          </SwiperSlide>
                  
        <SwiperSlide>
                    <Card>
                      <CardImg  src="/img/indonesia.jpg" />
                      <CardText>
                        <CardSpan>Indonesia </CardSpan>
                        <CardTitle>Bali</CardTitle>
                        <SpanEl>10 Popular Places </SpanEl>
                      </CardText>
                    </Card>
        </SwiperSlide>
        <SwiperSlide>
                    <Card>
                      <CardImg  src="/img/barselonia.jpg" />
                      <CardText>
                        <CardSpan>Barcelona </CardSpan>
                        <CardTitle>Spain</CardTitle>
                        <SpanEl>10 Popular Places </SpanEl>
                      </CardText>
                    </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card>
               <CardImg  src="/img/barselonia.jpg" />
              <CardText>
                  <CardSpan>Barcelona </CardSpan>
                  <CardTitle>Spain</CardTitle>
                  <SpanEl>10 Popular Places </SpanEl>
              </CardText>
            </Card>
        </SwiperSlide>
         <SwiperSlide>
             <Card> 
                 <CardImg  src="/img/toptur-img.jpg" />
                    <CardText>
                        <CardSpan>Japan </CardSpan>
                        <CardTitle>Japan</CardTitle>
                        <SpanEl>10 Popular Places </SpanEl>
                    </CardText>
              </Card>
          </SwiperSlide>
         </Swiper>
      </div>
    </TopTurPage>
  );
}
export default TopTur