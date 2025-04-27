const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(process.env.PORT || 3000, () => {
      console.log("MONGODB IS CONNECTED!");
    })
  )
  .catch((error) => console.log(error));

// Middlewares
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser


app.use(
  cors({
    origin: "*",
    
  })
);


const routes = require("./routes/routes");
app.use(routes);
