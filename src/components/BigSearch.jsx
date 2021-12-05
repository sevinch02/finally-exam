import React  from 'react'
import styled from 'styled-components';
import {MdHotel} from 'react-icons/md';
import {MdFlightTakeoff} from 'react-icons/md';
import {MdDirectionsCarFilled} from 'react-icons/md';
import {useRef} from 'react';
import {BsArrowRepeat} from 'react-icons/bs';
import SearchPassenger from './SearchPassenger';
import { useNavigate } from "react-router-dom"; 

const BigSearchPage = styled.section `
background: ${(props) => props.theme.MainHeaderBg};
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
border-radius: 20px;
height: 205px;
`
const Forma = styled.form`
padding:25px 60px;
`
const DivFormEl = styled.div`
Width :332px;
Height:70px;
background: #E8EFFF;
// background: ${(props)=> props.theme.DivFormEl}; 
opacity: 0.8;
border: 1px solid #E7E8EA;
box-sizing: border-box;
border-radius: 8px;
`
const LabelEl = styled.label`
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #3B3E44;
padding:10px 12px 3px 12px;
`
const InputEl = styled.input`
background: #E8EFFF;
width:100%;
border:none;
outline:none;
padding:0 12px;
`
const IconSpan = styled.span`
Width :30px;
Height:30px;
position: relative;
margin-top:20px
`
const Row = styled.div`
display:flex;
flex-direction: row;
`
const SearchBtn = styled.button`
background: #3B71FE;
border-radius: 10px;
Width:152px;
Height:70px;
margin-left:50px;
outline:none;
border:none;
color:#fff;
`
const DateInput = styled.input`
border:none;
outline:none;
background:transparent;
&::placeholder {
  color: none;
}
`

//// Tab
const Body = styled.article`
  display: flex;
  align-items: center;
`
const TabsContent = styled.div`
max-width: 1147px;
width: 100%;
`
const TabsUl = styled.ul`
list-style: none;
margin: 0;
display: flex;
height: 30px;
`
const WrapperTabsContent = styled.div`
position: relative;
`
const Item1 = styled.div`
text-decoration:none;
margin-left:35px
`
const Item2 = styled.div`
margin-left:20px;
`
const Item3 = styled.div`
margin-left:20px;
`
const ALink = styled.a`
text-decoration:none;
color:${(props) => props.theme.cardBg};

`
const PassengerDiv = styled.div`
display:flex;
flex-direction:row-reverse;
margin-left:374px
`
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
            <SearchPassenger/>
            <span>1 Passenger</span>
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
             <BsArrowRepeat style={{position:"absolute",
              color:"#B1B5C3", top:0, left:5}} />
          </IconSpan> <br />
          <DivFormEl>
            <label htmlFor="">Check in</label> <br />
            <DateInput type="date"  ref={CheckInRef}  />
          </DivFormEl> 
           <IconSpan> 
              <BsArrowRepeat style={{position:"absolute",
               color:"#B1B5C3", top:0, left:5}} />
          </IconSpan>
          
            <DivFormEl>
           <label htmlFor="">Check out</label><br />
           
           <DateInput type="date"   ref={CheckOut}/>
          </DivFormEl>
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