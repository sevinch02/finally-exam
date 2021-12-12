import styled from 'styled-components';

export const MyProfile = styled.div `
padding-left:33px;
position:relative;
z-index:5;
`
export const MyProfileTitle = styled.h2`
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: ${(props) => props.theme.myProfileTitle};

`
export const MyProfileContent = styled.div`
margin-top:84px;
`
export const CompleteYourProfile = styled.div `
Width: 787px;
Height: 175px;
background:${(props)=> props.theme.MainHeaderBg} ;
box-shadow: 0px 10px 24px -15px rgba(27, 27, 27, 0.12);
border-radius: 20px;
padding:18px 40px;
`
export const CompleteTitle = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props)=>props.theme.completeTitle};
`
export const CompleteText = styled.p`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
margin-top:14px;
`
export const CompleteBasic = styled.div`
display:flex;
align-items:center;
`
export const Verified = styled.span`
background: #E7ECF3;
border-radius: 20px;
padding: 1px 27px;
Width :224px;
Height:26px;
`
export const VerifiedText =styled.span`
font-size: 14px;
line-height: 21px;
font-weight:400;
color: #3B3E44;
`
export const Row = styled.div`
display: flex;
justify-content: space-between;
margin-bottom:40px;

`
export const FormDiv = styled.div`
margin-top:48px;

`
export const FormEl = styled.form`
display:flex;
flex-wrap:wrap;
`
export const EditBtn = styled.button `
border: 2px solid #E7ECF3;
box-sizing: border-box;
border-radius: 30px;
padding: 8px 17px;
font-family: DM Sans;
font-weight: 500;
font-size: 14px;
line-height: 18px;
text-align: center;
color: #222529;
`
/////// Live in input
export const FiledInput = styled.div`
margin-right:17px;
`
export const LiveInInput=styled.div`
position:relative;
`
export const IconEl = styled.span`
position: absolute ;
top: 10px;
left:20px;
color:#84878B;
`
export const InputEl = styled.input`
border: 1px solid #DEDFE1;
box-sizing: border-box;
border-radius: 10px;
Width :376px;
Height :48px;
padding-left: 52px;
`
export const LiveLabel = styled.label`
font-family: DM Sans;
font-weight: 700;
font-size: 16px;
line-height: 130.2%;
color: #84878B;
margin-bottom:14px;
`
////// address input

// filedInput , LiveLabel ,inputEl inside first input
export const AddresInput = styled.div`
position:relative;
`
export const IconElStreet = styled.span`
position: absolute ;
top: 10px;
left:24px;
color:#84878B;
`
/// email input
export const FiledEmail = styled.div`
width:100%;
`
export const FiledEmailInput = styled.input`
width:98%;
Height:58.95px;
border: 1px solid #DEDFE1;
box-sizing: border-box;
border-radius: 10px;
outline:none;
padding-left: 52px;
`
export const EmailInput = styled.div`
position:relative;
`
export const IconEmail = styled.span`
position:absolute;
top:15px;
left:20px;
color:#84878B;
`
export const EmailLabel = styled.label`
margin-top:30px;
margin-bottom:12px;
font-family: DM Sans;
font-weight: 700;
font-size: 16px;
line-height: 130.2%;
color: #84878B;
`
/// Date Of Birth

// FiledInput , InputEl 
export const DataDiv = styled.div`
position:relative;
` 
export const DataIcon = styled.span`
position: absolute;
top:10px;
left:20px;
color:#777E90;
`
export const DataLabel = styled.label`
font-family: DM Sans;
font-weight: bold;
font-size: 16px;
line-height: 130.2%;
color: #84878B;
margin-top:40px;
margin-bottom:14px
`
//// Gender

export const Gender = styled.div`
position:relative;
`
export const GenderIcon = styled.span`
position:absolute;
top:10px;
left:25px;
color:#777E90;
`