const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
const router = require("./routes/routes");

app.use(express.json());

app.use(cors({ origin: "http://localhost:4200", credentials: true }));
// app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to APIs world" });
});
// al routes
app.use("/api", router);

mongoose.connect(
  "mongodb+srv://alaraby:Alaraby12345@alaraby.4kkcg.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(process.env.PORT || 5000, () =>
  console.log(
    "*******************************\n-----------Running-------------\n*******************************"
  )
);
