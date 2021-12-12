import React from 'react'; 
import {AiFillStar} from 'react-icons/ai'
import { t } from 'i18next';
import {TrandingCard,TreandingTitle,Row,Card,Image,CardText,CardTextTitle} from './styled';
import {Span,SpanStrong,Strong,Button,TrendingText} from './styled';


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
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
             
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
               
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <Image src="/img/treading.jpg" alt="" />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <SpanStrong>4.91 (147)</SpanStrong> 
                        </span>
                        <Span><Strong>$250.00</Strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                </Row>
            </div>
        </TrandingCard> 
    );
}

export default Trending;
