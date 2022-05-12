import styled from "styled-components";

export const NotFoundContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NotFoundText = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  & > h4 {
    font-size: 72px;
  }
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
  }
  & > p {
    & > span {
      color: ${({ theme }) => theme.colors.red};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }
`;
