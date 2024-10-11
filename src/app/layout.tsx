import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// STYLED-COMPONENT 로딩 이슈 해결
import StyledComponentsRegistry from "./StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
