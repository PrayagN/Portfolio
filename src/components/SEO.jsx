import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Prayag N | Portfolio",
    description = "Welcome to the portfolio of Prayag N, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    keywords = "Full Stack Developer, MERN Stack Developer, Frontend Developer, Backend Developer, Prayag N, Portfolio",
    name = "Prayag N",
    type = "website",
    url = "https://prayagn.netlify.app/",
    jsonLd = null
}) => {
    const defaultJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "url": url,
        "jobTitle": "Full Stack Developer",
        "sameAs": [
            "https://github.com/PrayagN",
            "https://www.linkedin.com/in/prayagn/",
            "https://www.instagram.com/__pray_ag_/"
        ],
        "description": description
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {/* <meta property="og:image" content={image} /> */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* <meta name="twitter:image" content={image} /> */}

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd || defaultJsonLd)}
            </script>
        </Helmet>
    );
}

export default SEO;
