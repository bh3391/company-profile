const { PrismaClient } = require("@prisma/client")

declare global {
  var prisma: any
}

export const prisma: any =
  global.prisma ||
  new PrismaClient()

if (process.env.NODE_ENV !== "production") global.prisma = prisma

export default prisma