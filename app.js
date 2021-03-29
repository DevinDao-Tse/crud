const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const User = require('./model/user')
const userRoute = require('./routes/user')
const bodyParser = require('body-parser')
const ejs = require('ejs-mate')



const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('ejs', ejs)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


mongoose
    .connect('mongodb://127.0.0.1:27017/crud', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/user', userRoute)

app.get('/', (req, res)=>{
    res.render('home' ,{ home: 'Starting Page'})
})




app.listen(port,()=>{ console.log(`Connected to port: ${port}`)})






















