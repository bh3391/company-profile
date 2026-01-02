"use server"

import { cookies } from "next/headers";
import { SignJWT } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(process.env.JWT_SECRET || secretKey);

async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function loginAction(formData: FormData) {
  const password = formData.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: "Password salah!" };
  }

  const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 jam
  const session = await encrypt({ admin: true, expires });

  const cookieStore = await cookies();
  cookieStore.set("session", session, { expires, httpOnly: true });
  
  return { success: true };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}