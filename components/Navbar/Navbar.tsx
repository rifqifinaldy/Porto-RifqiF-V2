import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ZoomRotate } from "../../styles/global.animation";
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

const Navbar: FC<INavbar> = ({ toggle, open }) => {
  const router = useRouter();
  return (
    <RFNavbar>
      <NavWrapper>
        <Link passHref={true} href="/">
          <NavLogo>
            <motion.div variants={ZoomRotate} whileHover="hover">
              RF
            </motion.div>
          </NavLogo>
        </Link>

        <NavMenu>
          {open ? (
            <CloseIcon onClick={toggle} />
          ) : (
            <MobileIcon onClick={toggle} />
          )}
          {menu.map((menu, i) => {
            return (
              <NavItem key={i}>
                <Link passHref={true} href={menu.target}>
                  <NavLink isActive={router.pathname === menu.target}>{menu.title}</NavLink>
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
