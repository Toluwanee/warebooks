import postgres from "postgres";
import dotenv from "dotenv";
import { Pool } from 'pg';

const pool = new Pool();
const query = (text, params) => pool.query(text, params);


// import { Pool } from "pg";

// // Define the connection configuration
// const pool = new Pool({
//   user: "toluwalope9",
//   host: "localhost",
//   database: "warebooks",
//   password: "1",
//   port: 5432 // The default PostgreSQL port is 5432
// });

// Now, you can use the 'pool' instance to query the database


dotenv.config();

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

async function getPostgresVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

async function createContactTable() {
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS contacts (
            id SERIAL PRIMARY KEY,
            firstName VARCHAR(255),
            lastName VARCHAR(255),
            phone VARCHAR(11) NULL,
            email VARCHAR(255) NULL,
            message TEXT NULL,
            created_at TIMESTAMP
        );
      `;
    console.log('Table "contacts" created successfully.');
  } catch (error) {
    console.error('Error creating "contacts" table:', error);
  }
}

async function createUsersTable() {
  try {
    // Drop foreign keys that reference the users table
    // await sql`ALTER TABLE IF EXISTS forumList DROP CONSTRAINT IF EXISTS forumlist_userid_fkey;`;
    // await sql`ALTER TABLE IF EXISTS forumChat DROP CONSTRAINT IF EXISTS forumchat_userid_fkey;`;
    // await sql`ALTER TABLE IF EXISTS users DROP CONSTRAINT IF EXISTS users_myforum_fkey;`;
    // await sql`ALTER TABLE IF EXISTS users DROP CONSTRAINT IF EXISTS users_forum_fkey;`;
    // await sql`ALTER TABLE IF EXISTS journals DROP CONSTRAINT IF EXISTS users_forum_fkey;`;

    // Drop the users table if it exists
    // await sql`DROP TABLE IF EXISTS users;`;

    await sql`
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            firstName VARCHAR(255),
            lastName VARCHAR(255),
            profilePicture VARCHAR(255) NULL,
            phone VARCHAR(11) UNIQUE,
            email VARCHAR(255) UNIQUE,
            dateOfBirth DATE,
            gender VARCHAR(10),
            password VARCHAR(255),
            myForum INT NULL,
            forum INT NULL,
            journalId INT NULL,
            newsLetter BOOLEAN NULL,
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

export { query };
export default sql;
//export { pool, sql } ;
