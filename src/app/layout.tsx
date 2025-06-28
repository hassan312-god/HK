import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { SEO_CONFIG } from "@/lib/constants";
import ChatBot from '@/components/ui/ChatBot'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: [...SEO_CONFIG.keywords],
  authors: [{ name: SEO_CONFIG.author }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
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
    type: "website",
    locale: "fr_FR",
    url: SEO_CONFIG.url,
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    siteName: SEO_CONFIG.title,
    images: [
      {
        url: SEO_CONFIG.image,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.image],
    creator: "@votre-handle",
  },
  alternates: {
    canonical: SEO_CONFIG.url,
  },
  verification: {
    google: "votre-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Headers de sécurité */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
        
        {/* Préchargement des ressources critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon et icônes */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hassan Bacri KEITA",
              "jobTitle": "Développeur Web & Apprenti Pentester",
              "description": "Développeur web passionné avec plusieurs années d'expérience, actuellement en transition vers la cybersécurité.",
              "url": "https://hassanbacri.com",
              "email": "hassan302025@outlook.fr",
              "sameAs": [
                "https://github.com/hassanbacri",
                "https://linkedin.com/in/hassanbacri",
                "https://app.hackthebox.com/profile/hassanbacri",
                "https://tryhackme.com/p/hassanbacri"
              ],
              "knowsAbout": [
                "Développement Web",
                "React",
                "Next.js",
                "TypeScript",
                "Cybersécurité",
                "Pentesting"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Header avec navigation sticky */}
        <Header />
        
        {/* Contenu principal */}
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        
        {/* Footer sera ajouté ici */}
        
        {/* Bot assistant */}
        <ChatBot />
        
        {/* Scripts de performance et analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
                  }
                });
              }
              
              // Smooth scroll polyfill pour Safari
              if (!('scrollBehavior' in document.documentElement.style)) {
                import('smoothscroll-polyfill').then(module => {
                  module.polyfill();
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
