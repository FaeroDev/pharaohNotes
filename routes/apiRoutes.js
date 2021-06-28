const path = require("path")

const {nanoid} = require('nanoid')

const db = require("../db/db")

module.exports = (app) => {

    app.get("/api/notes", (req, res) => res.json(db)),

    app.post("/api/notes", (req, res) => {
        console.log(`notes post route`)
        let newNote = req.body;
        let uid = nanoid()
        console.log(req.body)
        console.log(uid)
        newNote.id = uid
        console.log(newNote)
        db.push(newNote);
        res.json(newNote);
    }),
    
    app.delete(`/api/notes/:id`, (req, res) => {
        console.log(`notes delete route`)
        console.log(req.params)
        let noteID=req.params.id
        console.log(noteID)
        for (const x of db) {
            if (x.id == noteID){
                console.log(x)
            }
            
        }
    })
}
