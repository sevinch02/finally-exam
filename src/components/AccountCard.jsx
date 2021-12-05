
import React from 'react'
import styled from 'styled-components';
import {GrEdit} from 'react-icons/gr';
import {BiEditAlt} from 'react-icons/bi'
import{AiOutlineCheck} from 'react-icons/ai'

const ProfileCardPage = styled.div `
background: #FFFFFF;
border: 2px solid #F4F5F6;
box-sizing: border-box;
border-radius: 10px;
Width:350px;
Height: 559px;
text-align: center;
padding-left:27px;
padding-right:37px;
`
const ProfileCardPageImage = styled.img`
position:relative;
width:170px;
height:170px;
margin-top:30px;   
`
const ProfileCardImageEditor = styled.span`
position:absolute;
top:348px;
left:320px;
width:40px;
height:40px;
background: #F4F5F6;
padding: 8px 14px;
border-radius:50%
`
const ProfileCardName = styled.h4`
font-family: DM Sans;
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: #23262F;
margin-top:20px;
margin-bottom:21px;
`
const Span = styled.span`
background: #F4F5F6;
border-radius: 32px;
padding:8px 34px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
color: #777E91;
// margin-bottom:28px;
// border-top:1px solid #F5F6F7;

`
const Line = styled.span`
Width :286.2px;
Height :2px;
background: #F5F6F7;
margin-top:24px;
margin-bottom:29px;

`
const About= styled.div`
display:flex;
flex-direction:column;
`
const AboutFrom = styled.div`
display:flex;
justify-content: space-between;
`
const AboutFromSpan1 = styled.span`
font-family: Roboto;
font-weight: 500;
font-size: 14px;
line-height: 25px;
text-align: center;
color: #3B3E44;
`
const AboutFromSpan2 = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 25px;
text-align: center;
color: #84878B;
`
const AboutMember = styled.div`
display:flex;
justify-content: space-between;
margin-top:17px;
margin-bottom:33px;
`
const EditBtn = styled.button`
Width :280px;
Height:36px;
background: #878CFF;
color:#fff;
border:none;
border-radius: 20px;
font-family: Roboto;
font-weight: 500;
font-size: 14px;
line-height: 25px;
text-align: center;
`
const AccountCard = () => {
    return (
        
         <ProfileCardPage>
            <ProfileCardPageImage src="/img/profile-foto.jpg" alt=""/>
                <ProfileCardImageEditor > 
                    <GrEdit/> 
                </ProfileCardImageEditor>
            <ProfileCardName>Jonathan Due</ProfileCardName>
            <Span> <AiOutlineCheck/> Indentity verified </Span>

           
            <About> <Line> </Line>
                <AboutFrom>
                    <AboutFromSpan1>From</AboutFromSpan1>
                    <AboutFromSpan2>United State</AboutFromSpan2>
                </AboutFrom>
                <AboutMember>
                    <AboutFromSpan1>Member Since</AboutFromSpan1>
                    <AboutFromSpan2>05.06.1996</AboutFromSpan2>
                </AboutMember>
            </About>
            <EditBtn type="submit" >Edit My Data <BiEditAlt/> </EditBtn>
        </ProfileCardPage>
       
    );
}

export default AccountCard;
