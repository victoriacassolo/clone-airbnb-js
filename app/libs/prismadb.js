import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  const prisma = client;
}

export default client;
