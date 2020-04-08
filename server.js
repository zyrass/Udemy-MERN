const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

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
