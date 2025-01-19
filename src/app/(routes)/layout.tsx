import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Providers from "@/components/Providers";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SearchBox from "@/components/SearchBox";
import Notifications from "@/components/Notifications";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "IMDb Clone | Home",
  description: "Home",
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
            <Header />
            <Navbar />
            <SearchBox />
            {children}
            <Footer />
            <Notifications />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
