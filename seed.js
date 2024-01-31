const { client } = require("./db");

const syncAndSeed = async () => {
  try {
    const SQL = `
        DROP TABLE IF EXISTS items;
        DROP TABLE IF EXISTS users;
        
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE,
        age INTEGER,
        email VARCHAR(100)
        );

        CREATE TABLE items(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE,
        description TEXT,
        color VARCHAR(100)
        );

        INSERT INTO users(name, age, email) VALUES ('moe', 19, 'm@gmail.com');
        INSERT INTO users(name, age, email) VALUES ('larry', 25, 'l@gmail.com');
        INSERT INTO users(name, age, email) VALUES ('lucy', 30, 'lu@gmail.com');

        INSERT INTO items(name, description, color) VALUES('Sneakers', 'A pair of sneakers', 'white');

        INSERT INTO items(name, description, color) VALUES('Apple', 'A delicious apple', 'red');

        INSERT INTO items(name, description, color) VALUES('Pen', 'An ink pen', 'black');

        INSERT INTO items(name, description, color) VALUES('Book', 'biology book', 'green');

        INSERT INTO items(name, description, color) VALUES('car', 'a sports car', 'yellow');

        `;

    await client.query(SQL);
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  syncAndSeed,
};
