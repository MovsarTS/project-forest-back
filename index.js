require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(require('./routes/comment.route'))
app.use(require('./routes/worker.route'))
app.use(require('./routes/product.route'))
app.use(require('./routes/service.route'))
app.use(require('./routes/user.route'))
app.use(require('./routes/request.route'))

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGOSER);
    console.log("Подключились к базе");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  console.log("Подключились к серверу");
});

start();
