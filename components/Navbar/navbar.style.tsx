import styled from "styled-components";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

export const RFNavbar = styled.nav`
  background-color: rgba(34, 34, 34, 0.1);
  color: ${({ theme }) => theme.colors.text.primary};
  height: 80px;
  width: 100%;
  z-index: 999;
  position: relative;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2em;
`;

export const NavLogo = styled.div`
  cursor: pointer;
  font-size: 2em;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  color: ${({ theme }) => theme.colors.orange};
  border-radius: 40%;
  border: 0.2px solid ${({ theme }) => theme.colors.orange};
  text-align: center;
  opacity: ${({ theme }) => theme.opacity.medium};
  width: 50px;
  height: 50px;
`;

export const MobileIcon = styled(AiOutlineMenu)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8em;
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8em;
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
`;

export const NavItem = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: 1em;
  margin: 0 1em;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;
