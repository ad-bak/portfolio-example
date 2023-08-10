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
  position: relative;
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
  background-color: #c00099;
  color: white;
  font-weight: 500;
  width: 150px;
  border: none;
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  height: 90%;
  width: 90%;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;

  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
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
