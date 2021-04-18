//Dependencies
const express = require('express');

//access to routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//Express Configuration
const app = express();


//Set port for use
const PORT = 8080


//Setting a listener for the port. Runs when our server has successfully started
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });