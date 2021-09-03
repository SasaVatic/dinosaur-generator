const path = require('path');

const dino_index = (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../views') });
}

module.exports = {
    dino_index
}