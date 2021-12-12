import styled from 'styled-components';

export const BigSearchPage = styled.section `
background: ${(props) => props.theme.MainHeaderBg};
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
border-radius: 20px;
height: 205px;
`
export const Forma = styled.form`
padding:25px 60px;
`
export const DivFormEl = styled.div`
Width:332px;
Height:70px;
background: #E8EFFF;
opacity: 0.8;
border: 1px solid #E7E8EA;
box-sizing: border-box;
border-radius: 8px;
`
export const DateForm = styled.div`
Width:250px;
Height:70px;
background: #E8EFFF;
opacity: 0.8;
border: 1px solid #E7E8EA;
box-sizing: border-box;
border-radius: 8px;
padding:8px;
`
export const LabelEl = styled.label`
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #3B3E44;
padding:10px 12px 3px 12px;
`
export const InputEl = styled.input`
background: #E8EFFF;
width:100%;
border:none;
outline:none;
padding:0 12px;
`
export const IconSpan = styled.span`
Width :30px;
Height:30px;
position: relative;
margin-top:20px;
background: #FFF;
border-radius:50%;
margin: 17px -5px;
padding:8px 5px;
z-index: 5;
`
export const Row = styled.div`
display:flex;
flex-direction: row;

`
export const SearchBtn = styled.button`
background: #3B71FE;
border-radius: 10px;
Width:152px;
Height:70px;
margin-left:50px;
outline:none;
border:none;
color:#fff;
`
export const DateInput = styled.input`
border:none;
outline:none;
background:transparent;
`
//// Tab
export const Body = styled.article`
  display: flex;
  align-items: center;
`
export const TabsContent = styled.div`
max-width: 1147px;
width: 100%;
`
export const TabsUl = styled.ul`
list-style: none;
margin: 0;
display: flex;
height: 30px;
`
export const WrapperTabsContent = styled.div`
position: relative;
`
export const Item1 = styled.div`
text-decoration:none;
margin-left:35px
`
export const Item2 = styled.div`
margin-left:20px;
`
export const Item3 = styled.div`
margin-left:20px;
`
export const ALink = styled.a`
text-decoration:none;
color:${(props) => props.theme.cardBg};
`
export const PassengerDiv = styled.div`
display:flex;
flex-direction:row-reverse;
margin-left:374px
`