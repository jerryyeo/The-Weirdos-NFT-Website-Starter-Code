import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import Logo from './sections/Logo'

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu = styled.u1`
display: flex;
justify-content: space-between;
align-items: center;
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%
}
`

const Navigation = () => {
  return (
    <Section>
      <NavBar>
         <Logo />
         <Menu>
           <MenuItem>Home</MenuItem>
           <MenuItem>About</MenuItem>
           <MenuItem>Roadmap</MenuItem>
           <MenuItem>Showcase</MenuItem>
           <MenuItem>Team</MenuItem>
           <MenuItem>Faq</MenuItem>
         </Menu>
         <Button text="Connect Wallet" link="https://google.com"/>

      </NavBar>
    </Section>
  )
}

export default Navigation