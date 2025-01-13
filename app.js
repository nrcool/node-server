const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

app.listen(PORT, () => console.log("server is running on port :", PORT));
