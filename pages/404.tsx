import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "../components/Layouts/Layouts";
import { NotFoundContainer, NotFoundText } from "../styles/404.style";

const NotFound = () => {
  const router = useRouter();
  const [time, setTime] = useState<number>(4);

  setInterval(() => {
    setTime(time - 1);
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Container>
      <NotFoundContainer>
        <NotFoundText>
          <h4>Page Not Found</h4>
          <p>
            You will be redirected to <Link href="/"> homepage </Link> in <span>{time}</span>
          </p>
        </NotFoundText>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;
