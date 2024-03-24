require('dotenv').config({path:'../.env'})
const mongoose = require('mongoose');
// const Schema = mongoose.Schema
const Character = require('../models/character')

mongoose.connect(process.env.REACT_APP_DATABASE_URL)

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})



//----------------------------------------
const testChar = new Character({name: 'Intrepid', faction: 'Alliance'})

testChar.save()


async function findChar(charname) {
    let char = await Character.findOne({name: charname})
    if (char) {
        console.log('exists')
    } else {
        console.log('doesnt exist')
    }
}

findChar('Entrepid')