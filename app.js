const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();

console.log(process.env.API_KEY);
app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

app.listen(PORT, () => console.log("server is running on port :", PORT));
