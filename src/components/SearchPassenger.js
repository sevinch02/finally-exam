import {RiArrowDropUpLine} from 'react-icons/ri'
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {HiOutlinePlusCircle} from 'react-icons/hi';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
padding:0;
list-style-type:none;
`
const DropBody = styled.div`
position:absolute;
top:92px;
left:35px;
right:0;
padding:10px;
text-decoration:none;
z-index:7;
`
const ModalRow = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
margin-bottom: 6px;
border-bottom: 2px solid #E6E8EC;
`
const ItemSpanChild = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #B1B5C4;
`
const ModalItem = styled.div`
display:flex;
flex-direction:column;
padding-bottom:12px;
`
const ItemSpan = styled.span`
font-family: DM Sans;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777E91;
`
const PassengerModal = styled.div`
position:absolute;
top:47%;
left:59%;
Width :354px;
Height :224px;
background:#fff;
padding: 21px 29px;
`
const Buttons =styled.div`
display:flex;
`
const ButtonsBtn = styled.button`
border:none;
outline:none;
background:none;
color:#B1B5C3;
`
const SearchPassenger =()=>{
    return (
      <Navbar>
        <NavItem  icon={<RiArrowDropUpLine/>}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    );
  }
  function Navbar(props) {
    return (
      <nav >
        <Ul >{props.children}</Ul>
      </nav>
    );
  } 
  function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li >
        <Link to="#" onClick={() => setOpen(!open)}>
          {props.icon}
        </Link>
  
        {open && props.children}
      </li>
    );
  }
   function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
     
    
    }
    function DropdownItem(props) {
      
      return (
        <Link to="#"  onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span >{props.leftIcon}</span>
          {props.children}
          <span >{props.rightIcon}</span>
        </Link>
      );
    }  
    const [adults,setAdults ] = useState(1);
    const [children, setChildren] = useState(0);
    const [infult, setInfult] = useState(0);

   
    return (
      <div  ref={dropdownRef}>
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          unmountOnExit
          onEnter={calcHeight}>
          <div>
            <DropdownItem goToMenu="main">
             <DropBody> 
             <PassengerModal>
            <ModalRow>
            <ModalItem> 
               <ItemSpan>Adults</ItemSpan> 
               <ItemSpanChild>Ages 13 or above</ItemSpanChild> 
            </ModalItem>
            <Buttons>
              <ButtonsBtn onClick={()=> {setAdults (adults > 0 ? adults - 1 :0 )}} ><AiOutlineMinusCircle style={{width:32,height:32}}/></ButtonsBtn> 
              {adults}
              <ButtonsBtn onClick={()=> {setAdults (adults + 1  )}} ><HiOutlinePlusCircle style={{width:32,height:32}}/> </ButtonsBtn> 
            </Buttons>
              
            </ModalRow>
            <ModalRow> 
              <ModalItem>
              <ItemSpan>Children</ItemSpan> 
              <ItemSpanChild> Ages 2-12 </ItemSpanChild>
              </ModalItem> 
              <Buttons>
              <ButtonsBtn onClick={() => {setChildren (children > 0 ? children - 1:0  )}} ><AiOutlineMinusCircle style={{width:32,height:32}}/></ButtonsBtn> 
              {children}
              <ButtonsBtn onClick={() => {setChildren (children +1) }} > <HiOutlinePlusCircle style={{width:32,height:32}}/></ButtonsBtn>   
                </Buttons>
            </ModalRow>
              <ModalRow>
                <ModalItem> 
                  <ItemSpan>Infants</ItemSpan>  
                  <ItemSpanChild>under 2</ItemSpanChild> 
                </ModalItem>
                <Buttons>
                <ButtonsBtn onClick={()=> {setInfult (infult > 0 ? infult - 1 :0 )}}> <AiOutlineMinusCircle style={{width:32,height:32}} /> </ButtonsBtn>
                 {infult}
                <ButtonsBtn onClick={() => {setInfult (infult +1)}}><HiOutlinePlusCircle style={{width:32,height:32}}/> </ButtonsBtn>         
                </Buttons>
              </ModalRow>
          </PassengerModal>
              </DropBody>
            </DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
  export default SearchPassenger;