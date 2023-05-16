import styled from "styled-components";

export const Spinner = styled.div`
  border: 14px solid ${({ theme }) => theme.colors.purple};
  border-top: 14px ${({ theme }) => theme.colors.orange} solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 35%;
  left: 40%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
