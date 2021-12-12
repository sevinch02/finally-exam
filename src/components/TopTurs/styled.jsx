import styled from 'styled-components';

export const TopTurPage = styled.section `
color: ${(props) => props.theme.bestPlacesColor};
padding-bottom:23px
`
export const Card = styled.div`
position:relative;
`
export const CardImg = styled.img`
border-radius:18px;
`
export const CardText  = styled.div`

`
export const CardTitle = styled.h4`
position:absolute;
top:390px;
left:40px;
color:#fff;
`
export const CardSpan = styled.span`
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
export const SpanEl = styled.span`
position:absolute;
top:420px;
left:40px;
color: #FCFCFD;
opacity: 0.9;
`
export const Icons = styled.div`
text-align:right;
margin-top: -66px;
margin-bottom: 47px;
`
export const Title = styled.h5`
padding-top:50px;
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
color: ${(props) => props.theme.aboutTravelItem}
`
export const TitleP = styled.p`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props) => props.theme.titleP}
`
