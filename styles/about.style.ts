import Image from "next/image";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 15px;
`;

export const ImageBox = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.inner_shadow};
  background: "#fefefe";
`;

export const ImageFrame = styled.div`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.outer_shadow};
`;

export const AboutImage = styled(Image)`
  width: 100%;
  border: 10px solid transparent;
  vertical-align: middle;
  border-radius: 5px;
`;

export const InformationWrapper = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding: 0 15px;
`;

export const InformationText = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: ${({ theme }) => theme.margin.m};
`;

export const InformationMain = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

export const SocialMedia = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.margin.l};
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  height: 40px;
  width: 40px;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SocialMediaTitle = styled.h6`
    font-size: 18px;
    font-weight: ${({ theme}) => theme.font.weight.light};
    opacity: ${({ theme}) => theme.opacity.medium};
    color: ${({theme}) => theme.colors.text.secondary};
    margin-bottom: ${({theme}) => theme.margin.s};
`;
