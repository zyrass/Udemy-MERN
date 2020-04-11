const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const app = express();

// Connect Database
connectDB();

// Init Middleware
/**
 * extended: false
 * https://expressjs.com/fr/api.html
 * -----------------------------------------------------------------
 * This option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
 * The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience
 * with URL-encoded.
 *
 * For more information, please see the qs library.
 */
app.use(express.json({ extended: false })); // app.use( bodyParser.json())

app.get('/', (request, response) => {
	response.send('API Running');
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () =>
	console.log(`Connexion has been etablished on the port ${PORT}`)
);
