//Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Express Configuration
const app = express();

//body parsing
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({ extended: true });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//serves up files in the public folder
app.use(express.static('public'));



//Set port for use
const PORT = process.env.PORT || 3001;

//Setting a listener for the port. Runs when our server has successfully started
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});