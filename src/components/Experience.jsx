import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      role: "Software Developer",
      company: "Around me app",
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
      role: "Go Shoppie - AI-Powered Shopping Assistant",
      company: "Freelance/Contract",
      location: "Remote",
      period: "2024",
      description: "Co-created Shoppie, an AI-powered shopping assistant for D2C brands and marketplaces, deployed as a custom Shopify app.",
      highlights: [
        "Built personalized AI chatbot functionality using AnythingLLM, enabling real-time customer engagement and product guidance",
        "Deployed AI-driven product discovery and smart recommendations using Azure OpenAI, boosting session-to-cart conversions",
        "Orchestrated plug-and-play integration across Shopify, web, and WhatsApp platforms, streamlining onboarding for partner brands"
      ],
      tags: ["Shopify", "Azure OpenAI", "AI/ML", "Remix", "E-commerce"]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Building scalable applications and innovative solutions that drive user engagement and business growth
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden border border-slate-800 hover:border-slate-700"
            >
              {/* Card Header */}
              <div className="p-8">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
                >
                  {expandedIndex === index ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>View Key Achievements</span>
                      <ChevronDown className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              {expandedIndex === index && (
                <div className="px-8 pb-8 animate-in slide-in-from-top">
                  <div className="border-t border-slate-800 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Achievements & Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center border border-slate-800">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              65K+
            </div>
            <div className="text-slate-400 font-medium">App Downloads</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center border border-slate-800">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              42%
            </div>
            <div className="text-slate-400 font-medium">Engagement Growth</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center border border-slate-800">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              2+ Years
            </div>
            <div className="text-slate-400 font-medium">Professional Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
