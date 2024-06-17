const express = require("express");
const bodyParser = require('body-parser');
const locations = require('../mockDatabase/mock_database');
const app = express();

// Enable cors
app.use(cors());

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Express on Vercel"));
app.get('/api/v1/locations', (req, res)=>{
    res.json(locations)
});

app.get(`/api/v1/locations/:id`, (req, res)=>{
    const id = parseInt(req.params.id);

    const location = locations.find(loc => loc.id === id);

    if (!location) {
    return res.status(404).send('Location not found');
    }

    res.json(location);
});

app.use(bodyParser.json());

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
module.exports = app;
