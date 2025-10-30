import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Create a Reskilling plan for me",
    prompt: "I’m a sales professional with ~2–3 years’ experience (CRM/Salesforce, Excel, basic SQL) in B2B. I’m want to transition in to data science and want a clear, beginner-friendly 12-week roadmap. Please also design one end-to-end portfolio project relevant to sales, step-by-step tasks, expected deliverables, and interview talking points.",
    icon: "circle-question",
  },
  {
    label: "Help me find some jobs",
    prompt: "I am Hasnain having 10 years of experience in IT industry in software and AI. I am stationed in Lahore, Pakistan. I am looking for a job in Lahore. CAn you help me find 3 relevant jobs opening. Do share the links to jobs.",
    icon: "circle-question",
  },  
  {
    label: "Help me transition to a transferable skill",
    prompt: "I am John having 2 years of experience in Sales and faced sudden layoff. I want to transition to a transferable skill. Can you help me find a skill that I can transition to?",
    icon: "circle-question",
  },
  {
    label: "I need some general advice",
    prompt: "I am tired with my current job as a Hotel manager. I need a general advice on what to do next.",
    icon: "circle-question",
  }
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "Looking for a career switch? Let's chat!";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#0044FF" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
