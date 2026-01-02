"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Lock, ShieldCheck, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const res = await loginAction(formData);

    if (res?.error) {
      toast.error(res.error);
      setLoading(false);
    } else {
      toast.success("Login Berhasil! Mengalihkan...");
      router.push("/admin");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-slate-200 px-4">
      
      {/* Tombol Kembali ke Beranda */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Website
      </Link>

      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 shadow-xl shadow-blue-200 mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Admin Portal</h1>
          <p className="text-slate-500 mt-2">Silakan masukkan akses untuk mengelola konten.</p>
        </div>

        {/* Card Form */}
        <div className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-2xl shadow-slate-200/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Security Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <Input 
                  name="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                  required 
                  disabled={loading}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]" 
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memproses Verifikasi...
                </div>
              ) : (
                "Masuk ke Dashboard"
              )}
            </Button>
          </form>

          {/* Footer Card */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              Sistem Keamanan Berlapis &bull; Sesi Terbatas 2 Jam
            </p>
          </div>
        </div>

        {/* Support Link */}
        <p className="text-center mt-8 text-sm text-slate-500">
          Lupa password? Hubungi <span className="text-blue-600 font-semibold cursor-pointer">IT Support</span>
        </p>
      </div>
    </div>
  );
}