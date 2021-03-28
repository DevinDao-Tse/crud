const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type:String, required: true },
    gender: {type:String , required: true},
    email : {type:String, required: true},
    registered_date : {type:Date, required: true}
})


module.exports = new mongoose.model('User', userSchema)