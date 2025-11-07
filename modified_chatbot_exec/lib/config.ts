import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Starter prompts that appear on the ChatKit start screen. These prompts are
// deliberately tailored around career transitions, reskilling and job searches
// to reflect the core use‑cases of this chatbot. Feel free to tweak the
// labels and prompts to better suit your own domain or audience.
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Create a Reskilling plan for me",
    prompt:
      "I’m a sales professional with ~2–3 years’ experience (CRM/Salesforce, Excel, basic SQL) in B2B. I’m want to transition in to data science and want a clear, beginner-friendly 12-week roadmap. Please also design one end-to-end portfolio project relevant to sales, step-by-step tasks, expected deliverables, and interview talking points.",
    icon: "circle-question",
  },
  {
    label: "Help me find some jobs",
    prompt:
      "I am Hasnain having 10 years of experience in IT industry in software and AI. I am stationed in Lahore, Pakistan. I am looking for a job in Lahore. CAn you help me find 3 relevant jobs opening. Do share the links to jobs.",
    icon: "circle-question",
  },
  {
    label: "Help me transition to a transferable skill",
    prompt:
      "I am John having 2 years of experience in Sales and faced sudden layoff. I want to transition to a transferable skill. Can you help me find a skill that I can transition to?",
    icon: "circle-question",
  },
  {
    label: "I need some general advice",
    prompt:
      "I am tired with my current job as a Hotel manager. I need a general advice on what to do next.",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "Looking for a career switch? Let's chat!";

/**
 * Returns a ChatKit theme configuration inspired by the Challenger, Gray &
 * Christmas branding. The colours used here mirror the vivid blue and warm
 * yellow seen on their website. In light mode the primary accent is a
 * vibrant blue used for interactive elements, while dark mode swaps the
 * accent for a soft golden yellow. The grayscale settings have also been
 * adjusted to increase contrast and legibility across both themes.
 */
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      // A lower tint value produces slightly more saturated light greys which
      // prevents white‑on‑blue text from appearing washed out.
      tint: 6,
      // Use a modest shade adjustment to ensure adequate contrast on dark
      // surfaces without making the UI feel too heavy.
      shade: theme === "dark" ? -3 : -2,
    },
    accent: {
      // In light mode use a bright royal blue for interactive elements and
      // highlights. In dark mode switch to a rich golden yellow to stand out
      // against the navy backgrounds defined in globals.css. These hex codes
      // were sampled from the Challenger Gray hero banner.
      primary: theme === "dark" ? "#F5D742" : "#0044FF",
      level: 1,
    },
  },
  radius: "round",
});