import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ApiIcon from "@mui/icons-material/Api";
import HubIcon from "@mui/icons-material/Hub";

const ServicesSection = styled.section`
  padding: 80px 0;
  position: relative;
  z-index: 1;
`;

const SectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 720px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 48px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 24px;
  width: 100%;
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.3);
  box-shadow: rgba(23, 92, 230, 0.12) 0px 4px 24px;
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-6px);
    box-shadow: rgba(133, 76, 230, 0.35) 0px 8px 30px;
    border-color: rgba(133, 76, 230, 0.8);
  }
`;

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(133, 76, 230, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #854ce6;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 16px;
  flex-grow: 1;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechTag = styled.span`
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 8px;
  background: rgba(133, 76, 230, 0.15);
  color: #854ce6;
  font-weight: 500;
`;

const servicesData = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Full-Stack Web Architecture",
    description:
      "Engineering robust end-to-end web applications with React, TypeScript, Next.js, and Node.js. Focused on performance, responsive design, and intuitive user interfaces.",
    tags: ["React", "TypeScript", "Next.js", "Zustand", "Tailwind CSS"],
  },
  {
    icon: <AutoAwesomeIcon fontSize="large" />,
    title: "Generative AI & RAG Pipelines",
    description:
      "Architecting enterprise retrieval-augmented generation (RAG) pipelines, semantic vector search with ChromaDB, and custom LLM agent workflows for automation.",
    tags: ["Azure OpenAI", "FastAPI", "ChromaDB", "AnythingLLM", "Prompting"],
  },
  {
    icon: <ApiIcon fontSize="large" />,
    title: "Scalable API & Microservices",
    description:
      "Developing high-throughput RESTful APIs with Python FastAPI and Node.js. Comprehensive database schema design, query optimization, and secure JWT/OAuth authentication.",
    tags: ["FastAPI", "Python", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    icon: <HubIcon fontSize="large" />,
    title: "Real-Time & Distributed Systems",
    description:
      "Building low-latency real-time applications including live chat, geolocation tracking, and interactive audio with Socket.IO and LiveKit.",
    tags: ["Socket.IO", "LiveKit", "WebSockets", "Mapbox", "Redis"],
  },
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionWrapper>
          <Title>Technical Capabilities &amp; Services</Title>
          <Subtitle>
            Specialized engineering solutions across modern full-stack development, Generative AI pipelines, high-concurrency APIs, and scalable distributed architectures.
          </Subtitle>
          <Grid>
            {servicesData.map((item, index) => (
              <ServiceCard key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <TechTags>
                  {item.tags.map((tag, i) => (
                    <TechTag key={i}>{tag}</TechTag>
                  ))}
                </TechTags>
              </ServiceCard>
            ))}
          </Grid>
        </SectionWrapper>
      </Container>
    </ServicesSection>
  );
};

export default Services;
