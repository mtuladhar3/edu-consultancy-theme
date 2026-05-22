import "./globals.css";
import Navbar from "../components/Navbar";
import { Questrial } from "next/font/google";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
});
// export const metadata = {
//   title: "EduPath | Education Consultancy",
//   description: "Your gateway to studying abroad",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${questrial.variable} bg-brand-light text-slate-800 antialiased font-sans`}
      >
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
