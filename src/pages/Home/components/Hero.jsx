import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectGif from "../../../Images/AddProject.gif"

// Keyframe animations for a smooth fade-in effect
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  height: 80vh;
  margin: 6px 14px;
  max-width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 20px;
  animation: ${fadeInUp} 1s ease-in-out;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 12px 30px 12px !important;
    height: 70vh;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleTag = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 38px;
  }
  animation: ${fadeInUp} 1.5s ease-in-out;
`;

const DescriptiveTag = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 1.7;
  color: ${({ theme }) => theme.soft2};
  animation: ${fadeInUp} 2s ease-in-out;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  width: 55%;
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(76.35deg, #4D9DE0 15.89%, #20639B 89.75%);
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: linear-gradient(76.35deg, #20639B 15.89%, #4D9DE0 89.75%);
    transform: scale(1.05);
  }

  @media (max-width: 1250px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 100%; /* Make the image responsive */
  max-width: 500px; /* Set a maximum width */
  height: auto; /* Maintain aspect ratio */
  flex: 0.8;
  object-fit: cover;
  border-radius: 12px;
  animation: ${fadeInUp} 1.2s ease-in-out;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Add transition for hover effects */

  &:hover {
    transform: scale(1.05); /* Subtle zoom effect on hover */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px; /* Shadow on hover */
  }

  @media (max-width: 1000px) {
    display: none; /* Hide on smaller screens */
  }
`;

const Hero = ({ setSignInOpen }) => {
  return (
    <Container id="home">
      <Left>
        <TitleTag>
          Seamless Collaboration <br /> for Every Team
        </TitleTag>
        <DescriptiveTag>
          Keep your projects on track, effortlessly. With TeamSync, managing tasks becomes easier, communication is seamless, and your team stays aligned in real-time. Say goodbye to confusion—our intuitive platform helps you prioritize work, stay organized, and hit your deadlines with confidence. Collaborate smarter, faster, and achieve more together with TeamSync.
        </DescriptiveTag>
        <Button onClick={() => setSignInOpen(true)}>
          Start a New Project Today
        </Button>
      </Left>
      <Image src={ProjectGif} />
    </Container>
  );
};

export default Hero;
