"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createPortfolio(formData: FormData) {
  const title = formData.get("title") as string
  const category = formData.get("category") as string
  const imageUrl = formData.get("imageUrl") as string

  await prisma.portfolio.create({
    data: { title, category, imageUrl }
  })

  revalidatePath("/admin/portfolio")
  revalidatePath("/portfolio")
}

export async function deletePortfolio(id: number) {
  await prisma.portfolio.delete({ where: { id } })
  revalidatePath("/admin/portfolio")
}