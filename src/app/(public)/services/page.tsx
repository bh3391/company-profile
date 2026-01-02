import { Reveal } from "@/components/shared/reveal";
import { Laptop, Smartphone, LineChart, ShieldCheck, Globe, Code } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Membangun website responsif dan cepat menggunakan teknologi terbaru.",
    icon: <Laptop className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Mobile Apps",
    desc: "Aplikasi Android dan iOS dengan pengalaman pengguna yang mulus.",
    icon: <Smartphone className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Digital Marketing",
    desc: "Meningkatkan visibilitas brand Anda melalui SEO dan iklan terukur.",
    icon: <LineChart className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Cyber Security",
    desc: "Perlindungan data menyeluruh untuk sistem informasi perusahaan.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Cloud Services",
    desc: "Migrasi dan pengelolaan infrastruktur cloud yang efisien.",
    icon: <Globe className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Custom Software",
    desc: "Solusi perangkat lunak yang disesuaikan dengan kebutuhan bisnis unik Anda.",
    icon: <Code className="w-10 h-10 text-blue-600" />
  }
];
export const metadata = {
  title: "Layanan Kami",
  description: "Kami menyediakan berbagai solusi teknologi untuk mempercepat pertumbuhan bisnis Anda.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h1 className="text-4xl font-bold mb-4">Layanan Kami</h1>
            <p className="text-slate-500 max-w-xl mx-auto">
              Kami menyediakan berbagai solusi teknologi untuk mempercepat pertumbuhan bisnis Anda.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={i}>
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}