import React from 'react'
//import Scroll from 'react-scroll'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute} from './SidebarElements'
 
//const ScrollLink = Scroll.ScrollLink   

const Sidebar = ({isOpen ,toggle}) => {
 
  

   return (
  <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
    <Icon onClick={toggle}>
     <CloseIcon/>
    </Icon>
    <SidebarMenu>
  
  <SidebarLink>Pizzas</SidebarLink>


<SidebarLink>Desserts</SidebarLink>


 
     <SidebarLink>Featured</SidebarLink>
     


    </SidebarMenu>
    <SideBtnWrap>
     <SidebarRoute to = "/">Order Now</SidebarRoute>
    </SideBtnWrap>
  </SidebarContainer>

   )

}

export default Sidebar;


/* THIS WAS SUPPOSED TO BE HOW I WOULD USE THE NAVBAR TO SCROLL  TO SELECT COMPONENTS <ScrollLink 
to="example-destination" 
spy={true} 
smooth={true} 
duration={500} 
className='some-class' 
activeClass='some-active-class'
>
Link Text Goes Here
</ScrollLink> */ 