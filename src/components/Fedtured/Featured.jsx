import React from 'react';
import {useTranslation} from 'react-i18next';

import {GridContainer,GridItem5,GridItem6,ImgContainer,Row,FeaturedPage,TitletextTitle} from './styled';
import {TitleTextText,GridDiv1,GridItem1,GridDiv1Span,GridDiv1title,GridDiv1Profile} from './styled';
import {GridDiv1ProfileImage,GridDiv1ProfileText} from './styled';
import {GridDiv2,GridItem2,GridDiv2Span,GridDiv2title,GridDiv2ProfileText,GridDiv2Profile} from './styled';
import {GridDiv3,GridItem3,GridDiv3Span,GridDiv3title,GridDiv3Profile,GridDiv3ProfileText} from './styled';
import {GridDiv4,GridItem4,GridDiv4Span,GridDiv4title,GridDiv4Profile,GridDiv4ProfileText} from './styled';
import {GridDiv5,GridDiv5Span,GridDiv5title,GridDiv5Profile,GridDiv6} from './styled';
import {GridDiv6Span,GridDiv6title,GridDiv6Profile,GridDiv6ProfileText} from './styled'



const Featured = () => {
    const { t } = useTranslation();
    return (
        <FeaturedPage>
        <div className="container">
              <TitletextTitle>{t("Featured_Destinations")}</TitletextTitle>
              <TitleTextText>{t("Featured_Destinations_text")}</TitleTextText>
            <Row>
        
           <GridContainer>
               <GridDiv1> 
                  <GridItem1 src="/img/featured-1-img.jpg" alt="" />
                  <GridDiv1Span>3.5</GridDiv1Span> <GridDiv1title>Barcelona Tour</GridDiv1title>
               <GridDiv1Profile><GridDiv1ProfileImage src="/img/features-avatar.jpg" alt="" /> 
               <GridDiv1ProfileText>196 Activities</GridDiv1ProfileText></GridDiv1Profile>   
                </GridDiv1>
              <div style={{display: "flex"}} >
              <GridDiv2> 
                <GridItem5 src="/img/featured-6-img.jpg"  alt="" />
                  <GridDiv2Span>3.5</GridDiv2Span> <GridDiv2title>Barcelona Tour</GridDiv2title>
                  <GridDiv2Profile>
                      <GridDiv1ProfileImage src="/img/features-avatar.jpg" alt="" /> 
                     <GridDiv2ProfileText>196 Activities</GridDiv2ProfileText>
                  </GridDiv2Profile>   
              </GridDiv2>
              <GridDiv3>
                <GridItem6 src="/img/featured-5-img.jpg"  alt="" />
                <GridDiv3Span>3.5</GridDiv3Span> <GridDiv3title>Barcelona Tour</GridDiv3title>
                  <GridDiv3Profile>
                      <GridDiv1ProfileImage src="/img/features-avatar.jpg" alt="" /> 
                     <GridDiv3ProfileText>196 Activities</GridDiv3ProfileText>
                  </GridDiv3Profile>  
              </GridDiv3>
             </div>     
           </GridContainer> 
           <ImgContainer>
             <GridDiv4> 
               <GridItem2 src="/img/featured-2-img.jpg" alt="" />  
               <GridDiv4Span>3.5</GridDiv4Span> <GridDiv4title>Australia Tour</GridDiv4title>
                  <GridDiv4Profile>
                      <GridDiv1ProfileImage src="/img/features-avatar.jpg" alt="" /> 
                     <GridDiv4ProfileText>196 Activities</GridDiv4ProfileText>
                  </GridDiv4Profile>  
             </GridDiv4>
            <GridDiv5>
               <GridItem3 src="/img/featured-3-img.jpg" alt="" />  
               <GridDiv5Span>3.5</GridDiv5Span> <GridDiv5title> Japan Tour</GridDiv5title>
                  <GridDiv5Profile>
                      <GridDiv1ProfileImage src="/img/features-avatar.jpg" alt="" /> 
                     <GridDiv4ProfileText>196 Activities</GridDiv4ProfileText>
                  </GridDiv5Profile>  
            </GridDiv5>
             <GridDiv6>
               <GridItem4 src="/img/featured-4-img.jpg" alt="" /> 
               <GridDiv6Span>3.5</GridDiv6Span> <GridDiv6title> Japan Tour</GridDiv6title>
                  <GridDiv6Profile>
                      <GridDiv1ProfileImage src="/img/features-avatar.jpg" alt="" /> 
                     <GridDiv6ProfileText>196 Activities</GridDiv6ProfileText>
                  </GridDiv6Profile>  
             </GridDiv6>
            </ImgContainer>  
            </Row>
   
         </div>  
    </FeaturedPage>
    )
}

export default Featured;
