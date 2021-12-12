import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineLaptop} from 'react-icons/ai';
import {MdDateRange} from 'react-icons/md';
import {BiWallet}  from 'react-icons/bi';
import {BsFillBasketFill} from 'react-icons/bs';
import {  useParams } from "react-router-dom"; 
import apiCalls from '../../config/api';
import {useState , useEffect} from "react";
import {Card,Row,Column,ColumnTitle,ReviewReating,ReviewReatingSpan} from './styled';
import {Room,Info,Date,DateStrong,Dates,Detalist,DetalistStrong} from './styled';
import {DetalistItems,DetalistItemsSpan,Button,Img} from './styled';



const Bron = () => {

  const [error,setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [confirm,setConfirm] = useState({});
  const {id} = useParams();

  useEffect(() => {
    setTimeout(() => {
    const getHotelsDetailes = async () => {
      try {
        const data = await apiCalls.getHotelsDetailes(id);
        setConfirm(data);
        setIsLoading(false);
      } catch (error) {
          setError(error.message);
          setIsLoading(false);
      };
    };  
    getHotelsDetailes();
  },1000)
}, [id]);

    return (
      <div>
      { isLoading ? error : <Card/> }

        <Card>
            <Row>
            <Column>
            <ColumnTitle> {confirm.name} </ColumnTitle>
            <ReviewReating>
              <AiFillStar style={{color: "yellow"}} />
              <ReviewReatingSpan>4.8 (122 reviews)</ReviewReatingSpan>
            </ReviewReating>
            <Room>
             1 bad room  +  Private room
            </Room>
            <Info>
              <Date>    
                  <DateStrong>Dates</DateStrong>
                  <Dates>May 15 - 22, 2021 </Dates>
             </Date>
             <Date>    
                  <DateStrong>Travelers</DateStrong>
                  <Dates>1 Passenger </Dates>
             </Date>
           </Info>

           <Detalist>
                <DetalistStrong>Reserve details</DetalistStrong>
                <DetalistItems> <span><AiOutlineLaptop/> Booking code </span> <DetalistItemsSpan> FD_158456</DetalistItemsSpan> </DetalistItems> 
                <DetalistItems> <span> <MdDateRange/> Date</span> <DetalistItemsSpan> 30 Apr, 2021</DetalistItemsSpan> </DetalistItems> 
                <DetalistItems> <span> <BsFillBasketFill/> Total </span> <DetalistItemsSpan>$833</DetalistItemsSpan> </DetalistItems>
                <DetalistItems> <span> <BiWallet/> Payment method </span> <DetalistItemsSpan>Creadit card </DetalistItemsSpan></DetalistItems>
           </Detalist>
          <Button type="button">Go To Your Home</Button>  
            </Column>
               <Img src={confirm.photo} alt="alt" />
            </Row>
        </Card>

        </div>
    );
}

export default Bron;
