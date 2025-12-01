import { services } from "../Helper/servicesHelper";

export function getServiceTitle() {
  return (
    <span className="text-4xl text-white">
      Our <span className="text-[#5DD149]">Services</span>
    </span>
  );
}

export const servicesData = {
  title: "Our Services",
  description:
    "AgentX empowers you with features that set it apart from traditional cryptocurrency. Revolutionary technology meets unmatched security.",
  cards: [
    {
      icon: services.smart,
      title: "SMART CALLING AGENTS",
      description:
        "AI-powered, sales agents that handle conversations with individuals, human-like clarity.",
    },
    {
      icon: services.reliable,
      title: "DEEP CALLER INSIGHTS",
      description:
        "Understand caller intent, behavior, and patterns. Leverage actionable insights to make smarter business decisions.",
    },
    {
      icon: services.scalable,
      title: "AUTOMATED CALL FLOWS",
      description:
        "End-to-end automation for follow-ups, reminders, confirmations, and managing call tasks in a smooth and swift model.",
    },
    {
      icon: services.multilingual,
      title: "INSTANT DATA SYNC",
      description:
        "Fetch updated caller data and times, keeping your CRM in perfect sync for digital & urgent every call.",
    },
    {
      icon: services.integration,
      title: "24/7 CALL SUPPORT",
      description:
        "Always-on assistance ensures no customer query goes unanswered, regardless of time zone or support needs.",
    },
  ],
};
