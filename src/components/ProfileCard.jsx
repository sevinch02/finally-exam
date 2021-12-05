import {useTranslation} from 'react-i18next';
import React from 'react';
import styled from 'styled-components';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {AiFillPlusCircle} from 'react-icons/ai';
import {BiHome} from 'react-icons/bi';
import {HiOutlineMail}from 'react-icons/hi';
import {MdCake} from 'react-icons/md';
import {BsGenderMale} from 'react-icons/bs';
import { useRef } from 'react';

const MyProfile = styled.div `
padding-left:33px;
position:relative;
z-index:5;
`
const MyProfileTitle = styled.h2`
font-family: DM Sans;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: ${(props) => props.theme.myProfileTitle};

`
const MyProfileContent = styled.div`
margin-top:84px;
`
const CompleteYourProfile = styled.div `
Width: 787px;
Height: 175px;
background:${(props)=> props.theme.MainHeaderBg} ;
box-shadow: 0px 10px 24px -15px rgba(27, 27, 27, 0.12);
border-radius: 20px;
padding:18px 40px;
`
const CompleteTitle = styled.strong`
font-family: DM Sans;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props)=>props.theme.completeTitle};
`
const CompleteText = styled.p`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #3B3E44;
margin-top:14px;
`
const CompleteBasic = styled.div`
display:flex;
align-items:center;
`
const Verified = styled.span`
background: #E7ECF3;
border-radius: 20px;
padding: 1px 27px;
Width :224px;
Height:26px;
`
const VerifiedText =styled.span`
font-size: 14px;
line-height: 21px;
font-weight:400;
color: #3B3E44;
`

const Row = styled.div`
display: flex;
justify-content: space-between;
margin-bottom:40px;

`
const FormDiv = styled.div`
margin-top:48px;

`
const FormEl = styled.form`
display:flex;
flex-wrap:wrap;
`
const EditBtn = styled.button `
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
const FiledInput = styled.div`
margin-right:17px;
`
const LiveInInput=styled.div`
position:relative;
`
const IconEl = styled.span`
position: absolute ;
top: 10px;
left:20px;
color:#84878B;
`
const InputEl = styled.input`
border: 1px solid #DEDFE1;
box-sizing: border-box;
border-radius: 10px;
Width :376px;
Height :48px;
padding-left: 52px;
`
const LiveLabel = styled.label`
font-family: DM Sans;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 130.2%;
color: #84878B;
margin-bottom:14px;
`
////// address input

// filedInput , LiveLabel ,inputEl inside first input
const AddresInput = styled.div`
position:relative;
`

const IconElStreet = styled.span`
position: absolute ;
top: 10px;
left:24px;
color:#84878B;
`
/// email input

const FiledEmail = styled.div`
width:100%;
`
const FiledEmailInput = styled.input`
width:98%;
Height:58.95px;
border: 1px solid #DEDFE1;
box-sizing: border-box;
border-radius: 10px;
outline:none;
padding-left: 52px;
`
const EmailInput = styled.div`
position:relative;
`
const IconEmail = styled.span`
position:absolute;
top:15px;
left:20px;
color:#84878B;
`
const EmailLabel = styled.label`
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
const DataDiv = styled.div`
position:relative;
` 
const DataIcon = styled.span`
position: absolute;
top:10px;
left:20px;
color:#777E90;
`
const DataLabel = styled.label`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 130.2%;
color: #84878B;
margin-top:40px;
margin-bottom:14px
`

//// Gender

// 

const Gender = styled.div`
position:relative;
`
const GenderIcon = styled.span`
position:absolute;
top:10px;
left:25px;
color:#777E90;

`

const ProfileCard = () => {

  const { t } = useTranslation(); 
    const liveRef = useRef(null);
    const streetRef = useRef(null);
    const emailRef = useRef(null);
    const dateRef = useRef(null);
    const genderRef = useRef(null);
    
   
   
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(liveRef.current.value);
       console.log(streetRef.current.value)
       console.log(emailRef.current.value);
       console.log(dateRef.current.value);
       console.log(genderRef.current.value);
   }
  return (

  
     
      <MyProfile>
        <MyProfileTitle>{t("My_Profile")}</MyProfileTitle> <br />
        <MyProfileContent>
        <CompleteYourProfile>
          <CompleteTitle>{t("Complete_your_Profile")}</CompleteTitle>
          <CompleteText>{t("Complete_your_Profile_details")}</CompleteText>
         <CompleteBasic>
          <Verified>
          <BsFillCheckCircleFill style={{ color:"#3B71FE",marginRight: 6}} />
            <VerifiedText>Verified Email ID</VerifiedText>
          </Verified>
          <Verified>
          <BsFillCheckCircleFill style={{ color:"#3B71FE",marginRight: 6}}/>
              <VerifiedText>Verified mobile Number</VerifiedText>
          </Verified>
          <Verified>
              <AiFillPlusCircle style={{ color:"#3B71FE",marginRight: 6}}/>
              <VerifiedText>Complete Basic Info</VerifiedText>
              </Verified>
          </CompleteBasic>
        </CompleteYourProfile>

          <FormDiv >
              <Row> 
                <h4>{t("Im_Jonathan")}</h4>
                <EditBtn type="submit" >{t("Edit_your_profile")}</EditBtn>
              </Row>
              <FormEl method="post"  onSubmit={handleSubmit}>
              <FiledInput>
                <LiveLabel htmlFor="">{t("Live_in")}</LiveLabel>
                <LiveInInput>
                    <IconEl>  <BiHome /> </IconEl>
                    <InputEl  type="text" placeholder="Zuichi, Switzerland" ref={liveRef}  />
              </LiveInInput>
            </FiledInput>
            <FiledInput>
                <LiveLabel htmlFor="">{t("Street_address")}</LiveLabel>
                <AddresInput>
                  <IconElStreet> <BiHome/> </IconElStreet>
                    <InputEl  type="text" placeholder="2445 Crosswind Drive" ref={streetRef} />
                </AddresInput>
                </FiledInput>
              <FiledEmail>
                  <EmailLabel htmlFor="">{t("Email_address")}</EmailLabel>
                    <EmailInput>
                      <IconEmail>   < HiOutlineMail/> </IconEmail>
                        <FiledEmailInput type="email" placeholder="tomson@company.com" ref={emailRef} />
                      </EmailInput>
                </FiledEmail>
                <FiledInput>
                      <DataLabel htmlFor="">{t("data_of_birth")}</DataLabel>
                    <DataDiv>
                  <DataIcon>   <MdCake/> </DataIcon>
                      <InputEl type="text" placeholder="07.12.1997" ref={dateRef}/>
                    </DataDiv>
              </FiledInput>
              <FiledInput>
                  <DataLabel htmlFor="">{t("Gender")}</DataLabel>
                  <Gender>
                  <GenderIcon> <BsGenderMale/> </GenderIcon>
                    <InputEl type="text" placeholder="Male" ref={genderRef} />
                  </Gender>
                  <button type="submit" >Saved Console.log</button>
              </FiledInput>
                
              </FormEl>
            </FormDiv>
          </MyProfileContent>
      </MyProfile>

 

  )
}

export default ProfileCard
