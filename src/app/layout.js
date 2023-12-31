"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import store from "@/app/store/indexStore";
import Navbar from "@/components/_Components/Navbar/Navbar";
import Footer from "@/components/_Components/Footer/Footer";
import { SessionProvider } from "next-auth/react"
import ScrollNav from "@/components/_Components/ScrollingNav/ScrollNav";


const inter = Poppins({ subsets: ["latin"], weight: ["100","400","500","600","700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        <SessionProvider session={session}>
          <main>
          <Navbar />
          <div className="md:px-2 2xl:px-10">
        <ScrollNav />
      </div>
          {children}
          <Footer />
          </main>
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
}
