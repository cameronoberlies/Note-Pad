const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3002;


const routes = require("./routes/htmlRoutes");
const apiRoutes = require('./routes/apiRoutes')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', routes);





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


