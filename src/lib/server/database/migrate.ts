import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

const client = createClient({ url: process.env.DB_URL!, authToken: process.env.DB_TOKEN });
const db = drizzle(client);

async function main() {
  await migrate(db, { migrationsFolder: "drizzle" });
  client.close();
}

main();
