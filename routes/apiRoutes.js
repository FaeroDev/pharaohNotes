const path = require("path")
const fs = require('fs')

const {nanoid} = require('nanoid')

const db = require("../db/db")
const { fstat } = require("fs")

module.exports = (app) => {

    app.get("/api/notes", (req, res) => res.json(db)),

    app.post("/api/notes", (req, res) => {
        console.log(`notes post route`)
        let newNote = req.body;
        let uid = nanoid()
        console.log(req.body)
        console.log(uid)
        newNote.id = uid
        // console.log(newNote)
        db.push(newNote);
        res.json(newNote);
        console.log(db)
        try {
            fs.writeFileSync(path.join(__dirname, '../db/db.json') ,JSON.stringify(db) )
        } catch (error) {
            throw(error)
        }
    }),
    
    app.delete("/api/notes", (req, res) => {
        console.log(`notes delete route`)
    })
}
