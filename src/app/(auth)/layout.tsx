import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Providers from "@/components/Providers";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Authentication",
  description: "Sign in or sign up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.className} antialiased`}>
          <Providers>
            <div className="min-h-screen flex items-center justify-center">
              {children}
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
