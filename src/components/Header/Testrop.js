import {MdArrowDropDown} from 'react-icons/md'
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
padding:0;
list-style-type:none;
margin-top:13px;
`
const DropBody = styled.div`
width:120px;
height:90px;
background:#fff;
position:absolute;
top:29px;
left:35px;
right:0;
padding:10px;
text-decoration:none;
z-index:7;
`
const Drop =()=>{
    return (
      <Navbar>
        <NavItem  icon={<MdArrowDropDown />}>
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
        <Link  style={{color:"#000", marginLeft:17}} to="#" onClick={() => setOpen(!open)}>
          {props.icon}
        </Link>
  
        {open && props.children}
      </li>
    );
  }
   function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [,setMenuHeight] = useState(null);
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
                <Link to="/profile"> 
                 <h6>My Profile</h6>
                </Link> 
                <h6>Sing up </h6>  
              </DropBody>
            </DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
  export default Drop;