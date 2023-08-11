import { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    let tempErrors = {};

    // Name validation
    const nameRegex = /^[a-zA-Z-' ]+$/;
    if (!ref.current.name.value) {
      tempErrors.name = "Name is required";
    } else if (!nameRegex.test(ref.current.name.value)) {
      tempErrors.name = "Invalid name format";
    } else if (
      ref.current.name.value.length < 2 ||
      ref.current.name.value.length > 100
    ) {
      tempErrors.name = "Name should be between 2 to 100 characters";
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!ref.current.email.value) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(ref.current.email.value)) {
      tempErrors.email = "Invalid email format";
    }

    // Message validation
    if (!ref.current.message.value) {
      tempErrors.message = "Message is required";
    } else if (
      ref.current.message.value.length < 10 ||
      ref.current.message.value.length > 500
    ) {
      tempErrors.message = "Message should be between 10 to 500 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_ID,
        import.meta.env.VITE_TEMPLATE,
        ref.current,
        import.meta.env.VITE_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          ref.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder="Name" name="name" />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            <Input placeholder="Email" name="email" />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}
            <Button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
