"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import type { ColorScheme } from "@/hooks/useColorScheme";

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
    <main className="flex min-h-screen flex-col items-center justify-end">
      <div className="mx-auto w-full max-w-5xl">
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
