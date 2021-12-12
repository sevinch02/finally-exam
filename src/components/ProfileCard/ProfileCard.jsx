import {useTranslation} from 'react-i18next';
import React from 'react';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {AiFillPlusCircle} from 'react-icons/ai';
import {BiHome} from 'react-icons/bi';
import {HiOutlineMail}from 'react-icons/hi';
import {MdCake} from 'react-icons/md';
import {BsGenderMale} from 'react-icons/bs';
import { useRef,useReducer } from 'react';
import {MyProfile,MyProfileTitle,MyProfileContent,CompleteYourProfile} from './styled';
import {CompleteTitle,CompleteText,CompleteBasic,Verified,VerifiedText} from './styled';
import {Row,FormDiv,FormEl,EditBtn,FiledInput,LiveInInput,IconEl,InputEl} from './styled';
import {LiveLabel,AddresInput,IconElStreet,FiledEmail,FiledEmailInput} from './styled';
import {EmailInput,IconEmail,EmailLabel,DataDiv,DataIcon,DataLabel} from './styled';
import {Gender,GenderIcon} from './styled';



/* ===============================================*/

const initialState ={
  live:'',
  addres:null,
  email:null,
  date:Number,
  gender:'',
};
const myReducer = (state, action) =>{
  switch(action.type){
    case'Change_name':
    return {...state, live: action.payload };
    case'Change_addres':
    return {...state, addres: action.payload };
    case'Change_email':
    return{...state,email: action.payload};
    case'Change_date':
    return{...state,date: action.payload};
    case'Change_gender':
    return{...state,gender: action.payload};
    default: return state;
  }
}
const ProfileCard = () => {

  const { t } = useTranslation(); 
    const liveRef = useRef(null);
    const streetRef = useRef(null);
    const emailRef = useRef(null);
    const dateRef = useRef(null);
    const genderRef = useRef(null);
    
   const [state, dispatch] = useReducer(myReducer, initialState);
   
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(liveRef.current.value);
       console.log(streetRef.current.value)
       console.log(emailRef.current.value);
       console.log(dateRef.current.value);
       console.log(genderRef.current.value);
   }
   const handle =() => {
     console.log(state)
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
                <EditBtn onClick={handle} type="submit" >{t("Edit_your_profile")}</EditBtn>
              </Row>
              <FormEl method="post"  onSubmit={handleSubmit}>
              <FiledInput>
                <LiveLabel htmlFor="">{t("Live_in")}</LiveLabel>
                <LiveInInput>
                    <IconEl>  <BiHome /> </IconEl>
                    <InputEl  type="text" placeholder="Zuichi, Switzerland" onChange={(e) => dispatch({type: 'Change_name', payload: e.target.value})} ref={liveRef}  />
              </LiveInInput>
            </FiledInput>
            <FiledInput>
                <LiveLabel htmlFor="">{t("Street_address")}</LiveLabel>
                <AddresInput>
                  <IconElStreet> <BiHome/> </IconElStreet>
                    <InputEl  type="text" placeholder="2445 Crosswind Drive" onChange={(e) => dispatch({type: 'Change_addres', payload: e.target.value})} ref={streetRef} />
                </AddresInput>
                </FiledInput>
              <FiledEmail>
                  <EmailLabel htmlFor="">{t("Email_address")}</EmailLabel>
                    <EmailInput>
                      <IconEmail>   < HiOutlineMail/> </IconEmail>
                        <FiledEmailInput type="email" placeholder="tomson@company.com" onChange={(e) => dispatch({type: 'Change_email', payload: e.target.value})} ref={emailRef} />
                      </EmailInput>
                </FiledEmail>
                <FiledInput>
                      <DataLabel htmlFor="">{t("data_of_birth")}</DataLabel>
                    <DataDiv>
                  <DataIcon>   <MdCake/> </DataIcon>
                      <InputEl type="text" placeholder="07.12.1997" onClick={(e) => dispatch ({type:'Change_date', payload: e.target.value})} ref={dateRef}/>
                    </DataDiv>
              </FiledInput>
              <FiledInput>
                  <DataLabel htmlFor="">{t("Gender")}</DataLabel>
                  <Gender>
                  <GenderIcon> <BsGenderMale/> </GenderIcon>
                    <InputEl type="text" placeholder="Male" onClick={(e) => dispatch ({type: 'Change_gender', payload: e.target.value})} ref={genderRef} />
                  </Gender>
                  <button type="submit" >Saved Console.log</button>
              </FiledInput>
                
              </FormEl>
            </FormDiv>
          </MyProfileContent>
      </MyProfile>
  );
}
export default ProfileCard;
