import db from "./connection.js";

// Hvilke queries kan vi lave?

db.exec(`DROP TABLE IF EXISTS users;`);
db.exec(`DROP TABLE IF EXISTS exercises;`);

// CLI argumenter
const deleteMode = process.argv.includes("--delete");

// DDL
const DDL = `
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50),
    role TEXT CHECK(role IN ('ADMIN', 'STAFF', 'USER'))
);

CREATE TABLE exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    difficulty VARCHAR(50)
);
`;

// Kør DDL statements
await db.exec(DDL);

console.log("Database created successfully!");

// DML (seeding)
if (deleteMode) {
  console.log("Seeding database...");

  db.run(`INSERT INTO users (username, role) VALUES ('anders', 'ADMIN')`);
  db.run(`INSERT INTO exercises (name, difficulty) VALUES ('Pushups', 'Easy')`);

  console.log("Seed data inserted!");
}
