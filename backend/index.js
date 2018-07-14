const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = 3001;
const routes = require('./routes/product.routes');

// Create connection to database.
const { mongoose } = require('./config/database');

// Init express module.
const app = express();

/***** Settings *****/

// Set the views route.
app.set('views', path.join(__dirname, 'views'));

// Set the port when the server is listening.
app.set('port', process.env.PORT || port);


/***** Middlewares *****/

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/***** Routes *****/

app.use('/api', routes);

app.listen(app.get('port'), err => {
    if (err) {
        console.log('Error');
        process.exit(1);
    }

    console.log(`Server is running in http://localhost:${app.get('port')}`);
});

