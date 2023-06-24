const mongoose = require("mongoose");
const express = require("express");
const route = require("./routes/route");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://hariprasadcm:harIprasad@cluster0.ahvii9p.mongodb.net/urlshortner", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/", route);

app.listen(5000, () => {
  console.log("Express server is running on port 5000");
});
