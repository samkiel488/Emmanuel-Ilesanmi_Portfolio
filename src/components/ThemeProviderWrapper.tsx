"use client";
import { ThemeProvider } from "next-themes";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      enableColorScheme={true}
      storageKey="emmanuel-theme"
      forcedTheme={undefined}
    >
      {children}
    </ThemeProvider>
  );
}
