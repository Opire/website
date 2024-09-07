import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, createTheme, DEFAULT_THEME, MantineProvider } from "@mantine/core";

const mainFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opire - the bounty platform for software developers",
  description: "With Opire, anyone can create bounties for open-source projects and grow their community, while developers can solve issues and earn the associated rewards.",
  keywords: ["bounty", "bounties", "bounty platform", "bounty hunter", "bounty hunting", "opire", "opiredev", "open source", "community", "OOS", "reward", "reward platform"]
};

const theme = createTheme({
  primaryColor: 'teal',
  fontFamily: mainFont.style.fontFamily,
  cursorType: 'pointer',
  headings: {
    fontFamily: `${mainFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <ColorSchemeScript />
      </head>
      <body className={mainFont.className}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
