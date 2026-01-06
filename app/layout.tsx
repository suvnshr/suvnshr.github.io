import React from "react";
import type { Metadata } from "next";
import profileData from "@/features/profile/data/profileData";
import Providers from "@shared/ui/Providers";
import "@styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(profileData.meta.url),
  title: profileData.meta.title,
  description: profileData.about,
  keywords: profileData.meta.tags.join(", "),
  robots: "index, follow, noimageindex",
  openGraph: {
    title: profileData.meta.title,
    description: profileData.about,
    url: profileData.meta.url,
    siteName: profileData.meta.title,
    images: [
      {
        url: profileData.avatar,
        width: 1200,
        height: 630,
        alt: profileData.name,
      },
    ],
    type: "profile",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="./favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#5c5236" />
        <meta name="theme-color" content="#212121" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"></link>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

