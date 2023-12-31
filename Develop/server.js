const express = require("express");
const compression = require("compression");
const apiRoutes = require("./Develop/routes/apiRoutes");
const htmlRoutes = require("./Develop/routes/htmlRoutes");
var test = require('./node_modules')

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(compression());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// app.listen(3000)