import styled from "styled-components";

// FAQ Container with improved background, spacing, and typography
const FaqContainer = styled.section`
  background-color: #060b27;
  color: #ffffff;
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

// FAQ Title with stylish typography
const FaqTitle = styled.h2`
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 50px;
  position: relative;
  color: #00d4ff;
  &:after {
    content: "";
    width: 80px;
    height: 4px;
    background: #00d4ff;
    display: block;
    margin: 20px auto;
    border-radius: 2px;
  }
`;

// FAQ List Styling
const FaqList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

// FAQ Item with visual effects
const FaqItem = styled.li`
  background-color: #0e1447;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

// FAQ Question Styling
const FaqQuestion = styled.h4`
  font-size: 28px;
  font-weight: 600;
  color: #00d4ff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  &:before {
    content: "❓";
    margin-right: 10px;
    font-size: 24px;
    color: #ffffff;
  }
`;

// FAQ Answer Styling
const FaqAnswer = styled.p`
  font-size: 20px;
  color: #e0e0e0;
  line-height: 1.6;
`;

// FAQ Component with additional relevant questions and detailed answers
const Faq = () => {
  const faqData = [
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! We prioritize your security by employing industry-standard encryption and regularly updating our security protocols to prevent unauthorized access.",
    },
    {
      question: "How much does the app cost?",
      answer:
        "We are currently absolutly! free to use , catering to individuals, small teams, and large enterprises with customizable packages.",
    },
    {
      question: "What kind of support is available?",
      answer:
        "We provide 24/7 customer support via email, live chat, and phone to assist you with any technical issues or inquiries.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can easily cancel your subscription at any time. There are no hidden fees or long-term commitments.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features so you can evaluate the app without any cost.",
    },
    {
      question: "Is the app compatible with mobile devices?",
      answer:
        "Yes, our app is fully responsive and works seamlessly on smartphones and tablets. We also offer native mobile apps for iOS and Android.",
    },
  ];

  return (
    <FaqContainer>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqList>
        {faqData.map((faq, index) => (
          <FaqItem key={index}>
            <FaqQuestion>{faq.question}</FaqQuestion>
            <FaqAnswer>{faq.answer}</FaqAnswer>
          </FaqItem>
        ))}
      </FaqList>
    </FaqContainer>
  );
};

export default Faq;
