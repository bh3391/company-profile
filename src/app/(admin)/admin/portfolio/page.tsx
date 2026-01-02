import prisma from "@/lib/db"
import { createPortfolio, deletePortfolio } from "@/actions/portfolio"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react"

export default async function AdminPortfolioPage() {
  const portfolios = await prisma.portfolio.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Manage Portfolio</h1>

      {/* Form Tambah */}
      <form action={createPortfolio} className="bg-white p-6 rounded-xl shadow-sm border space-y-4 max-w-xl">
        <h2 className="font-semibold">Tambah Proyek Baru</h2>
        <Input name="title" placeholder="Nama Proyek" required />
        <Input name="category" placeholder="Kategori (Web, Mobile, dll)" required />
        <Input name="imageUrl" placeholder="URL Gambar (https://...)" required />
        <Button type="submit" className="w-full">Simpan Proyek</Button>
      </form>

      {/* Tabel List */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4">Proyek</th>
              <th className="p-4">Kategori</th>
              <th className="p-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((item: any) => (
              <tr key={item.id} className="border-b last:border-0">
                <td className="p-4 font-medium">{item.title}</td>
                <td className="p-4 text-slate-500 text-sm">{item.category}</td>
                <td className="p-4 text-right">
                  <form action={async () => { "use server"; await deletePortfolio(item.id) }}>
                    <Button variant="ghost" size="icon" className="text-red-600">
                      <Trash2 size={18} />
                    </Button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}