import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../config/Theme.json'
import Drawer from '../components/drawer/RightDrawer'
import SvgIcon from '@mui/material/SvgIcon';




function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
const Nav = () => {
    
    return (
        
        <Navbar theme={theme}>
            {/* Routing */}
            <Menu theme={theme}>
                <li>
                    <NavLink to="/" activeClassName="activeTab" exact><HomeIcon color="white" sx={{fontSize: 70}} /></NavLink>
                </li>
                <li>
                    <NavLink to="/farm" activeClassName="activeTab" exact>Farm</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="activeTab" exact>About</NavLink>
                </li>
            </Menu>

            {/* Auth Routes */}
            <Menu theme={theme}>
                <li>
                    <NavLink to="/login" activeClassName="activeTab" exact>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register" activeClassName="activeTab" exact>Register</NavLink>
                </li>
                
                <Drawer />

            </Menu>
        </Navbar>
    )
}


//styled 

const Navbar = styled.div`

padding: 2%  2% 0% 2%;
background: ${props => props.theme.background};
display: flex;
justify-content: space-between;
`
const Menu = styled.ul`
margin: 0;
padding: 0;
display: flex;
list-style-type: none;
li{
    
    margin: 0 10px;
    font-size: 175%;
    font-weight: bold;
    a{
        /* padding: 3% 3% 5% 3%; */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: ${props => props.theme.color};
        text-decoration: none;
        
        :hover{
            background: white;
            
            color: ${props => props.theme.hoverColor};
            transition: 1.25s;
        }
    }
}
/* .activeTab{
    
    background: white;
    color: ${props => props.theme.hoverColor};
    transition: .25s;
} */
`

export default Nav
