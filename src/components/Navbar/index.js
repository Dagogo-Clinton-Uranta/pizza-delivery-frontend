 import React from "react"
 import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'
 import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const Navbar = ({toggle}) => {

        return (
        <>
          <Nav>
          <NavLink to="/"> <FontAwesomeIcon icon={faPizzaSlice} />  Mama John's Pizza</NavLink>
          <NavIcon onClick = {toggle}>
            <p>Menu</p>
            <Bars/>
          </NavIcon>
          </Nav>
        </>
        )
 }

 export default Navbar ;
