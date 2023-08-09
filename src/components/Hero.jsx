import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1440px;
  display: flex;
  justify-content: space-between;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>Hero</Container>
    </Section>
  );
};

export default Hero;
