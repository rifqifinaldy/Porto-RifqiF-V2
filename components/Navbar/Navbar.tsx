import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import React, { FC } from "react";
import {
  CloseIcon,
  MobileIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavWrapper,
  RFNavbar,
} from "./navbar.style";
import { menu } from "./navigation.config";

interface INavbar {
  open: boolean;
  toggle: () => void;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  };
};

const Navbar: FC<INavbar> = ({ toggle, open }) => {
  return (
    <RFNavbar>
      <NavWrapper>
        <NavLogo>RF</NavLogo>
        <NavMenu>
          {open ? (
            <CloseIcon onClick={toggle} />
          ) : (
            <MobileIcon onClick={toggle} />
          )}
          {menu.map((menu, i) => {
            return (
              <NavItem key={i}>
                <Link href={menu.target}>
                  <NavLink>{menu.title}</NavLink>
                </Link>
              </NavItem>
            );
          })}
        </NavMenu>
      </NavWrapper>
    </RFNavbar>
  );
};

export default Navbar;
