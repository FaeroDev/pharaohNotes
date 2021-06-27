const path = require("path")

module.exports = (app) => {

    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/views/index.html')));

    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/views/notes.html')));
}
