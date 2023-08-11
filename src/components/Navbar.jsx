import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #c00099;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 70px;
  height: 50px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="/img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
