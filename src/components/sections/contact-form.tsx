"use client";

import { useState } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    
    try {
      const result = await sendContactMessage(formData);
      
      if (result.success) {
        setIsSuccess(true);
        toast.success("Pesan Terkirim!", {
          description: "Kami akan segera menghubungi Anda kembali.",
        });
        
        // Reset form setelah 3 detik
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error("Gagal mengirim pesan.");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan sistem.");
    } finally {
      setIsPending(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="bg-green-100 p-4 rounded-full">
          <CheckCircle2 className="w-16 h-16 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Terima Kasih!</h3>
        <p className="text-slate-500">Pesan Anda telah kami terima dan sedang diproses.</p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Kirim Pesan Lain
        </Button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input name="name" placeholder="Nama Lengkap" required disabled={isPending} />
        <Input name="email" type="email" placeholder="Email" required disabled={isPending} />
      </div>
      <Textarea name="message" placeholder="Tulis pesan Anda di sini..." rows={5} required disabled={isPending} />
      
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          "Kirim Pesan Sekarang"
        )}
      </Button>
    </form>
  );
}