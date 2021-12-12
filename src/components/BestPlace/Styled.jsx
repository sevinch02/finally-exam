import styled  from 'styled-components';

export const BestPlacesContent = styled.section `
  padding-top:150px;
  color: ${ (props) => props.theme.bestPlacesColor};
  padding-bottom:40px;
`
export const BestTitle = styled.h2 `
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
text-align:center;
color: ${(props) => props.theme.bestcolor};
`
export const BestText = styled.p`
font-family: Roboto;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #84878B;
Height:48px;
margin:0 143px;
`
export const CardImg = styled.div`
border: ${(props)=> props.theme.CardBorder};
box-sizing: border-box;
border-radius: 10px;
Width :270px;
Height :205px;
padding-top: 31px;
padding-left:30px;
margin-top:40px;
color: ${(props) => props.theme.cardImgColor};
background-color:${(props)=> props.theme.bestPlacesBg};
&:hover {
  border:none;
  background:${(props)=> props.theme.MainHeaderBg}; 
  box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
  border-radius: 10px;
}
`
export const CardImgImg =styled.img`
border-radius:10px;
Width:70px;
Height:70px;
`
export const CardTitle = styled.h5`
font-family: DM Sans;
font-weight: 700;
font-size: 20px;
line-height: 26px;
color:${(props) => props.theme.CardTitle};
margin-top:15px;
`
export const CardSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`
export const Row = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
`
