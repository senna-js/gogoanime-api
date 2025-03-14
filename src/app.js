const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api/route');

const app = express();
app.use(cors());
app.use('/api', apiRoutes);

// Use Render's Assigned Port or Default to 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
