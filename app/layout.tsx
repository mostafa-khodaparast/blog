import type { Metadata } from "next"
import { Footer, Navbar } from "@/components"
import AppThemeProvider from "@/providers/ThemeProvider"
import AuthSessionProvider from "@/providers/AuthSessionProvider";
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
          <AuthSessionProvider>
            <div className="container mx-auto">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthSessionProvider>
        </AppThemeProvider>
      </body>
    </html >
  );
}
