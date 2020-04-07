const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (request, response) => {
	response.send('API Running');
});

app.listen(PORT, () =>
	console.log(`Connexion has been etablished on the port ${PORT}`)
);
