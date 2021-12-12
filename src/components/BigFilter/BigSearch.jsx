import React from 'react'
import {useRef} from 'react';
import SearchPassenger from './SearchPassenger';
import { useNavigate } from "react-router-dom"; 
import {MdHotel} from 'react-icons/md';
import {MdFlightTakeoff} from 'react-icons/md';
import {MdDirectionsCarFilled} from 'react-icons/md';
import {BsArrowLeftRight} from 'react-icons/bs'
import {BigSearchPage,Forma ,DivFormEl,DateForm,LabelEl,InputEl} from './styled';
import {IconSpan, Row ,SearchBtn,DateInput,Body,TabsContent} from './styled';
import {TabsUl, WrapperTabsContent ,Item1,Item2,Item3,ALink,PassengerDiv} from './styled';



const BigSearch = () => {

  const FromRef = useRef(null);
  const CheckInRef = useRef(null);
  const CheckOut = useRef(null); 

// formaga yozilgan valuelarni console.logga chiqaradi
  const HandleSubmit = (e) =>{
    e.preventDefault();
    console.log('Location: ' +  FromRef.current.value);
    console.log('Check in: ' + CheckInRef.current.value);
    console.log('Check out: ' + CheckOut.current.value); 
  };
  const navigate = useNavigate();

  return (
    <div className="container"> 
      <BigSearchPage>
     
  <Body>
    <TabsContent>
      <TabsUl> 
        <Item1 className="tab-item"><ALink href="#item1" className="active" > <MdHotel/> Hotels</ALink></Item1>
        <Item2  className="tab-item"><ALink href="#item2"><MdFlightTakeoff/>Flight </ALink>  </Item2>
        <Item3 className="tab-item"><ALink href="#item3"><MdDirectionsCarFilled/>Car Rental</ALink> </Item3>
        <PassengerDiv>
            <SearchPassenger  />
           <LabelEl>Passengers</LabelEl>
        </PassengerDiv>
      </TabsUl>
     

      <WrapperTabsContent>
        <div id="item1">
        <Forma onChange={HandleSubmit}>
        <Row>
          <DivFormEl>
            <LabelEl htmlFor="">Location</LabelEl> <br />
            <InputEl type="text" placeholder="Where are you from?" ref={FromRef} />
          </DivFormEl>
         <IconSpan> 
             <BsArrowLeftRight style={{position:"absolute",
              color:"#B1B5C3", top:7, left:5 , }} />
          </IconSpan> <br />
          <DateForm>
            <label htmlFor="">Check in</label> <br />
            <DateInput type="date"  ref={CheckInRef}  />
          </DateForm> 
           <IconSpan> 
              <BsArrowLeftRight style={{position:"absolute",
               color:"#B1B5C3", top:7, left:5}} />
          </IconSpan>
          
            <DateForm>
           <label htmlFor="">Check out</label><br />
           
           <DateInput type="date"   ref={CheckOut}/>
          </DateForm>
            <SearchBtn type="button"  onClick={() => navigate(`/hotellist`)} >Search</SearchBtn>
          </Row>
         </Forma>
           </div>
           <div className="tab-content" id="item2">Flight</div>
           <div className="tab-content"  id="item3">Car </div>
      </WrapperTabsContent>
    </TabsContent>  
   </Body>
  </BigSearchPage>
      
    </div>
  );
}

const selectTab = element => {
  const active = document.querySelector('.active');   
  const visible = document.querySelector('.content-visible');
  const tabContent = document.getElementById(element.href.split('#')[1]);
  if (active) {
    active.classList.remove('active');
  }
  element.classList.add('active');

  if (visible) {
    visible.classList.remove('content-visible');
  }
  tabContent.classList.add('content-visible');
}
document.addEventListener('click', event => {
  if (event.target.matches('.tab-item a')) {
    selectTab(event.target);
    // console.log(event.target);
  }
}, false);
export default BigSearch;