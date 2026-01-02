import prisma from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageSquare, Briefcase, Users } from "lucide-react";

// Pastikan menggunakan 'export default' dan Nama Fungsi Huruf Kapital
export default async function AdminDashboardPage() {
  // Mengambil jumlah pesan dari database MySQL
  // Kita bungkus di try-catch agar jika tabel belum ada, app tidak crash
  
  const [messageCount, portfolioCount] = await Promise.all([
  prisma.contactMessage.count(),
  prisma.portfolio.count(), // Sesuaikan dengan nama model di schema.prisma Anda
]);
  

  const stats = [
  { 
    title: "Total Pesan", 
    value: messageCount.toString(), 
    icon: <MessageSquare className="w-6 h-6 text-blue-600" /> 
  },
  { 
    title: "Project Portfolio", 
    value: portfolioCount.toString(), 
    icon: <Briefcase className="w-6 h-6 text-green-600" /> 
  },
  { 
    title: "Klien Aktif", 
    value: "8", // Jika ada tabel klien, bisa diganti prisma.client.count()
    icon: <Users className="w-6 h-6 text-purple-600" /> 
  },
];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500">Selamat datang kembali di panel kontrol perusahaan.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm shadow-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tambahan: Shortcut Akses Cepat */}
      <div className="bg-blue-600 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-semibold mb-2">Butuh bantuan mengelola konten?</h3>
        <p className="opacity-80 mb-4">Anda bisa menambah portfolio baru atau melihat pesan masuk melalui menu di samping.</p>
      </div>
    </div>
  );
}