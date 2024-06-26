require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const connectDB = require("./config/connectDB");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const registerRoute = require("./routes/register");
const authRoute = require("./routes/authorisation");
const refreshTokenRoute = require("./routes/refreshToken");
const logoutRoute = require("./routes/logout");
const employeesRoute = require("./routes/employees");
const studentsRoute = require("./routes/students");
const parentsRoute = require("./routes/parentGardian");
const academicPerformanceRoute = require("./routes/academicPerformance");
const subscribersRoute = require("./routes/subscribers");
const rootRoute = require("./routes/root");

// check express version
const fs = require("fs");
const package = fs.readFileSync("package.json");
const packageParse = JSON.parse(package);
const expressVersion = `v ${packageParse.dependencies.express.slice(1)}`;
console.info(`Using Express.js ${expressVersion}`);

// connect to Mongo DB
connectDB();

app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Then pass them to cors:
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

// routes
app.use("/api/register", registerRoute);
app.use("/api/login", authRoute);
app.use("/api/refresh", refreshTokenRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/employees", employeesRoute);
app.use("/api/subscribers", subscribersRoute);
app.use("/api/students", studentsRoute);
app.use("/api/parents", parentsRoute);
app.use("/api/academicperformances", academicPerformanceRoute);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.use("*", rootRoute);
}

app.use(errorHandler);

// listening for request when successfully connected to the MongoDB
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
