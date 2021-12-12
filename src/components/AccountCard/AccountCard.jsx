
import React from 'react'

import {GrEdit} from 'react-icons/gr';
import {BiEditAlt} from 'react-icons/bi'
import{AiOutlineCheck} from 'react-icons/ai'
import {ProfileCardPage, ProfileCardPageImage, ProfileCardImageEditor,ProfileCardName} from './Account'
import {Span, Line, About,AboutFrom,AboutFromSpan1,AboutFromSpan2,AboutMember,EditBtn } from './Account'


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
