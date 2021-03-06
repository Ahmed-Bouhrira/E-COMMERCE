require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true
  })
);
// Routes
app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/categoryRouter"));

// Connection with DB
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) throw err;
    console.log("connect to DB");
  }
);

// app.get("/", (req, res) => {
//   res.json({ msg: "WELCOME" });
// });
// app.post("/", (req, res) => {
//   res.json({ msg: "SUCCESS" });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listening on port ", PORT);
});
