import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 32px; /* Adjusted for mobile */
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.soft2};
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    display: block;
    height: 4px;
    width: 60px;
    background-color: ${({ theme }) => theme.primary};
    margin: 0 auto;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    font-size: 24px; /* Adjusted for mobile */
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px; /* Reduce gap for mobile */
  }
`;

const ValueItem = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.soft2};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <Title>Discover Who We Are</Title>
      <Subtitle>Your Partner in Project Success 🏆</Subtitle>
      <Description>
        At TeamSync, we believe that effective collaboration is the key to successful projects. Our platform is designed to empower teams by providing intuitive tools for task management, communication, and real-time updates. With TeamSync, you can keep your projects on track, organize tasks efficiently, and communicate seamlessly, ensuring your team meets deadlines with confidence.
      </Description>
      <Subtitle>Our Mission 🚀 </Subtitle>
      <Description>
        Our mission is to revolutionize the way teams work together. We strive to create an inclusive environment where every team member can contribute, communicate, and collaborate seamlessly, regardless of their location. Join us as we simplify project management and help you achieve your goals.
      </Description>
      <Subtitle>Our Core Values 🧡</Subtitle>
      <ValuesList>
        <ValueItem>🤝 Collaboration</ValueItem>
        <ValueItem>🔍 Transparency</ValueItem>
        <ValueItem>💡 Innovation</ValueItem>
        <ValueItem>📈 Growth</ValueItem>
      </ValuesList>
      <Description>
        Experience the difference with TeamSync. Let's work smarter together and transform the way you manage your projects!
      </Description>
    </Container>
  );
};

export default About;
