import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


const NavComponent = () => {

    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);

    const location = useLocation();

    return (
        <div>
            <Navbar className="px-4 py-3" style={{ backgroundImage: "linear-gradient(to left top , darkblue , blue , rgb(98, 110, 214) )" }} dark expand="md">
                <NavbarBrand href="/">Cyber Bullying Detection</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={{ marginLeft: 'auto' }} navbar>
                        <NavItem>
                            <NavLink to="/home" className='mx-2' style={location.pathname.includes('home') ? { color: 'white', textDecoration: 'none', fontWeight: '500' } : { color: 'rgb(200,200,200)', textDecoration: 'none' }} >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/text" className='mx-2' style={location.pathname.includes('text') ? { color: 'white', textDecoration: 'none', fontWeight: '500' } : { color: 'rgb(200,200,200)', textDecoration: 'none' }}>Text Analysis</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/account" className='mx-2' style={location.pathname.includes('account') ? { color: 'white', textDecoration: 'none', fontWeight: '500' } : { color: 'rgb(200,200,200)', textDecoration: 'none' }}>Account Analysis</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/doc" className='mx-2' style={location.pathname.includes('doc') ? { color: 'white', textDecoration: 'none', fontWeight: '500' } : { color: 'rgb(200,200,200)', textDecoration: 'none' }}>Document Analysis</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/latest" className='mx-2' style={location.pathname.includes('latest') ? { color: 'white', textDecoration: 'none', fontWeight: '500' } : { color: 'rgb(200,200,200)', textDecoration: 'none' }}>Latest Tweet Analysis</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/query" className='mx-2' style={location.pathname.includes('query') ? { color: 'white', textDecoration: 'none', fontWeight: '500' } : { color: 'rgb(200,200,200)', textDecoration: 'none' }}>Query Analysis</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavComponent;
