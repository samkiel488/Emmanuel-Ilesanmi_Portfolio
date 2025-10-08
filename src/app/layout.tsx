import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Emmanuel Ilesanmi - IT Audit & Cybersecurity Professional",
  description: "Portfolio of Emmanuel Ilesanmi, specializing in IT Audit, IT Risk Management, and Cybersecurity Assurance. Leveraging frameworks like COBIT, COSO, NIST, ISO 27001, and IIA Standards.",
  keywords: "IT Audit, Cybersecurity, Risk Management, Emmanuel Ilesanmi, Portfolio",
  authors: [{ name: "Emmanuel Ilesanmi" }],
  openGraph: {
    title: "Emmanuel Ilesanmi - IT Audit & Cybersecurity Professional",
    description: "Safeguarding organizational assets through risk-based audit planning, IT controls evaluation, and cybersecurity assurance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased transition-colors duration-300 bg-white text-gray-800 dark:bg-[#001f3f] dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
