import { jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(process.env.JWT_SECRET || secretKey);

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}