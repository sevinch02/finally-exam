import React from 'react';
import styled from 'styled-components';
import BigSearch from '../components/BigSearch';
import Hotel from '../components/Hotel';
import SearchLocation from '../components/SearchLocation';
import {RiLoader2Fill} from 'react-icons/ri'



const HotelListPage = styled.section`
background: ${(props)=> props.theme.hotellist};
padding-bottom:150px;
`
const Row = styled.div`
display:flex;
justify-content:space-around;
`
const BigSearchDiv = styled.div`
padding-top:75px;
margin-bottom:70px;
`
const ViewMore = styled.button`
border: 1px solid #B1B5C4;
box-sizing: border-box;
border-radius: 47px;
color: ${(props)=> props.theme.exTitle};
padding:12px 24px;
margin-left:450px;
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
background: transparent;
`
const HotelList = () => {
 
    return (
        <HotelListPage>
            <BigSearchDiv>
                <BigSearch/>
            </BigSearchDiv>

             <Row>
                 <SearchLocation/>   
                    <div>
                        <Hotel/>                       
                        <ViewMore type="button" ><RiLoader2Fill/> View More</ViewMore>
                    </div>
           </Row>      
    </HotelListPage>
    );
}

export default HotelList;
