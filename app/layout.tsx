import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Commander Wondwossen Atnafu | ICT & IT Infrastructure Professional",
    template: "%s | Wondwossen Atnafu",
  },

  description:
    "Professional portfolio of Commander Wondwossen Atnafu — ICT and IT infrastructure professional specializing in networking, systems administration, cybersecurity, web technology, and ICT management.",

  keywords: [
    "Wondwossen Atnafu",
    "ICT Professional",
    "IT Infrastructure",
    "Network Administrator",
    "IT Manager",
    "Systems Administrator",
    "Cisco",
    "Windows Server",
    "Active Directory",
    "Next.js",
    "TypeScript",
    "Cybersecurity",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Commander Wondwossen Atnafu",
    },
  ],

  creator: "Commander Wondwossen Atnafu",

  openGraph: {
    title:
      "Commander Wondwossen Atnafu | ICT & IT Infrastructure Professional",

    description:
      "ICT professional specializing in IT infrastructure, networking, systems, cybersecurity, web technology, and ICT management.",

    type: "website",

    locale: "en_US",

    siteName: "Wondwossen Atnafu Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Commander Wondwossen Atnafu Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Commander Wondwossen Atnafu | ICT Professional",

    description:
      "ICT & IT Infrastructure Professional portfolio.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}