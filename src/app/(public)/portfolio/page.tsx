import prisma from "@/lib/db"
import { Reveal } from "@/components/shared/reveal"

export default async function PortfolioPage() {
  const projects = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Portfolio Kami</h1>
        <p className="text-slate-500">Hasil karya terbaik kami untuk klien tercinta.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item: any) => (
          <Reveal key={item.id}>
            <div className="group relative overflow-hidden rounded-2xl aspect-video bg-slate-100">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition p-6 flex flex-col justify-end">
                <span className="text-blue-400 text-sm">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
export const metadata = {
  title: "Portfolio Proyek",
  description: "Lihat berbagai proyek sukses yang telah kami kerjakan untuk klien dari berbagai industri.",
};