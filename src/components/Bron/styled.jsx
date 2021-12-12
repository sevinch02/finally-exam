import styled from 'styled-components';

export const Card = styled.div`
`
export const Row = styled.div`
display:flex;
`
export const Column = styled.div`
Width:610px;
`
export const ColumnTitle = styled.h3`
font-family: DM Sans;
font-weight: 700;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.bestcolor};
`
export const ReviewReating = styled.span`
`
export const ReviewReatingSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`
export const Room = styled.span`
margin-left:50px;
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.DescontentColor};

`
export const Info = styled.div`
display:flex;
justify-content:space-between;
width:380px;
margin-top:50px;
`
export const Date = styled.span`
Width:184px;
Height:64px;
background:${(props) => props.theme.formInputBg};
border-radius: 12px;
padding:10px 20px;
display:flex;
flex-direction:column;
`
export const DateStrong = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color:${(props) => props.theme.dateStrong};
`
export const Dates = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;
`
export const Detalist = styled.div`
width:380px;
background:${(props) => props.theme.formInputBg};
border: ${(props) => props.theme.reverseboreder};
box-sizing: border-box;
border-radius: 10px;
padding:25px 37px;
margin:30px 0;
`
export const DetalistStrong = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 28px;
line-height: 41px;
padding-bottom: 2px;
color:${(props) => props.theme.DetalistStrong};
`
export const DetalistItems = styled.p`
display:flex;
justify-content:space-between;
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
margin-top:10px;
color:${(props) => props.theme.DetalistItems};
`
export const DetalistItemsSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: right;
color:${(props) => props.theme.DetalistItemsSpan};
` 
export const Button = styled.button`
Width:205px;
Height:48px;
font-family: DM Sans;
font-weight: 700;
font-size: 16px;
line-height: 21px;
color: #FFFFFF;
padding:13px 30px;
background: #3B71FE;
border-radius: 34px;
border:none;
outline:none;
`
export const Img = styled.img`
Width:511px;
Height:348px;
border-radius:50px;
margin-top:90px;
`
