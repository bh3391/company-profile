import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nama Perusahaan Anda",
    "url": "https://perusahaananda.com",
    "logo": "https://perusahaananda.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-7890",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://facebook.com/perusahaananda",
      "https://instagram.com/perusahaananda",
      "https://linkedin.com/company/perusahaananda"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD untuk AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}