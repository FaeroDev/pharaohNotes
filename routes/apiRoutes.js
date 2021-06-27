const path = require("path")

const db = require("../db/db")

module.exports = (app) => {

    app.get("/api/notes", (req, res) => res.json(db))
}
