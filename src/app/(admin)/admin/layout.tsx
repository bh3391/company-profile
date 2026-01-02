"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/admin/logout-button";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Briefcase, 
  Menu, 
  X,
  ShieldCheck 
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Inbox Pesan", href: "/admin/messages", icon: <MessageSquare size={20} /> },
    { name: "Portfolio", href: "/admin/portfolio", icon: <Briefcase size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      
      {/* TOMBOL MENU MOBILE (Hanya muncul di HP) */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-white border rounded-lg shadow-md text-blue-600"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* OVERLAY (Background gelap saat menu mobile buka) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[50] lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-[55]
        h-screen w-72 bg-white border-r flex flex-col transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        
        {/* Logo Section */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">ADMIN</h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Control Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)} // Tutup sidebar saat klik di mobile
                className={`
                  flex items-center gap-3 p-3 rounded-xl transition-all
                  ${isActive 
                    ? "bg-blue-50 text-blue-600 shadow-sm shadow-blue-100" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
                `}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Section */}
        <div className="p-4 border-t bg-slate-50/50">
          <LogoutButton />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Spacer untuk Mobile Header agar konten tidak tertutup tombol menu */}
        <div className="lg:hidden h-16" />
        
        <div className="p-4 md:p-8 lg:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}