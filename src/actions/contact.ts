"use server"

import prisma from "@/lib/db" // Import instance dari file lib tadi
import { revalidatePath } from "next/cache"

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    })
    
    revalidatePath("/admin/messages")
    return { success: true }
  } catch (error) {
    console.error("Database Error:", error)
    return { success: false, error: "Gagal menyimpan ke database." }
  }
}