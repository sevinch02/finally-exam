import styled from 'styled-components';

export const AsideCard = styled.aside`
Width :290px
Height :1325px
background:${(props) => props.theme.searchLocationBg};
margin-left:20px;
`
/// search 
export const Searchbar = styled.div`
position:relative;
background: ${(props)=> props.theme.MainHeaderBg};
border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 10px;
padding:14px 20px;
Width :290px;
Height :53px;
margin-top:13px;
`
export  const SearchBarInput = styled.input`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border:none;
outline:none;
width:100%;
background:transparent;
`
export const SearchBarIcon = styled.span`
position:absolute;
top:12px;
right:25px;
color:#DADADA;
`
export const SeeMore = styled.p`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #145CE6;
margin-top:15px;
`
// Popular
export const Popular = styled.div`
margin-top:30px;
`
export const PopularTitle = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: ${(props) => props.theme.featuredTitle};
`
export const PopularItem = styled.form`
display:flex;
align-items:center;
margin-bottom:14px;
margin-top:16px;
`
export const Checkbox = styled.input`
margin-right:12px;
`
export const PopularItemSpan = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;  
color: ${(props) => props.theme.popularItem};`

///
export const PriceRange = styled.div`
`

// Property
export const PropertyItem = styled.div`
display: flex;
justify-content:space-between;
width: 100%;
`
export const PropertyItemLabel = styled.label`
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.popularItem};
`
export const PropertyItemSpan = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #84878B;
` 