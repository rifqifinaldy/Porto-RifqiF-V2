import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button/Button";
import styled from "styled-components";
import Container from "../components/Container/Container";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Avatar = styled.div`
  max-width: 450px;
	display: block;
	margin: auto;
	border-radius: 50%;
	padding: 15px;
  box-shadow: ${({ theme }) => theme.shadow.inner_shadow};
`;

const AvatarImg = styled(Image)`
  width: 100%;
  border-radius: 50%;
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => theme.shadow.outer_shadow};
`;

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <Avatar>
          <AvatarImg
            layout="responsive"
            src="/me.jpg"
            alt="Rifqi Finaldy"
            width={64}
            height={64}
          />
        </Avatar>
      </Container>
    </main>
  );
};

export default Home;
