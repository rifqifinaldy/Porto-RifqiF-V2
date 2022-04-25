import styled from "styled-components";

export const MobileMenuContainer = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: ${({ open }) => (open ? "998" : "-999")};
  background: ${({ theme }) => theme.colors.background};
  opacity: ${({ open }) => (open ? "1" : "0")};
  top: ${({ open }) => (open ? "0" : "-100")};
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`;

export const MobileMenuWrapper = styled.div`
  display: grid;
  margin-top: 20%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(20px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(40px);
  }
`;

export const MobileMenuItem = styled.div`
  margin-bottom: 5em;
`;

export const MobileLink = styled.a`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({theme}) => theme.colors.purple};
  }
`;
