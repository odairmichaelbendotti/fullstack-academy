import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalFrame from "@/components/ConditionalFrame";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fullstack Academy | Transforme sua carreira em tecnologia",
    template: "%s | Fullstack Academy",
  },
  description:
    "Aprenda programação fullstack com mentoria especializada, projetos reais e garantia de emprego. Domine React, Node.js e as tecnologias mais demandadas do mercado.",
  keywords: [
    "curso de programação",
    "fullstack",
    "React",
    "Node.js",
    "desenvolvimento web",
    "bootcamp",
    "carreira tech",
    "javascript",
    "typescript",
    "Next.js",
  ],
  authors: [{ name: "Fullstack Academy" }],
  creator: "Fullstack Academy",
  publisher: "Fullstack Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Fullstack Academy | Transforme sua carreira em tecnologia",
    description:
      "Aprenda programação fullstack com mentoria especializada, projetos reais e garantia de emprego. Domine React, Node.js e as tecnologias mais demandadas do mercado.",
    url: "https://fullstackacademy.com.br",
    siteName: "Fullstack Academy",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fullstack Academy - Transforme sua carreira em tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fullstack Academy | Transforme sua carreira em tecnologia",
    description:
      "Aprenda programação fullstack com mentoria especializada, projetos reais e garantia de emprego.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "seu-codigo-verificacao-google",
  },
  alternates: {
    canonical: "https://fullstackacademy.com.br",
  },
  metadataBase: new URL("https://fullstackacademy.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
    >
      <body className="h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://fullstackacademy.com.br/#organization",
                  name: "Fullstack Academy",
                  url: "https://fullstackacademy.com.br",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://fullstackacademy.com.br/logo.png",
                  },
                  sameAs: [
                    "https://www.instagram.com/fullstackacademy",
                    "https://www.linkedin.com/school/fullstackacademy",
                    "https://www.youtube.com/@fullstackacademy",
                  ],
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Fullstack Academy",
                  description:
                    "Escola especializada em formação de desenvolvedores fullstack com mentoria e projetos reais.",
                  url: "https://fullstackacademy.com.br",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "BR",
                  },
                  teaches: [
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Next.js",
                    "JavaScript",
                    "Desenvolvimento Web Fullstack",
                  ],
                  hasCourseInstance: {
                    "@type": "CourseInstance",
                    courseMode: "online",
                    duration: "P6M",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://fullstackacademy.com.br/#website",
                  url: "https://fullstackacademy.com.br",
                  name: "Fullstack Academy",
                  publisher: {
                    "@id": "https://fullstackacademy.com.br/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <ConditionalFrame>{children}</ConditionalFrame>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
