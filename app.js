const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
const router = require("./routes/routes");

app.use(express.json());

const whitelist = [
  "http://localhost:4200",
  "http://localhost:3000",
  "http://localhost:5000",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors({ ...corsOptions, credentials: true }));
// app.use(cors());

// al routes
app.use(router);

mongoose.connect(
  "mongodb+srv://alaraby:Alaraby12345@alaraby.4kkcg.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(5000, () =>
  console.log(
    "*******************************\n-----------Running-------------\n*******************************"
  )
);
