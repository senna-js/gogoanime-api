const express = require('express');
const cors = require('cors');
const routes = require('./api/route'); // Corrected path

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow frontend requests
app.use(express.json());

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send("Gogoanime API is running successfully!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
