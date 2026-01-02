import { Reveal } from "@/components/shared/reveal";
import ContactForm from "@/components/sections/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const contactDetails = [
    { icon: <Phone className="text-blue-600" />, label: "Telepon", value: "+62 812 3456 7890" },
    { icon: <Mail className="text-blue-600" />, label: "Email", value: "hello@perusahaan.com" },
    { icon: <MapPin className="text-blue-600" />, label: "Kantor", value: "Jl. Sudirman No. 1, Jakarta Pusat" },
    { icon: <Clock className="text-blue-600" />, label: "Jam Kerja", value: "Senin - Jumat, 09:00 - 18:00" },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-slate-500 max-w-xl mx-auto">
              Punya proyek luar biasa di pikiran Anda? Mari kita bicarakan bagaimana kami bisa membantu mewujudkannya.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Kontak */}
          <div className="lg:col-span-1 space-y-8">
            <Reveal>
              <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold mb-4">Informasi Kontak</h3>
                {contactDetails.map((detail, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">{detail.label}</p>
                      <p className="text-slate-700 font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Simulasi Google Maps */}
            <Reveal>
              <div className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col italic p-4 text-center">
                  <MapPin size={40} className="mb-2 opacity-20" />
                  <p>[ Google Maps Embed Here ]</p>
                  <p className="text-xs mt-2 italic">Gunakan iframe Google Maps di sini untuk produksi</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Kontak */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-100">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
export const metadata = {
  title: "Hubungi Kami",
  description: "Kami siap membantu Anda dengan pertanyaan atau proyek baru. Silakan isi formulir di bawah ini.",
};