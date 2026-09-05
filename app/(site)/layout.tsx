import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mb-8">
        <Navbar />
      </div>

      <main>{children}</main>

      <Footer />
    </>
  );
}
