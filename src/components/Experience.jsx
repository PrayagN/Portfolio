import React from "react";

// Work experience data (from your resume)
const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Around Me App",
    location: "Hyderabad, India",
    period: "Oct 2023 - Present",
    points: [
      "Built the app from scratch, contributing to 65,000+ downloads and 42% engagement growth.",
      "Engineered real-time location features (Shoutouts, Chitchats) using Socket.IO.",
      "Integrated Google Maps, Mapbox, and Ola Maps for dynamic geolocation.",
      "Redesigned shoutout system with threaded replies, increasing adoption by 25%.",
      "Optimized 90% of UI components for performance and consistency.",
      "Built group chat management with roles, moderation, join/leave logic.",
      "Integrated LiveKit for high-quality audio calls.",
      "Enabled deep linking + social media sharing (12% organic growth).",
      "Configured push notifications using Notifee (18% re-engagement boost)."
    ]
  },
  {
    role: "AI Developer (Shopify App)",
    company: "Go Shoppie – AI Assistant",
    period: "Project Work",
    points: [
      "Co-created Shoppie, an AI-powered shopping assistant for D2C brands.",
      "Built personalized AI chatbot using AnythingLLM for real-time product guidance.",
      "Integrated Azure OpenAI for smart recommendations and AI-driven search.",
      "Designed plug‑and‑play integration for Shopify, Web, and WhatsApp."        
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="space-y-10">
          {EXPERIENCE.map((job, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-sky-400">{job.role}</h3>
                  <p className="text-lg text-slate-300">{job.company}</p>
                </div>
                <p className="text-slate-400 text-sm">{job.period}</p>
              </div>

              {job.location && (
                <p className="text-slate-500 text-sm mt-1">📍 {job.location}</p>
              )}

              <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
