import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import BigSearch from '../components/BigFilter/BigSearch';
import Hotel from '../components/Hotel/Hotel';
import SearchLocation from '../components/SearchHotellist/SearchLocation';
import {RiLoader2Fill} from 'react-icons/ri'
import {useParams } from "react-router-dom"; 
import apiCalls from '../config/api';
import {Link} from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io';
import { Loader } from '../components/TopTurs/TopTur';


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
export const Small = styled.div`
padding-top:23px;
margin-bottom:50px;
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.CardTitle};
`
export const ActiveSpan = styled.span`
color: ${(props) => props.theme.activeSpan};
` 
export const LinkSpan = styled.span`
color :${(props) => props.theme.CardTitle}; 
`
const HotelList = () => {

     const [isLoading , setIsLoading] = useState(true);
     const [error,setError] = useState('');
     const [hotel, setHotel] = useState([]);
     const id = useParams();
    useEffect(() => {
        setTimeout(() => {
      const gethotels = async () => {
        try {
          const data = await apiCalls.gethotels(id);
          setHotel(data);
          setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        };
      };  
      gethotels();  
    },2000);
  }, [id]);

 
    return (
        <HotelListPage>
            <div className='container' >
                <Small>
                  <Link className='link' to='/'><LinkSpan>Home<IoIosArrowForward/> </LinkSpan>  </Link> 
                 <ActiveSpan> Hotel list</ActiveSpan>
               </Small>
            </div>
           
            <BigSearchDiv>
                <BigSearch/>
            </BigSearchDiv>

             <Row>
                 <SearchLocation/>   
                    <div>
                        <div>

                         {(!isLoading && !error) && 
                             hotel.map(el => (
                                <div key={el.id} > 
                                    <Hotel hotelObj={el}/>
                               </div>
                               ))}
                             {isLoading ? <Loader/> : <HotelListPage/> }
                        </div>
                        <ViewMore type="button" ><RiLoader2Fill/> View More</ViewMore>
                    </div>
           </Row>      
    </HotelListPage>
    );
}

export default HotelList;
