import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button/Button";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <main>
      <Title>Hello</Title>
    </main>
  );
};

export default Home;
