import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bruno Dantas - Desenvolvedor Front-end",
  description: "Portfólio de Bruno Dantas, desenvolvedor front-end especializado em HTML, CSS, JavaScript e React.",
  keywords: ["Bruno Dantas", "desenvolvedor", "front-end", "HTML", "CSS", "JavaScript", "React", "portfólio"],
  authors: [{ name: "Bruno Dantas" }],
  creator: "Bruno Dantas",
  openGraph: {
    title: "Bruno Dantas - Desenvolvedor Front-end",
    description: "Portfólio retro de Bruno Dantas com projetos e experiências em desenvolvimento web.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Dantas - Desenvolvedor Front-end",
    description: "Portfólio retro de Bruno Dantas com projetos e experiências em desenvolvimento web.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
