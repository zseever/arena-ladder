const mongoose = require('mongoose')
const Schema = mongoose.Schema

const character = new Schema ({
    name: String,
    faction: String,
}, {timestamps:true})

module.exports = mongoose.model('Character', character)