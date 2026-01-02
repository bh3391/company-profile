import prisma from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Calendar, User } from "lucide-react";

export default async function AdminMessagesPage() {
  // Ambil data pesan dari database
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Pesan Masuk</h1>
        <p className="text-slate-500">Daftar pesan dari form kontak website.</p>
      </div>

      <div className="grid gap-6">
        {messages.length === 0 ? (
          <div className="p-20 text-center border-2 border-dashed rounded-2xl">
            <Mail className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">Belum ada pesan yang masuk saat ini.</p>
          </div>
        ) : (
          messages.map((msg: any) => (
            <Card key={msg.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition">
              <CardHeader className="bg-slate-50/50 border-b">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{msg.name}</CardTitle>
                      <p className="text-xs text-slate-500">{msg.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-slate-400 gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(msg.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-slate-700 leading-relaxed text-sm">
                  {msg.message}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}