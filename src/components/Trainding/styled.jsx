import styled  from 'styled-components';

export const TrandingCard = styled.div`
background : ${(props) => props.theme.treandingBg};
`
export const TreandingTitle = styled.h5`
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
text-align: center;
letter-spacing: -0.005em;
color: ${(props)=> props.theme.LogoColor};
padding-top:59px;

`
export const Row = styled.div`
display:flex;
flex-wrap :wrap;
justify-content:space-between;
`
export const Card = styled.div`
Width :534px;
Height :216px;
background: ${(props)=> props.theme.bgCard};
padding:24px;
display:flex;
margin-bottom:35px
`
export const Image = styled.img`
border-radius:18px;
`
export const CardText = styled.div`
display:flex;
flex-direction:column;
margin-left:23px;
`
export const CardTextTitle = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 24px;
line-height: 36px;
margin-bottom:12px;
color: ${(props)=> props.theme.treadingCardTitle};
`
export const Span = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: ${(props)=> props.theme.DescontentColor}; 
margin-top:22px;
`
export const SpanStrong = styled.strong`
color:${(props)=> props.theme.DescontentColor}
`
export const Strong = styled.strong`
color:${(props) => props.theme.Datalabel};
`
export const Button = styled.button`
background: #316BFF;
border-radius: 6px;
padding:7px 16px;
border:none;
outline:none;
color:#fff;
margin-top:24px
`

export const TrendingText = styled.p`
font-family: DM Sans;
font-weight: 400;
font-size: 24px;
line-height: 24px;
text-align: center;
color: #3B3E44;
margin-bottom:50px

`