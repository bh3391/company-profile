import { Reveal } from "@/components/shared/reveal";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const values = [
    "Inovasi Berkelanjutan",
    "Integritas Tinggi",
    "Fokus pada Klien",
    "Kualitas Tanpa Kompromi"
  ];

  return (
    <main className="pt-20">
      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl font-bold mb-6">Membangun Masa Depan Digital Sejak 2010</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Kami berawal dari tim kecil beranggotakan tiga orang dengan satu visi: 
                membantu bisnis lokal bersaing di pasar global melalui teknologi.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" 
                  alt="Team work" 
                  className="object-cover w-full h-full"
                />
              </div>
            </Reveal>
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Kenapa Memilih Kami?</h2>
                <p className="text-slate-600">
                  Kami bukan sekadar vendor, kami adalah partner strategis Anda dalam menghadapi perubahan era digital yang begitu cepat.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {values.map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-600 w-5 h-5" />
                      <span className="font-medium text-slate-700">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
export const metadata = {
  title: "Tentang Kami",
  description: "Kami adalah perusahaan yang berfokus pada transformasi digital dan pengembangan solusi teknologi terdepan.",
};