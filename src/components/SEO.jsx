import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Prayag N | Full Stack Developer – React, Node.js, FastAPI & AI",
    description = "Portfolio of Prayag N, Full Stack & AI Systems Engineer specializing in React, Node.js, FastAPI, and GenAI. View my production projects and architecture.",
    name = "Prayag N",
    type = "website",
    url = "https://prayagn.netlify.app/",
    image = "https://prayagn.netlify.app/og-image.png",
    jsonLd = null
}) => {
    const defaultJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${url}#person`,
                "name": name,
                "url": url,
                "jobTitle": "Full Stack Developer & Systems Engineer",
                "description": description,
                "sameAs": [
                    "https://github.com/PrayagN",
                    "https://www.linkedin.com/in/prayagn/",
                    "https://www.instagram.com/__pray_ag_/"
                ],
                "knowsAbout": [
                    "Full Stack Development",
                    "Python",
                    "FastAPI",
                    "React.js",
                    "TypeScript",
                    "Node.js",
                    "Express.js",
                    "Generative AI",
                    "RAG Workflows",
                    "MongoDB",
                    "PostgreSQL",
                    "Socket.IO",
                    "LiveKit",
                    "REST APIs"
                ],
                "hasOccupation": {
                    "@type": "Occupation",
                    "name": "Full Stack Developer",
                    "skills": "FastAPI, React, TypeScript, Node.js, GenAI, RAG, WebSockets, MongoDB, PostgreSQL"
                }
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What tech stack does Prayag N specialize in?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Prayag N specializes in Full Stack development with React, TypeScript, Python (FastAPI), Node.js, Express, and Generative AI/RAG automation workflows."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What scale of systems has Prayag N built?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Prayag N engineered backend and real-time systems for Aroundme app serving 65,000+ active users with Socket.IO and LiveKit, co-created the Shoppie AI shopping assistant on Shopify, and built the EatPlek restaurant reservation engine."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What services does Prayag N provide for freelance and engineering projects?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Prayag N provides end-to-end full stack web development, generative AI and RAG pipeline integration, high-performance RESTful API architecture with FastAPI/Node.js, and real-time WebSocket communication systems."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Prayag N Portfolio" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content="Prayag N - Full Stack & AI Systems Engineer Portfolio" />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd || defaultJsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
