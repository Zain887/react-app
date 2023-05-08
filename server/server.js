// import modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

//app
const app = express();

//dataBase
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DataBaseConnectd")).catch(err => console.log("DataBase Connection Error", err));

//middleWare
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
const testRoutes = require('./routes/test');
console.log('testRoutes', testRoutes);
app.use('/', testRoutes);

//ports
const port = process.env.PORT || 8080;

//listner
app.listen(port, () =>
    console.log(`Server is running on ${port}`));

// app.use(cors());
// app.use(express.json());