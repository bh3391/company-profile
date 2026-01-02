"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  
  // Jika URL mengandung '/admin', jangan tampilkan footer
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Profil */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold">CORP.</h2>
            <p className="text-sm leading-relaxed">
              Solusi digital terdepan untuk transformasi bisnis Anda. Kami mengombinasikan kreativitas dan teknologi untuk hasil maksimal.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigasi</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-white transition">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Layanan</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-default">Web Development</li>
              <li className="hover:text-white cursor-default">Mobile Apps</li>
              <li className="hover:text-white cursor-default">Digital Marketing</li>
              <li className="hover:text-white cursor-default">Cloud Computing</li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-6">Kontak Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Jl. Teknologi Raya No. 404, Jakarta Pusat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>contact@perusahaan.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {currentYear} Perusahaan Anda. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}