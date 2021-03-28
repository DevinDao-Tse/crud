const express = require('express')
const router = express.Router()
const User = require('../model/user')
const userController = require('../controller/user-ctrl')

// router.get('/',(req, res)=>{
//     res.send('Hello user page')
// })

router.get('/', userController.listUser)

router.get('/create-user', (req, res)=>{
    res.send('newuser')
})

router.post('/create-user', userController.createUser)
router.delete('/delete-user', userController.deleteUser)



module.exports = router;