import styled from "styled-components";

export const RFNavbar = styled.nav`
  background-color: rgba(34, 34, 34, 0.1);
  color: ${({ theme }) => theme.colors.text.primary};
  height: 70px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 2em;
`;

export const NavLogo = styled.div`
  font-size: 2em;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  color: ${({ theme }) => theme.colors.orange};
  border-radius: 40%;
  border: 0.2px solid ${({ theme }) => theme.colors.orange};
  text-align: center;
  opacity: ${({theme}) => theme.opacity.medium};
  width: 50px;
  height: 50px;
  margin: 0 1em;
`;

export const NavMenu = styled.div`
  display: flex;
`;

export const NavItem = styled.div`
  font-weight: ${({theme}) => theme.font.weight.normal};
  font-size: 1em;
  margin: 0 1em;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;
