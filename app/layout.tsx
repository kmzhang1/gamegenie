import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { NavBar } from '@/components/NavBar/NavBar';
import { theme } from '../theme';

export const metadata = {
  title: 'GameGenie',
  description: "A gamer's platform for recommendations and the latest news",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ display: 'flex' }}>
        <MantineProvider theme={theme}>
          <NavBar /> {/* Add NavBar here */}
          <main style={{ flex: 1 }}>{children}</main> {/* Page content */}
        </MantineProvider>
      </body>
    </html>
  );
}
