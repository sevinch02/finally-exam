import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/ProfileCard';
import AccountCard from '../components/AccountCard';

const ProfilePage = styled.section`
background: ${(props) => props.theme.myProfile};
padding-top: 100px;
padding-bottom:120px;
`
const Row = styled.div`
display:flex;
`
const Profile = () => {
    return (
        <ProfilePage>
           <div className="container">
             <Row>
              <AccountCard/>
              <ProfileCard/> 
            </Row>
           </div>

        </ProfilePage>
      
    )
}

export default Profile;
