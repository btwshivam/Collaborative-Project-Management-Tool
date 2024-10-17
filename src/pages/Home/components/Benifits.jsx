import styled from 'styled-components';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ForumIcon from '@mui/icons-material/Forum';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HeroBgAnimation from './HeroBgAnimation';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181622;
  padding-bottom: 150px;
  margin-top: -90px;
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  @media (max-width: 768px) {
    padding-bottom: 100px;
    margin-top: -50px;
  }
`;

const Number = styled.div`
  width: 70px;
  height: 70px;
  font-size: 36px;
  font-weight: 800;
  color: #854CE6;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(133, 76, 230, 0.1);
  border: 6px solid #854CE6;
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
  color: #854CE6;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  width: 100%;
  max-width: 700px;
  text-align: center;
  color: hsl(246, 6%, 65%);
  margin-bottom: 80px;
  @media (max-width: 768px) {
    width: 90%;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  height: 210px;
  position: relative;
  background-color: hsl(250, 24%, 9%);
  border: 0.1px solid #854CE6;
  border-radius: 16px;
  padding: 24px 32px; /* Adjusted padding */
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Enhanced transition */
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  justify-content: space-between; /* Space between elements */
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 24px; /* Add shadow on hover */
  }
  @media (max-width: 925px) {
    width: 300px;
  }
  @media (max-width: 728px) {
    padding: 20px 20px;
  }
`;

const FeatureIcon = styled.div`
  width: 60px; /* Reduced size for better aesthetics */
  height: 60px; /* Reduced size for better aesthetics */
  color: #854CE6;
  position: absolute;
  bottom: -10px; /* Adjusted position */
  right: 10px; /* Adjusted position */
  border-radius: 50%;
  border: 2px solid hsl(220, 80%, 75%, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(133, 76, 230, 0.1); /* Added background */
`;

const FeatureTitle = styled.div`
  font-size: 20px;
  color: #854CE6;
  margin-bottom: 10px;
  font-weight: 600;
`;

const FeatureCardDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: hsl(246, 6%, 65%);
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
  { icon: <TrendingUpIcon />, title: 'Increased Productivity', description: 'Maximize your efficiency by effortlessly managing projects and tracking progress with ease.' },
  { icon: <ForumIcon />, title: 'Improved Communication', description: 'Foster clear communication to keep everyone aligned and minimize misunderstandings.' },
  { icon: <CheckCircleOutlineIcon />, title: 'Better Project Outcomes', description: 'Leverage data-driven insights to make informed decisions for successful project completions.' },
  { icon: <Diversity3Icon />, title: 'Networking Opportunities', description: 'Expand your professional network by connecting with industry peers and collaborating on exciting projects.' },
];

const Benefits = () => {
  return (
    <FeaturesWrapper id="benefits">
      <Number>2</Number>
      <FeaturesTitle>Benefits</FeaturesTitle>
      <FeatureDescription>Discover the numerous advantages of using our app for effective project management.</FeatureDescription>
      <Content>
        <FeaturesContainer>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index}>
              <div style={{ flex: 1 }}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureCardDescription>{feature.description}</FeatureCardDescription>
              </div>
              <FeatureIcon>{feature.icon}</FeatureIcon>
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

export default Benefits;
