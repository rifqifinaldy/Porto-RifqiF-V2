import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";
import {
  MobileMenuContainer,
  MobileMenuWrapper,
  MobileLink,
  MobileMenuItem,
} from "./mobile.style";
import { menu } from "./navigation.config";

interface IMobile {
  open: boolean;
  toggle: () => void;
}

const MobileMotion = {
  initial: {
    opacity: 0,
    y: "-80vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

const LinkMotion = {
  animate: {
    opacity: 1,
    y: 50
  },
  initial: {
    opacity: 0,
    y: 0
  }
};

const Mobile: FC<IMobile> = ({ open, toggle }) => {
  return (
    <AnimatePresence>
      <MobileMenuContainer
        variants={MobileMotion}
        initial="initial"
        animate="animate"
        exit="exit"
        open={open}
      >
        <MobileMenuWrapper>
          {menu.map((menu, i) => {
            return (
              <MobileMenuItem variants={LinkMotion} key={menu.target}>
                <Link passHref={true} href={menu.target}>
                  <MobileLink onClick={toggle}>{menu.title}</MobileLink>
                </Link>
              </MobileMenuItem>
            );
          })}
        </MobileMenuWrapper>
      </MobileMenuContainer>
    </AnimatePresence>
  );
};

export default Mobile;
