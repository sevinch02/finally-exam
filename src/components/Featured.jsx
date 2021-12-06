
import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';


const GridContainer = styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
`

const GridItem5 = styled.img`
Width:408px;
Height:408px;
margin-top:30px;
border-radius: 20px
`
const GridItem6 = styled.img`
Width:408px;
Height:408px;
margin-top:30px;
margin-left:50px;
border-radius: 20px
`
const ImgContainer = styled.div`
display:flex;
flex-direction: column;
`
const Row = styled.div`
display:flex;
flex-direction: row;
`
const FeaturedPage = styled.section`

`
const TitletextTitle = styled.h2`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.featuredTitle};
`
const TitleTextText = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
`
/////////// 1-div 
const GridDiv1 = styled.div`
position: relative;
`
const GridItem1 = styled.img`
Width: 870px;
Height: 280px;
margin-right:20px;
border-radius: 20px
`
const GridDiv1Span = styled.span`
position: absolute;
top:20px;
left:20px;
Width: 66px;
Height:28px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
color: #FF543D;
font-family: DM Sans;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-align: center; `
const GridDiv1title = styled.h3`
position: absolute;
top:200px;
left:20px;
font-family: DM Sans;
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 24px;
color: #FFFFFF;
`
const GridDiv1Profile = styled.span`
position: absolute;
top:235px;
left:20px;
color:#fff;
display :flex;
align-items: center
`
const GridDiv1ProfileImage = styled.img`
border-radius: 10px
`
const GridDiv1ProfileText = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
`

/////// 2-div
const GridDiv2 = styled.div`
position: relative;
`
const GridItem2 = styled.img`
Width:270px;
Height:220px;
margin-bottom:30px;
border-radius: 20px
`
const GridDiv2Span = styled.span`
position: absolute;
top:50px;
left:30px;
Width: 66px;
Height:28px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
color: #FF543D;
font-family: DM Sans;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-align: center;
`
const GridDiv2title = styled.h3`
position: absolute;
top:330px;
left:20px;
font-family: DM Sans;
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 24px;
color: #FFFFFF;
`
const GridDiv2ProfileText = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
`
const GridDiv2Profile  = styled.div`
position: absolute;
top:375px;
left:20px;
color:#fff;
display :flex;
align-items: center
`
///// 3-div
const GridDiv3 = styled.div`
position: relative;
`
const GridItem3 = styled.img`
Width:270px;
Height:220px;
margin-bottom:30px;
border-radius: 20px
`
const GridDiv3Span = styled.span`
position: absolute;
top:50px;
left:72px;
Width: 66px;
Height:28px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
color: #FF543D;
font-family: DM Sans;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-align: center;
`
const GridDiv3title = styled.h3`
position: absolute;
top:330px;
left:72px;
font-family: DM Sans;
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 24px;
color: #FFFFFF;
`
const GridDiv3Profile = styled.span`
position: absolute;
top:375px;
left:72px;
color:#fff;
display :flex;
align-items: center
`
const GridDiv3ProfileText = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
`

///////// 4-div

const GridDiv4 = styled.div`
position: relative;
`

const GridItem4 = styled.img`
Width:270px;
Height:220px;
margin-bottom:30px;
border-radius: 20px
`
const GridDiv4Span = styled.span`
position: absolute;
top:30px;
left:20px;
Width: 49px;
Height:20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
color: #FF543D;
font-family: DM Sans;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-align: center;
`

const GridDiv4title = styled.h3`
position: absolute;
top:140px;
left:20px;
font-family: DM Sans;
font-style: normal;
font-weight: 700;
// font-size: 40px;
line-height: 24px;
color: #FFFFFF;
font-size: 18px;
line-height: 20px;
`
const GridDiv4Profile = styled.span`
position: absolute;
top:170px;
left:20px;
color:#fff;
display :flex;
align-items: center
`

const  GridDiv4ProfileText = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 10px;
line-height: 15px;
color: #FFFFFF;
`
//////////// 5-

const GridDiv5 = styled.div`
position:relative;
`
const GridDiv5Span = styled.span`
position: absolute;
top:30px;
left:20px;
Width: 49px;
Height:20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
color: #FF543D;
font-family: DM Sans;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-align: center;
`

const GridDiv5title = styled.h3`
position: absolute;
top:140px;
left:20px;
font-family: DM Sans;
font-style: normal;
font-weight: 700;
// font-size: 40px;
line-height: 24px;
color: #FFFFFF;
font-size: 18px;
line-height: 20px;`

const GridDiv5Profile = styled.span`
position: absolute;
top:170px;
left:20px;
color:#fff;
display :flex;
align-items: center
`

////6
const GridDiv6 = styled.div`
position: relative;
`
const GridDiv6Span = styled.span`
position: absolute;
top:30px;
left:20px;
Width: 49px;
Height:20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
color: #FF543D;
font-family: DM Sans;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-align: center;
`
 
const GridDiv6title = styled.h3`
position: absolute;
top:140px;
left:20px;
font-family: DM Sans;
font-style: normal;
font-weight: 700;
// font-size: 40px;
line-height: 24px;
color: #FFFFFF;
font-size: 18px;
line-height: 20px;
`

const GridDiv6Profile = styled.span`
position: absolute;
top:170px;
left:20px;
color:#fff;
display :flex;
align-items: center
`
 
const GridDiv6ProfileText = styled.span`` 

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
