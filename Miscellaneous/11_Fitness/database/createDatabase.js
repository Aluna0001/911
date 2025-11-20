import db from "./connection.js";

//Hvad kan vi lave af queries?

// db.exec() kører DDL og DCL statements mod databasen
// DDL - Data Definition Language - definerer strukturen af databasen (CREATE, ALTER, DROP)
// DCL - Data Control Language - håndterer rettigheder (GRANT, REVOKE)
// Meget lidt forskel på MySQL og SQLite

db.exec(`DROP TABLE IF EXISTS users;`);
db.exec(`DROP TABLE IF EXISTS exercise;`);

//FIND CONST DELETEMODE VIGTIGT
//Package.json er et godt sted at skrive scripts

// commandLine argument? --delete flag
// argv - en liste af argumenter (Java)
/*
Conventions for SQL
use lowercase
use snake case
use plural for tables
*/

// DDL
const DDL = `
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50),
    role TEXT CHECK( role IN ('ADMIN', 'STAFF', 'USER'))
);
  
CREATE TABLE exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50)
);
`;

// Kør DDL statement
await db.exec(DDL);

console.log("Database created successfully!");
