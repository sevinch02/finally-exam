import React from 'react';
import styled  from 'styled-components';
import {AiFillStar} from 'react-icons/ai'
import { t } from 'i18next';

const TrandingCard = styled.div`
background : ${(props) => props.theme.treandingBg}
`
const TreandingTitle = styled.h5`
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
text-align: center;
letter-spacing: -0.005em;
color: ${(props)=> props.theme.LogoColor};
padding-top:59px;
`
const Row = styled.div`
display:flex;
justify-content:space-between;
`
const Card = styled.div`
Width :534px;
Height :216px;
background: ${(props)=> props.theme.bgCard};
padding:24px;
display:flex;
margin-bottom:35px
`
const Image = styled.img`
border-radius:18px;
`
const CardText = styled.div`
display:flex;
flex-direction:column;
margin-left:23px;
`
const CardTextTitle = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: ${(props)=> props.theme.treadingCardTitle};
`
const Span = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #3B3E44;
margin-top:22px;
`
const SpanStrong = styled.strong`
color:${(props)=> props.theme.cardImgColor}
`
const Button = styled.button`
background: #316BFF;
border-radius: 6px;
padding:7px 16px;
border:none;
outline:none;
color:#fff;
margin-top:24px
`

const TrendingText = styled.p`
font-family: DM Sans;
font-weight: 400;
font-size: 24px;
line-height: 24px;
text-align: center;
color: #3B3E44;
margin-bottom:50px

`
const Trending = () => {
    return (
        <TrandingCard>
        <div className="container" > 
            <TreandingTitle>{t("Trending_cites")}</TreandingTitle>
            <TrendingText>{t("TrendingText")}</TrendingText>
                <Row>
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><SpanStrong>$250.00</SpanStrong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <Image src="/img/san-fransisko.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>San Francisco</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><SpanStrong>$250.00</SpanStrong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                </Row>
                <Row>
                    <Card>
                    <Image src="/img/frankfurt.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Frankfurt main</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><SpanStrong>$250.00</SpanStrong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <Image src="/img/washintong.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Washington</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><SpanStrong>$250.00</SpanStrong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                </Row>
                <Row>
                    <Card>
                    <Image src="/img/Stockholm.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Stockholm</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><SpanStrong>$250.00</SpanStrong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <Image src="/img/Seatle.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Seattle</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><SpanStrong>$250.00</SpanStrong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                </Row>
           <Row> 
           
           
            </Row>
            </div>
        </TrandingCard>
       
    )
}

export default Trending;
