import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Software Developer",
            company: "Aroundme app",
            location: "Hyderabad, India",
            period: "Oct 2023 - Present",
            description: "Played a pivotal role in building the app from scratch, contributing to 65,000+ downloads and 42% engagement growth through scalable architecture and innovative features.",
            highlights: [
                "Engineered real-time location-based features like 'Shoutouts' and 'Chitchats' using Socket.IO, boosting session duration by 20% and user engagement by 42%",
                "Connected Google Maps, Mapbox, and Ola Maps for dynamic geolocation services, enhancing location accuracy and interaction",
                "Redesigned the shoutout system with threaded replies, enabling richer conversations and increasing feature adoption by 25%",
                "Optimized over 90% of UI components for consistency and performance, contributing to a 10% improvement in user retention",
                "Developed robust group chat management including join, leave, remove, and role updates, streamlining community interactions",
                "Implemented LiveKit for high-quality, low-latency audio calls, improving real-time user communication across the platform",
                "Enabled deep linking and seamless social media sharing, driving 12% organic user growth through enhanced shareability",
                "Configured a push notification system via Notifee, increasing user re-engagement rates by 18%"
            ],
            tags: ["React Native", "Socket.IO", "Node.js", "LiveKit", "Maps Integration"]
        },
        {
            role: "Project: Go Shoppie",
            company: "Aroundme app",
            location: "Hyderabad, India",
            period: "Oct 2023 - Present",
            description: "Co-created Shoppie, an AI-powered shopping assistant for D2C brands and marketplaces, deployed as a custom Shopify app.",
            highlights: [
                "Built personalized AI chatbot functionality using AnythingLLM, enabling real-time customer engagement and product guidance",
                "Deployed AI-driven product discovery and smart recommendations using Azure OpenAI, boosting session-to-cart conversions",
                "Orchestrated plug-and-play integration across Shopify, web, and WhatsApp platforms, streamlining onboarding for partner brands"
            ],
            tags: ["Shopify", "Azure OpenAI", "AI/ML", "Remix", "E-commerce"]
        }
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Experience</h2>
                        <div className="experience-list">
                            {experiences.map((exp, index) => (
                                <div key={index} className="experience-item">
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company} | {exp.location}</h4>
                                    <span className="duration">{exp.period}</span>
                                    <p>{exp.description}</p>
                                    <ul>
                                        {exp.highlights.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="tech-stack">
                                        {exp.tags.map((tag, i) => (
                                            <span key={i} className="tech-badge">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;
