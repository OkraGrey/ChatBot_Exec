"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import type { ColorScheme } from "@/hooks/useColorScheme";
import Image from "next/image";

export default function App() {
  // Force the colour scheme to light mode regardless of system settings. We
  // intentionally avoid using useColorScheme() here to prevent any automatic
  // dark mode switching. ChatKit will receive a fixed scheme value.
  const scheme: ColorScheme = "light";

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  // Theme request handler is a no‑op because theme switching is disabled.
  const handleThemeRequest = useCallback((_: ColorScheme) => {}, []);

  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-end"
      style={{
        background: "linear-gradient(90deg, rgba(113, 134, 191, 1) 1%, rgba(255, 255, 255, 1) 45%, rgba(242, 242, 220, 1) 93%)"
      }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center gap-4 mb-6 px-4">
          <Image
            src="/challenger-logo.png"
            alt="Challenger Logo"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <h1 className="text-3xl font-bold text-gray-800">Challenger Bot</h1>
        </div>
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={handleThemeRequest}
        />
      </div>
    </main>
  );
}
