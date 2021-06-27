const path = require("path")

const db = require("../db/db")

module.exports = (app) => {

    app.get("/api/notes", (req, res) => res.json(db)),

    app.post("/api/notes", (req, res) => {
        console.log(`notes post route`)
        const newNote = req.body;
        db.push(newNote);
        res.json(newNote);
    }),
    
    app.delete("/api/notes", (req, res) => {
        console.log(`notes delete route`)
    })
}
