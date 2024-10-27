import { Outfit } from "next/font/google";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/charts/styles.css';

import "./globals.css";

import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
} from "@mantine/core";

const mainFont = Outfit({ subsets: ["latin"] });

const theme = createTheme({
  fontFamily: mainFont.style.fontFamily,
  cursorType: "pointer",
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
        <script defer src="https://eu.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_TOKEN}></script>
      </head>
      <body className={mainFont.className}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
