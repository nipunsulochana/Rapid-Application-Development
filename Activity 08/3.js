const express = require("express");

const app = express();

app.get("/api/book", (req, res) => {
  const data = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
  ];
  res.send(`${JSON.stringify(data)}`);
});

app.listen("8080");
