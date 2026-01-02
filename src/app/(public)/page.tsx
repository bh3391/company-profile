import { Button } from "@/components/ui/button";
import ContactForm from "@/components/sections/contact-form";
import { Reveal } from "@/components/shared/reveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <Reveal>
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Solusi Digital Untuk <br /> 
            <span className="text-blue-600">Masa Depan Bisnis Anda</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Kami membantu perusahaan bertransformasi melalui teknologi modern, desain yang memukau, dan strategi yang terukur.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/portfolio">Lihat Portfolio</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
      </Reveal>

      {/* SECTION SINGKAT TENTANG LAYANAN */}
      
      <section className="py-20 bg-white">
        <Reveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Kenapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Desain Modern</h3>
              <p className="text-gray-600">Tampilan website yang bersih dan sesuai tren masa kini.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Performa Tinggi</h3>
              <p className="text-gray-600">Website super cepat dengan teknologi Next.js terbaru.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Ramah SEO</h3>
              <p className="text-gray-600">Mudah ditemukan di mesin pencari seperti Google.</p>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
      
      {/* SECTION KONTAK */}
      <section id="contact" className="py-20 bg-slate-50">
        <Reveal>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Mari Berdiskusi</h2>
              <p className="text-slate-600 mb-6">
                Punya pertanyaan tentang layanan kami? Tim kami siap membantu Anda meningkatkan skala bisnis.
              </p>
              <div className="space-y-2 text-sm text-slate-500">
                <p>📍 Jl. Sudirman No. 123, Jakarta</p>
                <p>📧 info@perusahaan.com</p>
                <p>📞 +62 812 3456 7890</p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div></Reveal>
        
      </section>
    </main>
  );
}