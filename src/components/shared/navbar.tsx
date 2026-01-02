"use client"

// PERBAIKAN 1: Import Link harus dari "next/link", bukan "next/image"
import Link from "next/link" 
import { useState } from "react"
import { usePathname } from "next/navigation" // Untuk deteksi halaman aktif
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Mendapatkan URL saat ini

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Portofolio", href: "/portfolio" },
    { name: "Kontak", href: "/contact" },
  ]

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo juga sebaiknya pakai Link agar tidak refresh saat diklik */}
          <Link href="/" className="font-bold text-2xl text-primary">
            CORP.
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`transition font-medium ${
                    isActive ? "text-primary font-bold" : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b p-4 space-y-4 flex flex-col animate-in slide-in-from-top duration-300">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              // PERBAIKAN 2: Gunakan Link, bukan tag <a> agar tidak refresh
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)} // Tutup menu setelah diklik
                className={`font-medium py-2 ${
                  isActive ? "text-primary" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}