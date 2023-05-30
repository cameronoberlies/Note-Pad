const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const db = require("./db/db.json");
const app = express();
const route = require("./routes/routes");
