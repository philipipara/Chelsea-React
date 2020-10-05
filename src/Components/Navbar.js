import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Logo from '../assets/images/logo.png';
import './styles/navbarStyle.css';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" light expand="md">
        <NavbarBrand href="/"><img className='logo' src={Logo} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.chelseamegastore.com/stores/chelsea/en" target='_blank'><i class="fas fa-store"></i> Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.chelseafc.com/en" target='_blank'> <i class="fas fa-external-link-alt"></i> Team Website</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Players
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href="https://www.chelseafc.com/en/teams/first-team?pageTab=players" target='_blank'>Chelsea Men</a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <a href="https://www.chelseafc.com/en/teams/women?pageTab=players" target='_blank'>Chelse Women</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;