import styled from "styled-components";

export const RFNavbar = styled.nav`
  background-color: rgba(34, 34, 34, 0.1);
  color: ${({ theme }) => theme.text.primary};
  height: 50px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const NavLogo = styled.div`
  font-size: 2em;
  margin: 0 1em;
`;

export const NavMenu = styled.div`
  display: flex;
`;

export const NavItem = styled.div`
  font-weight: 300;
  font-size: 1em;
  margin: 0 1em;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
`;
