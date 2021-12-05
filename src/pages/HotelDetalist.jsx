import React from 'react';
import ViewHotel from '../components/ViewHotel';
import styled from 'styled-components';

const Detalist = styled.div`
// padding-bottom:150px;

` 

const HotelDetalist = () => {
    return (
        <Detalist>
            <ViewHotel/> 
        </Detalist>
    )
}

export default HotelDetalist;
