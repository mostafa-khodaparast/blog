import type { Metadata } from "next"
import { Footer, Navbar } from "@/components"
import AppThemeProvider from "@/providers/ThemeProvider"
import "./globals.css"



export const metadata: Metadata = {
  title: "unique Blog",
  description: "",
  icons: {
    icon: '/images/faviconblog.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>
          <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AppThemeProvider>
      </body>
    </html >
  );
}
