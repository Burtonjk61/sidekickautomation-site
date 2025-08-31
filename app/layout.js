export const metadata = {
  title: "Sidekick Automation — Your AI partner in productivity",
  description: "We teach and build AI workflows for small and mid-sized businesses.",
  openGraph:{title:"Sidekick Automation",description:"Your AI partner in productivity",images:["/logo.png"]}
};
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyMobileCTA from "../components/StickyMobileCTA";
export default function RootLayout({children}){
  return (<html lang="en"><body><Navbar/><main className="container-p py-10">{children}</main><StickyMobileCTA/><Footer/></body></html>);
}
