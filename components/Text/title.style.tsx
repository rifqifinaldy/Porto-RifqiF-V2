import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;
  max-width: 100%;
  padding : 0 15px;
  margin-bottom : 60px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const Subtitle = styled.h4`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.purple};
  opacity : ${({theme}) => theme.opacity.medium};
  margin: 0;
`;
