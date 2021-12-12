import styled  from 'styled-components';

export const MainHeader = styled.div `
padding:15px 20px;
background-color:${(props) => props.theme.MainHeaderBg};
`
export const Row = styled.div`
display: flex;
justify-content:space-between;
align-items : center;
`
export const Money = styled.span`
font-family: Roboto;
font-weight: bold;
font-size: 14px;
line-height: 20px;
color: #84878B;
margin-right:14px;
position:relative;
`
export const Badge = styled.span`
Width :9px;
Height:9px;
position:absolute;
top:0;
left:165px;
background-color:red;
border-radius:50%;
color:#fff;
`
export const LogoText = styled.strong`
font-family: Open Sans;
font-weight: bold;
font-size: 20px;
line-height: 27px;
color:${(props) => props.theme.LogoColor}; 
text-decoration:none;
`
export const LogoImg = styled.img`
border-radius:50%;
`
export const HeaderLeftContent = styled.div`
color: #222529;
margin-right : 20px;
padding : 10px 10px;
border-right: 2px solid #E7ECF3;
display: flex;
align-items: center;

`
export const HeaderLeft = styled.div`
display:flex;
flex-direction: row;
align-items:center;
`
export const Profile = styled.div`
position:relative;
margin-right:40px;
display:flex;
align-items:center;
`
export const ProfileText = styled.span`
margin-left: 10px;
color:${(props) => props.theme.cardBg};
`
export const ProfileImg = styled.img`
border-radius:16px;
`