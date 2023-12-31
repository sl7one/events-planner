import "./global.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const popins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Main page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={popins.className}>
      <body >{children}</body>
    </html>
  );
}
