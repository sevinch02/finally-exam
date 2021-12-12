import styled  from 'styled-components';

export const Card = styled.div`
Width:408px;
height:846px;
background: ${(props) => props.theme.MainHeaderBg};
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 20px;
padding:20px 44px;
margin-bottom:80px;
margin-top:80px;
`
export const Checkbox = styled.input`
`
export const Nightdiv = styled.div`
border-bottom: 1px solid #3B3E44;
padding-bottom: 17px;
`
export const Night = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props)=> props.theme.Datalabel};
`
export const Sale = styled.span`
Width:80px;
Height:30px;
background: #145CE6;
border-radius: 25px;
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
padding:6px 10px;
margin-left:57px;
`
export const Span = styled.span`
color: #B1B5C4;
font-family: DM Sans;
font-weight: 400;
font-size: 18px;
line-height: 23px;
`
export const Row = styled.div`
display:flex;
justify-content:space-between;
`
export const DateLabel = styled.label`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: ${(props)=> props.theme.Datalabel};
`
export const DataDiv = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
`
export const DateInput = styled.input`
background: ${(props)=> props.theme.priceRowbg};
color: ${(props) => props.theme.PriceColor};
border-radius: 10px;
Width:152px;
Height:45px;
border:none;
outline:none;
`
export const Select = styled.select`
Width :316px;
Height:44px;
padding:12px 10px,
Width:316px;
Height:44px;
background: ${(props)=> props.theme.priceRowbg};
color: ${(props) => props.theme.PriceColor};
border-radius: 10px;
border:none;
outline:none;
`
export const Extra = styled.div`
margin:20px 0;

`
export const ExtraTitle = styled.h4`
color: ${(props)=> props.theme.Datalabel};
`
export const ExtraItem = styled.div`
display:flex;
justify-content:space-between;
`
export const ExtraItemSpan = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
`
export const FeaturesPrice = styled.span`
font-family: Roboto;
font-weight: 500;
font-size: 14px;
line-height: 27px;
text-align: right;
color: ${(props)=> props.theme.Datalabel};
`
export const PropertyItemLabel = styled.label`
color: ${(props) => props.theme.PriceColor};
margin-left:12px;
`
export const Price = styled.div`
margin:12px 0;
`
export const PriceRow = styled.div`
display:flex;
justify-content:space-between;
Width:316px;
Height:152px;
background: ${(props)=> props.theme.priceRowbg};
border-radius: 10px;
padding:10px 20px;
`
export const Li = styled.li`
list-style-type:none; 
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.PriceColor};
margin-bottom:14px;
`
export const UL = styled.ul`
list-style-type:none; 
padding:0;
`
export const BookBtn = styled.button`
Width:316px;
Height:48px;
background: #145CE6;
color: #FFFFFF;
font-family: DM Sans;
font-weight: 700;
font-size: 20px;
line-height: 26px;
border:none;
outline:none;
border-radius: 12px;
padding:11px 50px;
margin-bottom:12px;
`
export const Total = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:12px;
margin-bottom:11px;

`
export const TotalStrong = styled.span`
font-family: Roboto;
font-weight: 500;
font-size: 16px;
line-height: 27px;
text-align: right;
`
export const FormEl = styled.form`
`
export const ChargedSpan =styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #777E91;
margin:0 65px;
`