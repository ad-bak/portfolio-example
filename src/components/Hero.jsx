import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 80vw;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.div`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #c00099;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  position: relative;
  background-color: #c00099;
  color: white;
  font-weight: 500;
  width: 150px;
  height: 60px;
  border: none;
  padding: 15px;
  border-radius: 20px;
  overflow: hidden;

  // Pseudo-element for comic-like frame with tiny squares
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 1px,
        rgba(0, 0, 0, 0.4) 1px,
        rgba(0, 0, 0, 0.4) 2px
      ),
      repeating-linear-gradient(
        -90deg,
        transparent,
        transparent 1px,
        rgba(0, 0, 0, 0.4) 1px,
        rgba(0, 0, 0, 0.4) 2px
      );
    clip-path: polygon(75% 75%, 100% 75%, 100% 100%, 75% 100%);
    pointer-events: none;
  }
`;

const Img = styled.img`
  height: 90%;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="../../public/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
