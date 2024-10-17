import styled from 'styled-components';
import HeroBgAnimation from './HeroBgAnimation';
import Groups3Icon from '@mui/icons-material/Groups3';
import TimelineIcon from '@mui/icons-material/Timeline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PublicIcon from '@mui/icons-material/Public';

const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #13111C;
  padding-bottom: 200px;
  margin-top: -80px;
  background: linear-gradient(343.07deg, rgba(23, 92, 230, 0.02) 2.71%, rgba(23, 92, 230, 0.0) 64.83%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 95%, 0 100%);
  
  @media (max-width: 768px) {
    padding-bottom: 100px;
    margin-top: -40px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 98%, 0 100%);
  }
`;

const Number = styled.div`
  width: 70px;
  height: 70px;
  font-size: 36px;
  font-weight: 800;
  color: #306EE8;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 6px solid #306EE8;
  background-color: rgba(48, 110, 232, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 32px;
  }
`;

const FeaturesTitle = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  color: #306EE8;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 600;
  width: 100%;
  max-width: 700px;
  text-align: center;
  color: hsl(246,  6%, 65%);
  margin-bottom: 80px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    margin-bottom: 60px;
  }
`;

const Content = styled.div`
  position: relative;
`;

const FeaturesContainer = styled.div`
  position: relative;
  z-index: 1;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  grid-column-gap: 60px;
  grid-row-gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`;

const FeatureCard = styled.div`
  width: 350px;
  height: 220px;
  position: relative;
  background-color: hsl(250, 24%, 9%);
  border: 0.1px solid #306EE8;
  border-radius: 16px;
  padding: 24px 42px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the start */

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 925px) {
    width: 300px;
  }

  @media (max-width: 728px) {
    padding: 20px 20px;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  color: #306EE8;
  position: absolute;
  bottom: 10px;
  right: 10px;
  flex-shrink: 0;
  border-top-right-radius: 40%;
  border-top-left-radius: 60%;
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 16px;
  border: 2px solid hsl(220, 80%, 75%, 30%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 925px) {
    width: 60px;
    height: 60px;
  }
`;

const FeatureTitle = styled.div`
  font-size: 20px;
  color: hsl(220, 80%, 75%);
  margin-bottom: 10px;
  margin-top: 16px;
  font-weight: 600;
`;

const FeatureCardDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: hsl(246,  6%, 65%);
`;

const BgImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const featuresData = [
  {
    icon: <ElectricBoltIcon fontSize="inherit" />,
    title: 'Project Management',
    description: 'Effortlessly manage your personal projects, assign tasks to team members, and keep track of progress in real-time, enhancing productivity.',
  },
  {
    icon: <Groups3Icon fontSize="inherit" />,
    title: 'Team Collaboration',
    description: 'Collaborate with team members seamlessly, communicate in real-time, and keep track of your team’s progress through integrated tools.',
  },
  {
    icon: <PublicIcon fontSize="inherit" />,
    title: 'Community Building',
    description: 'Connect with like-minded individuals, build communities, share ideas, and expand your network for greater opportunities.',
  },
  {
    icon: <TimelineIcon fontSize="inherit" />,
    title: 'Time Tracking',
    description: 'Monitor your time efficiently, set productivity goals, and analyze your progress to improve overall efficiency and performance.',
  },
];

const Features = () => {
  return (
    <FeaturesWrapper id="features">
      <Number>1</Number>
      <FeaturesTitle>Key Features</FeaturesTitle>
      <FeatureDescription>Discover how our app simplifies project management and makes collaboration effortless.</FeatureDescription>
      <Content>
        <FeaturesContainer>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index}>
              <div>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureCardDescription>{feature.description}</FeatureCardDescription>
              </div>
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
            </FeatureCard>
          ))}
        </FeaturesContainer>
        <BgImage>
          <HeroBgAnimation />
        </BgImage>
      </Content>
    </FeaturesWrapper>
  );
};

export default Features;
