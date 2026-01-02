import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // AEO & SEO: Gunakan nama brand dan kata kunci utama
  title: {
    default: "Nama Perusahaan Anda | Solusi Digital Terpercaya",
    template: "%s | Nama Perusahaan Anda",
  },
  description: "Kami membantu bisnis bertransformasi secara digital melalui pembuatan website, aplikasi mobile, dan strategi pemasaran yang terukur.",
  keywords: ["software house jakarta", "pembuatan website", "jasa aplikasi mobile", "transformasi digital"],
  authors: [{ name: "Nama Perusahaan Anda" }],
  creator: "Nama Perusahaan Anda",
  
  // SEO: Mengatur agar crawler bisa mengindeks halaman
  robots: {
    index: true,
    follow: true,
  },

  // Open Graph (Untuk tampilan saat share di WhatsApp/Social Media)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://perusahaananda.com",
    siteName: "Nama Perusahaan Anda",
    title: "Nama Perusahaan Anda | Solusi Digital Terpercaya",
    description: "Partner transformasi digital terbaik untuk pertumbuhan bisnis Anda.",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Nama Perusahaan Anda",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children} {/* Navbar/Footer tidak ada di sini lagi */}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}