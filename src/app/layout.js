import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bijoy 24",
  description: "This application is an initiative of Bangladesh 2.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      
      <body className={inter.className}>
      <nav>This is nav</nav>
        {children}
        <footer>This is footer</footer>
        </body>
    </html>
  );
}
