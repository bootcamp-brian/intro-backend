# Introductory Backend Technology

## Database, entity, and attributes

An app can have a database to manage data for the app. The database will have entities that represent a thing, place, person, or object. An entity may have multiple attributes, and the attributes describe an entity, such as id, name, age, address of a person, id, name, price of a thing, etc. </br>

In a relational database, there are tables, and each table has columns that describe the table. </br>

For example, if you are building an e-commerce app, you will have a database to manage the data of this app. The database may hold information about users, order histories, products, and more. How would you organize these data in your database? You can organize your data into either a relational database with tables or a non-relational database with objects. PostgreSQL is a relational database with tables. We can make a table for users, a table for order histories, a table for products, etc. The table for users will have columns that describe the user, such as id, name, username, password, email, and address. The table for products will have columns, such as name, description, price, color, and size. </br>

```
entity: Person
attributes: id, name, age, address, email address
```

```
entity: Item
attributes: id, name, description, price, size, color
```

```
entity: Place
attributes: id, name, description, addresss, geographic_coordinate
```

## Relational database vs non-relational database

### Relational database

A relational database is a collection of information that organizes data in predefined relationships where data is stored in one or more tables (or "relations") of columns and rows, making it easy to see and understand how different data structures relate to each other. </br>

```
examples: PostgreSQL, MySQL, MariaDB, SQLite
```

<img width="465" alt="Screenshot 2023-03-11 at 9 25 26 AM" src="https://user-images.githubusercontent.com/58411107/224490703-dd06c358-e87f-4204-a8c7-1cbf04fd5709.png">
<img width="202" alt="Screenshot 2023-03-11 at 9 39 08 AM" src="https://user-images.githubusercontent.com/58411107/224490714-5e48ccc9-f8f8-488a-887e-e0a2e2331927.png">

### Non-relational database

A non-relational database is a database that does not use the tabular schema of rows and columns found in most traditional database systems. Instead, non-relational databases use a storage model that is optimized for the specific requirements of the type of data being stored. </br>
Non-relational database can have an object (key and value pair) structure, graph structure (Good for managing connections of people, map to calculate distance (edge) betwen places (vertex)), tree (hierarchy structure such as file management), or other data structures. </br>

```
examples: MongoDB, Redis, Apache Cassandra
```

<img width="339" alt="Screenshot 2023-03-11 at 9 38 47 AM" src="https://user-images.githubusercontent.com/58411107/224490687-3e4aece8-54f0-430f-8a86-a4576b35fbbf.png">

## Data flow of a web app
We will set up and run our backend on Node.js. Node.js is a JavaScript runtime environment, meaning we can execute our JavaScript code on Node.js environment. </br>
We will also create a database using PostgreSQL. The database will hold multiple tables to organize our data by corresponding category. </br>
We will then create our routing methods, handling HTTP requests using Express.js. Express.js is a node js web application framework. It helps us building RESTful APIs as well as routes. 
See the diagram below. APIs help frontend and backend interact.
From the frontend, you will invoke a fetch/axios method with URL of the API to retrieve the data from our database, finally. With the retrieved data, frontend will render the data.
<img width="660" alt="Screenshot 2023-03-13 at 12 12 21 AM" src="https://user-images.githubusercontent.com/58411107/224607878-d2fdc3d2-2478-4b2c-ad94-c57c02a62463.png">




# Workshop Instruction

## To run the app

1. `npm install`
2. `createdb intro_db`
3. `npm run start:dev`

## 1. Seed data to PSQL

1. go to server.js and inside the `app.listen(3000, ...)` callback function, connect to the database `intro_db` by using the imported `client` object and its `connect()` method.

```
await ?.connect();
```

2. Inside the same callback function of `app.listen(3000, ...)`, invoke the imported `syncAndSeed` function. Make sure to add the `await` keyword and the parenthesis to invoke the function.

```
? syncAndSeed?;
```

## 2. Go to PSQL shell to check the seeded data

1. Open terminal and then go to PSQL shell. `psql`.
2. `\l` to see all databases in your account.
3. If you see you have successfully created a database called `intro_db`, connect to this database by typing `\c intro_db`.
4. `\d` to see all tables in this database.
5. If you see a users table and a items table, the syncAndSeed successfully seeded data into your database. Try out PSQL queries to draw information you need from the tables.

## 3. Create APIs

1. Inside the server.js file, complete your api routing methods.
2. Add a string of query inside the `client.query` method.

```
SELECT * FROM users
```

3. Complete API routing methods for `/api/users` and `/api/items`.
4. Test your APIs by going to `localhost:3000/api/users` and `localhost:3000/api/items`

## 4. Fetch the JSON response from the API at Frontend

1. Go to public/index.html.
2. inside the `useEffect()` hook of React (Frontend JavaScript Library), using axios, make a `GET` method request to the api we created: `localhost:3000/api/users` and `localhost:3000/api/items`.

```
const ? = await axios.?("/api/?");
const ? = await axios.?("/?");
```

3. Make sure to update the state using `useState()` hook of React. The App component already has state variables called `users` and `items`. To assign the returned value from API to these state variables, use `setUsers` and `setItems` methods. Inside the useEffect, after axios calls, do as following. You muse add `.data` at the end of the variable. Also, avoid naming the variable `users` or `items` as they are already a taken variable names.

```
const usersRes = await axios.?("/api/?");
const ? = await axios.?("/?");

setUsers(usersRes.data);
setItems(?.data);
```

## End Goal
<img width="1363" alt="Screenshot 2023-03-12 at 5 12 28 AM" src="https://user-images.githubusercontent.com/58411107/224537131-56c0717f-bb57-4faf-92ee-1e3889b2c1a3.png"><img width="1360" alt="Screenshot 2023-03-12 at 5 13 56 AM" src="https://user-images.githubusercontent.com/58411107/224537135-c9e91826-8e16-4a45-9bbb-465ac0442634.png">

