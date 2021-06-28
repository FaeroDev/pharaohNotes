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
    
    app.delete(`/api/notes/:id`, (req, res) => {
        console.log(`notes delete route`)
        console.log(req.params)
        let noteID=req.params.id
        console.log(noteID)
        // for (const x of db) {
        //     if (x.id == noteID){
        //         console.log(x)
        //         console.log(db[0])
        //         // db.splice(x, 1);
        //     }
        // }
        for (let index = 0; index < db.length; index++) {
            const element = db[index];
            if (element.id == noteID){
                console.log(element.title)
                console.log(index)
                console.log(db[index])
                db.splice(index, 1)
                try {
                    fs.writeFileSync(path.join(__dirname, '../db/db.json') ,JSON.stringify(db) )
                } catch (error) {
                    throw(error)
                }
            }
            
        
            
        }
    })
}
