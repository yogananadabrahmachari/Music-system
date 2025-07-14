const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://brahmachary873:cjOQarNuIpQUkcEM@cluster0.hhzi5wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Database");
});
