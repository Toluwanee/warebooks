import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

async function getPostgresVersion() {
  const result = await sql`select version()`;
  console.log(result);
}


async function createUsersTable() {
  try {

    await sql`
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            firstName VARCHAR(255),
            lastName VARCHAR(255),
            phone VARCHAR(11) UNIQUE,
            email VARCHAR(255) UNIQUE,
            created_at TIMESTAMP
            );
        `;
    console.log('Table "users" created successfully.');
  } catch (error) {
    console.error('Error creating "users" table:', error);
  }
}

getPostgresVersion();
createUsersTable();


export default sql;
