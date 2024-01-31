const express = require("express");
const app = express();
const path = require("path");

const { syncAndSeed } = require("./seed");
const { client } = require("./db");

app.use(express.json());
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/users", async (req, res, next) => {
  try {
    //Complete the code below.
    const response = await client.query();
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/items", async (req, res, next) => {
  try {
    //Complete the code below.
    const response = await client.query();
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

app.use((err, req, res, next) => {
  console.log(err);

  res.status(500).send({ error: err });
});

app.listen(3000, async () => {
  try {
    console.log(`listening on port 3000`);
    //Start your code below.

    //End your code above.
  } catch (ex) {
    console.log(ex);
  }
});
