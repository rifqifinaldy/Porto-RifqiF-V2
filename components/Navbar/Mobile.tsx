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

const Mobile: FC<IMobile> = ({ open, toggle }) => {
  return (
    <MobileMenuContainer open={open}>
      <MobileMenuWrapper>
        {menu.map((menu, i) => {
          return (
            <MobileMenuItem key={i}>
              <Link href={menu.target}>
                <MobileLink onClick={toggle}>{menu.title}</MobileLink>
              </Link>
            </MobileMenuItem>
          );
        })}
      </MobileMenuWrapper>
    </MobileMenuContainer>
  );
};

export default Mobile;
