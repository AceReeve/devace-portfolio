import "./globals.css";
import { UnifrakturCook } from 'next/font/google'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Footer from "./components/Footer";
import Header from "./components/Header";

const soloLevel = UnifrakturCook({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unifrakturcook',
  weight: "700"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={soloLevel.variable}> 
      <body className="bg-[#060022] text-white min-h-screen flex flex-col">
      <Header />
        <main className="flex-grow">{children}</main>
      <PrismicPreview repositoryName={repositoryName} />
      <Footer />
      </body>
    </html>
  );
}
