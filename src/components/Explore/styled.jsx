import styled from 'styled-components';

export const ExploreContent = styled.article`
padding-top:61px;
`
export const Title = styled.h4`
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.exTitle}
` 
export const Card = styled.div`
Width: 270px;
Height:362px;
border: ${(props)=> props.theme.CardBorder};
box-sizing: border-box;
border-radius: 20px;
padding: 14px;
margin-bottom:71px;
margin-top:50px;
border: 1px solid ${(props) => props.theme.CardBorder};
background: ${(props) => props.theme.bgCard};
&:hover{
  box-shadow: ${(props) => props.theme.CardBoxShadow};
}

`
export const CardImg = styled.img`
border-radius:20px;
`
export const CardSpanItem = styled.span`
Width:60px;
Height:30px;
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.CardTitle};
`
export const CardDiv = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:12px;
`
export const CardDivTitle = styled.h5`
font-family: DM Sans;
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: ${(props) => props.theme.color};
`
export const CardDivSpan = styled.span`
background: rgba(49, 107, 255, 0.2);
border-radius: 6px;
padding:3px 10px;
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #316BFF;
`
export const Location = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
` 
export const Info = styled.div`
display:flex;
flex-direction:row;
margin-top:15px
`
export const Icons = styled.div`
text-align:right;
margin-top: -66px;
margin-bottom: 47px;
`