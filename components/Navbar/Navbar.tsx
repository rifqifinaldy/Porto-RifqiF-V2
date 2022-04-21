import Link from "next/link";
import React from "react";
import {
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavWrapper,
  RFNavbar,
} from "./navbar.style";

const Navbar = () => {
  return (
    <RFNavbar>
      <NavWrapper>
        <NavLogo>RF</NavLogo>
        <NavMenu>
          <NavItem>
              <Link href="/"><NavLink>Home</NavLink></Link>
          </NavItem>
          <NavItem>
              <Link href="/about"><NavLink>About</NavLink></Link>
          </NavItem>
          <NavItem>
              <Link href="/project"><NavLink>Projects</NavLink></Link>
          </NavItem>
          <NavItem>
              <Link href="/contact"><NavLink>Contact</NavLink></Link>
          </NavItem>
        </NavMenu>
      </NavWrapper>
    </RFNavbar>
  );
};

export default Navbar;
